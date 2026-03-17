package backend.controller;

import backend.model.SystemProfileData;
import backend.repository.SystemProfileRepository;
import backend.services.SystemProfileServices;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/profile")
public class SystemProfileController {
    private final SystemProfileRepository systemProfileRepository;
    private final SystemProfileServices systemProfileServices;

    @GetMapping("/get-all-profiles")
    public ResponseEntity<List<SystemProfileData>> getAllSystemProfileData() {
        List<SystemProfileData> profiles = systemProfileRepository.getAllProfiles();

        if (profiles == null || profiles.isEmpty()) {
            profiles = Collections.emptyList();
        }

        return ResponseEntity.ok(profiles);
    }

    @PostMapping("/add")
    public ResponseEntity<?> insertNewSystemProfile(@RequestBody SystemProfileData data) {
        systemProfileServices.insertNewProfile(data.getDescricao());
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateSystemProfile(@PathVariable Integer id, @RequestBody SystemProfileData data) {
        systemProfileServices.updateProfile(id, data.getDescricao());
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSystemProfile(@PathVariable Integer id) {
        try {
            systemProfileRepository.deleteProfile(id);
            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao excluir perfil: " + e.getMessage());
        }
    }
}
