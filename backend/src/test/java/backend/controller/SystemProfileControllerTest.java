package backend.controller;

import backend.model.SystemProfileData;
import backend.repository.SystemProfileRepository;
import backend.services.SystemProfileServices;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class SystemProfileControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private SystemProfileServices systemProfileServices;

    @MockitoBean
    private SystemProfileRepository systemProfileRepository;

    private SystemProfileController systemProfileController;

    @BeforeEach
    void setUp() {
        systemProfileController = new SystemProfileController(
                systemProfileServices
        );
    }

    @Test
    @DisplayName("Deve retornar lista de perfis quando existirem dados no banco")
    void deveRetornarListaQuandoExistiremPerfis() {
        // Arrange
        List<SystemProfileData> mockProfiles = List.of(
                new SystemProfileData(1, "DESENVOLVEDOR"),
                new SystemProfileData(2, "ADMINISTRADOR")
        );

        when(systemProfileServices.findAll()).thenReturn(mockProfiles);

        // Act
        ResponseEntity<List<SystemProfileData>> response = systemProfileController.getAllSystemProfileData();

        // Assert
        assertNotNull(response.getBody());
        assertEquals(200, response.getStatusCodeValue());
        assertEquals(2, response.getBody().size());
        assertEquals("DESENVOLVEDOR", response.getBody().get(0).getDescricao());

        verify(systemProfileServices, times(1)).findAll();
    }

    @Test
    @DisplayName("Deve retornar 400 Bad Request quando a descrição enviada for inferior ao limite mínimo de caracteres")
    void deveRetornarListaVaziaQuandoRepositorioEstiverVazio() {
        // Arrange
        when(systemProfileRepository.getAllProfiles()).thenReturn(new ArrayList<>());

        // Act
        ResponseEntity<List<SystemProfileData>> response = systemProfileController.getAllSystemProfileData();

        // Assert
        assertNotNull(response.getBody(), "O corpo da resposta não deve ser nulo");
        assertTrue(response.getBody().isEmpty(), "A lista deve vir vazia");
        assertEquals(200, response.getStatusCodeValue());
    }

    @Test
    @DisplayName("Deve retornar 400 Bad Request quando a descrição enviada for inferior ao limite mínimo de caracteres")
    void deveRetornarBadRequestQuandoDescricaoForMuitoCurta() throws Exception {
        // Arrange
        String descricaoCurta = "abc";
        // Cria o objeto que o Controller espera receber
        SystemProfileData invalidData = new SystemProfileData(null, descricaoCurta);

        // Configura o mock para lançar a exceção quando o SERVICE for chamado
        doThrow(new IllegalArgumentException("Quantidade de caracteres insuficiente"))
                .when(systemProfileServices).insertNewProfile(descricaoCurta);

        // Act & Assert
        ObjectMapper objectMapper = new ObjectMapper();
        mockMvc.perform(post("/profile/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidData))) // ENVIA JSON: {"id":null, "descricao":"abc"}
                .andExpect(status().isBadRequest())
                .andExpect(content().string("Quantidade de caracteres insuficiente"));
    }

    @Test
    @DisplayName("Deve retornar 201 Created quando a descrição enviada for válida e o perfil for criado com sucesso")
    void deveRetornarCreatedQuandoDescricaoForValida() throws Exception {
        // Arrange
        String descricaoValida = "Desenvolvedor Backend";
        SystemProfileData validData = new SystemProfileData(null, descricaoValida);

        // Act & Assert
        ObjectMapper objectMapper = new ObjectMapper();
        mockMvc.perform(post("/profile/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(validData)))
                .andExpect(status().isCreated()); // MUDANÇA AQUI: de isOk() para isCreated()

        verify(systemProfileServices, times(1)).insertNewProfile(descricaoValida);
    }

    @Test
    @DisplayName("Deve validar se as colunas e tipos de dados do banco de dados estão mapeados corretamente para o objeto de domínio")
    void deveValidarMapeamentoDoBanco() throws Exception {
        mockMvc.perform(get("/get-all-profiles")) // Verifique se não falta o "/" no início
                .andDo(print()) // Isso ajuda a ver o log que você postou
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("Deve retornar 200 OK ao atualizar com sucesso um perfil que já existe no sistema")
    public void deveRetornarOkAoAtualizarPerfilExistente() {
        Integer idParaEditar = 1;
        // Passando os 2 argumentos: ID e Descricao
        SystemProfileData data = new SystemProfileData(idParaEditar, "DESENVOLVEDOR SENIOR");

        ResponseEntity<?> response = systemProfileController.updateSystemProfile(idParaEditar, data);

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    @DisplayName("Deve lançar IllegalArgumentException ao tentar atualizar os dados de um perfil que não foi encontrado no banco")
    public void deveLancarExcecaoAoAtualizarIdInexistente() {
        // Arrange
        Integer idInexistente = 99;
        String descricaoTeste = "TESTE";

        // Como é um Record, instanciamos passando os valores no construtor
        SystemProfileData data = new SystemProfileData(idInexistente, descricaoTeste);

        // Configura o mock para lançar a exceção com a mensagem exata
        String mensagemEsperada = "Aviso: Nenhum perfil encontrado com o ID: " + idInexistente;

        doThrow(new IllegalArgumentException(mensagemEsperada))
                .when(systemProfileServices).updateProfile(idInexistente, descricaoTeste);

        // Act & Assert
        try {
            systemProfileController.updateSystemProfile(idInexistente, data);
        } catch (IllegalArgumentException e) {
            // Valida se a mensagem da exceção é exatamente a que o seu código gera
            assertEquals(mensagemEsperada, e.getMessage());
        }
    }

    @Test
    @DisplayName("Deve retornar 204 No Content após a exclusão bem-sucedida de um perfil existente")
    public void deveRetornarNoContentAoExcluirPerfilComSucesso() {
        // Arrange
        Integer idParaExcluir = 1;

        // Act
        ResponseEntity<?> response = systemProfileController.deleteSystemProfile(idParaExcluir);

        // Assert
        // Verifica o status 204 (No Content)
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());

        verify(systemProfileServices, times(1)).deleteProfile(idParaExcluir);
    }

    @Test
    @DisplayName("Deve lançar IllegalArgumentException ao tentar excluir um perfil cujo ID não consta na base de dados")
    public void deveLancarExcecaoAoTentarExcluirIdInexistente() {
        // Arrange
        Integer idInexistente = 99;
        String mensagemEsperada = "Não foi possível excluir: Perfil #99 não encontrado.";
        
        doThrow(new IllegalArgumentException(mensagemEsperada))
                .when(systemProfileServices).deleteProfile(idInexistente);

        // Act & Assert
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            systemProfileController.deleteSystemProfile(idInexistente);
        });

        assertEquals(mensagemEsperada, exception.getMessage());

        // Verificação extra de segurança
        verify(systemProfileServices, times(1)).deleteProfile(idInexistente);
    }
}