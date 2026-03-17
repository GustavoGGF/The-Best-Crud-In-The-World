package backend.repository;

import backend.model.SystemProfileData;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class SystemProfileRepository {

    private final JdbcTemplate jdbcTemplate;

    public List<SystemProfileData> getAllProfiles() {
        String sql = "select * from profile";

        return jdbcTemplate.query(sql, (rs, rowNum) -> new SystemProfileData(
                rs.getInt("id"),
                rs.getString("descricao")
        ));
    }

    public void createNewProfile(String descricao) {
        String sql = "INSERT INTO profile (descricao) VALUES (?)";
        jdbcTemplate.update(sql, descricao);
    }

    public void updateProfile(Integer id, String novaDescricao) {
        String sql = "UPDATE profile SET descricao = ? WHERE id = ?";

        int rows = jdbcTemplate.update(sql, novaDescricao, id);

        if (rows == 0) {
            throw new IllegalArgumentException("Aviso: Nenhum perfil encontrado com o ID: " + id);
        }
    }

    public void deleteProfile(Integer id) {
        String sql = "DELETE FROM profile WHERE id = ?";

        int rowsAffected = jdbcTemplate.update(sql, id);

        if (rowsAffected == 0) {
            throw new IllegalArgumentException("Não foi possível excluir: Perfil #" + id + " não encontrado.");
        }
    }
}
