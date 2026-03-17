package backend.model;

import java.util.List;

public record UserProfileData(
        Integer id,
        String name,
        List<String> perfis
) {
    public String getName() {
        return this.name;
    }
    public Integer getID() { return this.id;}
    public List<String> getPerfis() { return this.perfis;}
}
