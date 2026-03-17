package backend.repository;

import backend.model.UserProfileData;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class UserProfileRepository {

    private final JdbcTemplate jdbcTemplate;

    public List<UserProfileData> getUserAllProfile() {
        String sql = "select * from usuarios";

        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            java.sql.Array pgArray = rs.getArray("perfis");

            // Converte para um array de Strings do Java
            List<String> listaPerfis = (pgArray != null)
                    ? Arrays.asList((String[]) pgArray.getArray())
                    : Collections.emptyList();

            return new UserProfileData(
                    rs.getInt("id"),
                    rs.getString("nome"),
                    listaPerfis
            );
        });
    }

    public void createNewUser(String nome, List<String> perfil){
        String sql = "INSERT INTO usuarios (nome, perfis) VALUES (?, ?)";

        // Converte a lista que veio no parâmetro para um array nativo do Java
        // Se a lista vier nula, criamos um array vazio para evitar erro no banco
        String[] perfisJavaArray = (perfil != null)
                ? perfil.toArray(new String[0])
                : new String[0];

        jdbcTemplate.update(sql, nome, perfisJavaArray);
    }

    public boolean existUser(Integer id){
        String sql = "SELECT COUNT(*) FROM usuarios WHERE id = ?";

        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, id);

        return count != null && count > 0;
    }

    public void updateUser(String nome, List<String> perfis, Integer id) {
        // 1. Definimos a query de atualização
        String sql = "UPDATE usuarios SET nome = ?, perfis = ? WHERE id = ?";

        // 2. Convertemos a List do Java para o array nativo do Postgres (TEXT[])
        // Tratamos o null para evitar que o banco receba um valor inesperado
        String[] perfisJavaArray = (perfis != null)
                ? perfis.toArray(new String[0])
                : new String[0];

        // 3. Executamos o update passando os parâmetros na ordem correta do SQL
        jdbcTemplate.update(sql, nome, perfisJavaArray, id);
    }

    public void deleteProfile(Integer id){
        String sql = "DELETE FROM usuarios WHERE id = ?";

        int rowsAffected = jdbcTemplate.update(sql, id);

        if (rowsAffected == 0) {
            throw new IllegalArgumentException("Não foi possível excluir: Perfil #" + id + " não encontrado.");
        }
    }
}
