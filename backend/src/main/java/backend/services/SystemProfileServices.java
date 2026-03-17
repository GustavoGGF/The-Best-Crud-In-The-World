package backend.services;

import backend.model.SystemProfileData;
import backend.repository.SystemProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SystemProfileServices {

    private final SystemProfileRepository systemProfileRepository;

    public List<SystemProfileData> findAll(){
        List<SystemProfileData> profiles = systemProfileRepository.getAllProfiles();

        if (profiles == null || profiles.isEmpty()) {
            profiles = Collections.emptyList();
        }

        return profiles;
    }

    public void insertNewProfile(String descricao) {
        if (descricao.length() < 5) throw new IllegalArgumentException("Quantidade de caracteres insuficiente");

        systemProfileRepository.createNewProfile(descricao);
    }

    public void updateProfile(Integer id, String descricao) {
        if (descricao.length() < 5) throw new IllegalArgumentException("Quantidade de caracteres insuficiente");

        systemProfileRepository.updateProfile(id, descricao);
    }

    public void deleteProfile(Integer id){
        systemProfileRepository.deleteProfile(id);
    }

}
