package backend.model;

public record SystemProfileData(
        Integer id,
        String descricao
) {

    public String getDescricao() {
        return this.descricao;
    }
}
