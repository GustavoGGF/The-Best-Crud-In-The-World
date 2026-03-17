package backend.services;

import backend.repository.SystemProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SystemProfileServices {

    private final SystemProfileRepository systemProfileRepository;

    public void insertNewProfile(String descricao) {
        if (descricao.length() < 5) throw new IllegalArgumentException("Quantidade de caracteres insuficiente");

        systemProfileRepository.createNewProfile(descricao);
    }

    public void updateProfile(Integer id, String descricao) {
        if (descricao.length() < 5) throw new IllegalArgumentException("Quantidade de caracteres insuficiente");

        systemProfileRepository.updateProfile(id, descricao);
    }
}
