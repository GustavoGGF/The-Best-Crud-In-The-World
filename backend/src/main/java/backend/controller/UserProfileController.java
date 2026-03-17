package backend.controller;

import backend.model.UserProfileData;
import backend.services.UserProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserProfileController {

    private final UserProfileService userProfileService;

    @GetMapping("/get-all-users")
    public ResponseEntity<List<UserProfileData>> getUserProfile() {
        List<UserProfileData> profiles = userProfileService.getAllProfile();
        return ResponseEntity.ok(profiles);
    }

    @PostMapping("/new-user")
    public ResponseEntity<?> createUser(@RequestBody UserProfileData userDTO) {
        userProfileService.insertNewUser(userDTO.name(), userDTO.perfis());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody UserProfileData userDTO) {
        userProfileService.updateUser(userDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSystemProfile(@PathVariable Integer id) {
        userProfileService.deleteProfile(id);
        return ResponseEntity.noContent().build();
    }
}
