package backend.model;

public record UserProfileData(
        Integer id,
        String name,
        String perfis
) {

    public String getName() {
        return this.name;
    }
}
