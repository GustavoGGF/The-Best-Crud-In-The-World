package backend.controller;

import backend.model.UserProfileData;
import backend.repository.UserProfileRepository;
import backend.services.UserProfileService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;

import java.util.Collections;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.hamcrest.Matchers.containsString;

@WebMvcTest(UserProfileController.class)
class UserProfileTest {
    @MockitoBean
    private UserProfileRepository userProfileRepository;

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private UserProfileService userProfileService;

    private ObjectMapper objectMapper;

    @Test
    @DisplayName("Deve retornar 200 OK e a lista de usuários quando houver usuários cadastrados no sistema")
    public void deveRetornarListaComUmUsuarioCadastrado() throws Exception {
        // Arrange
        List<String> perfisMock = List.of("ADMINISTRADOR");
        UserProfileData usuarioMock = new UserProfileData(1, "Lazaro Silva", perfisMock);
        List<UserProfileData> listaEsperada = List.of(usuarioMock);

        when(userProfileService.getAllProfile()).thenReturn(listaEsperada);

        // Act & Assert
        mockMvc.perform(get("/user/get-all-users")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].name").value("Lazaro Silva"))
                .andExpect(jsonPath("$[0].perfis[0]").value("ADMINISTRADOR"));

        verify(userProfileService, times(1)).getAllProfile();
    }

    @Test
    @DisplayName("Deve retornar 200 OK e um array vazio quando não existirem usuários cadastrados na base")
    public void deveRetornarListaVaziaQuandoNaoHouverUsuarios() throws Exception {
        // Arrange
        // O Controller agora depende do Service, então configuramos o mock lá
        when(userProfileService.getAllProfile()).thenReturn(Collections.emptyList());

        // Act & Assert
        mockMvc.perform(get("/user/get-all-users")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$", hasSize(0)));

        // O verify atesta que o fluxo passou corretamente pela camada de serviço
        verify(userProfileService, times(1)).getAllProfile();
    }

    @BeforeEach
    void setUp() {
        // Instancia manualmente para garantir que não seja null no JDK 17
        this.objectMapper = new ObjectMapper();
    }

    @Test
    @DisplayName("Deve retornar 201 Created quando os dados de um novo usuário forem válidos")
    public void deveRetornarCreatedQuandoDadosForemValidos() throws Exception {
        // Arrange
        UserProfileData dto = new UserProfileData(null, "Lazaro Silva de Oliveira", List.of("ADMINISTRADOR"));

        // Act & Assert
        mockMvc.perform(post("/user/new-user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isCreated()); // Ajustado de isOk() para isCreated()

        // O verify garante a integração correta com o Service
        verify(userProfileService, times(1)).insertNewUser(dto.name(), dto.perfis());
    }

    @Test
    public void deve_retornar_erro_quando_nome_for_curto() throws Exception {
        // Arrange
        UserProfileData dto = new UserProfileData(null,"Curto", List.of("ADMIN"));

        // Simula o lançamento da exceção que você definiu na sua lógica
        doThrow(new IllegalArgumentException("Nome deve ter no minimo 10 caracteres"))
                .when(userProfileService).insertNewUser(anyString(), anyList());

        // Act & Assert
        mockMvc.perform(post("/user/new-user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isBadRequest()); // Ou o status que seu @ControllerAdvice tratar
    }

    @Test
    public void deve_retornar_erro_quando_lista_de_perfis_for_vazia() throws Exception {
        // Arrange
        UserProfileData dto = new UserProfileData(null,"Lazaro Silva de Oliveira", List.of());

        doThrow(new IllegalArgumentException("Deve ter no mínimo um perfil"))
                .when(userProfileService).insertNewUser(anyString(), anyList());

        // Act & Assert
        mockMvc.perform(post("/user/new-user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void deve_retornar_ok_ao_atualizar_usuario_valido() throws Exception {
        // Arrange
        UserProfileData dto = new UserProfileData(1, "Gustavo Freitas", List.of("GERENTE"));

        // Act & Assert
        mockMvc.perform(put("/user/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isOk());

        // Verifica se o service foi chamado com o DTO correto
        verify(userProfileService, times(1)).updateUser(any(UserProfileData.class));
    }

    @Test
    public void deve_retornar_erro_quando_usuario_nao_existe() throws Exception {
        // Arrange
        UserProfileData dto = new UserProfileData(999, "Usuário Inexistente", List.of("USUARIO"));

        // Simulamos a lógica do seu Service
        doThrow(new IllegalArgumentException("Usuario não existe"))
                .when(userProfileService).updateUser(any(UserProfileData.class));

        // Act & Assert
        mockMvc.perform(put("/user/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isBadRequest()); // Assumindo que você tem o ExceptionHandler para 400
    }

    @Test
    public void deve_retornar_erro_quando_lista_perfis_vazia() throws Exception {
        // Arrange
        UserProfileData dto = new UserProfileData(1, "Gustavo Freitas", List.of());

        doThrow(new IllegalArgumentException("Deve ter no mínimo um perfil"))
                .when(userProfileService).updateUser(any(UserProfileData.class));

        // Act & Assert
        mockMvc.perform(put("/user/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isBadRequest());
    }

    @Test
    @DisplayName("Deve retornar 204 No Content ao excluir um usuário com sucesso através de um ID válido")
    public void deveRetornarNoContentAoExcluirComSucesso() throws Exception {
        // Arrange
        Integer idExistente = 1;

        // Act & Assert
        mockMvc.perform(delete("/user/delete/{id}", idExistente))
                .andExpect(status().isNoContent());

        verify(userProfileService, times(1)).deleteProfile(idExistente);
    }

    @Test
    @DisplayName("Deve retornar 400 Bad Request ao tentar excluir um usuário com ID inexistente")
    public void deveRetornarBadRequestQuandoIdNaoExistir() throws Exception {
        // Arrange
        Integer idInexistente = 99;
        String mensagemEsperada = "Não foi possível excluir: Perfil #99 não encontrado.";

        // O mock agora observa o Service, conforme o padrão SOLID que aplicamos
        doThrow(new IllegalArgumentException(mensagemEsperada))
                .when(userProfileService).deleteProfile(idInexistente);

        // Act & Assert
        mockMvc.perform(delete("/user/delete/{id}", idInexistente))
                .andExpect(status().isBadRequest())
                .andExpect(content().string(containsString("não encontrado")));

        verify(userProfileService, times(1)).deleteProfile(idInexistente);
    }

    @Test
    @DisplayName("Deve retornar 400 Not Found quando o ID informado não corresponder a nenhum perfil no banco de dados")
    public void deveRetornarNotFoundQuandoPerfilNaoExistir() throws Exception {
        // Arrange
        Integer idInexistente = 99;
        String mensagemEsperada = "Não foi possível excluir: Perfil #99 não encontrado.";

        // Simula o comportamento do método deleteProfile quando rowsAffected == 0
        doThrow(new IllegalArgumentException(mensagemEsperada))
                .when(userProfileService).deleteProfile(idInexistente);

        // Act & Assert
        mockMvc.perform(delete("/user/delete/{id}", idInexistente))
                .andExpect(status().isBadRequest())
                .andExpect(content().string(containsString(mensagemEsperada)));

        verify(userProfileService, times(1)).deleteProfile(idInexistente);
    }
}
