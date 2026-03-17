package backend.services;

import backend.model.UserProfileData;
import backend.repository.UserProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserProfileService {

    private final UserProfileRepository userProfileRepository;

    public void insertNewUser(String name, List<String> profiles){
        if(name.isEmpty()) throw new IllegalArgumentException("Nome deve ser obrigatório");
        if(name.length() < 10) throw new IllegalArgumentException("Nome deve ter no minimo 10 caracteres");
        if(profiles.isEmpty()) throw new IllegalArgumentException("Deve ter no mínimo um perfil");

        userProfileRepository.createNewUser(name, profiles);
    }

    public void updateUser(UserProfileData userDTO){
        if(userDTO.perfis().isEmpty()) throw new IllegalArgumentException("Deve ter no mínimo um perfil");

        boolean exist = userProfileRepository.existUser(userDTO.id());
        if(!exist) throw new IllegalArgumentException("Usuario não existe");

        userProfileRepository.updateUser(userDTO.name(), userDTO.perfis(), userDTO.id());
    }

    public List<UserProfileData> getAllProfile(){
        List<UserProfileData> profiles = userProfileRepository.getUserAllProfile();

        if (profiles == null || profiles.isEmpty()) {
            profiles = Collections.emptyList();
        }

        return profiles;
    }

    public void deleteProfile(Integer id){
        if (id == null) throw new IllegalArgumentException("Não foi possível excluir: Perfil, id não encontrado.");
        userProfileRepository.deleteProfile(id);
    }
}
