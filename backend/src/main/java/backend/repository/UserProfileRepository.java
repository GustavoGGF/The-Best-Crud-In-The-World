package backend.repository;

import backend.model.UserProfileData;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class UserProfileRepository {

    private final JdbcTemplate jdbcTemplate;

    public List<UserProfileData> getUserAllProfile() {
        String sql = "select * from usuarios";

        return jdbcTemplate.query(sql, (rs, rowNum) -> new UserProfileData(
                rs.getInt("id"),
                rs.getString("name"),
                rs.getString("perfis ")
        ));
    }
}
