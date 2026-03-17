package backend.controller;

import backend.model.SystemProfileData;
import backend.services.SystemProfileServices;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/profile")
public class SystemProfileController {
    private final SystemProfileServices systemProfileServices;

    @GetMapping("/get-all-profiles")
    public ResponseEntity<List<SystemProfileData>> getAllSystemProfileData() {
        return ResponseEntity.ok(systemProfileServices.findAll());
    }

    @PostMapping("/add")
    public ResponseEntity<?> insertNewSystemProfile(@RequestBody SystemProfileData data) {
        systemProfileServices.insertNewProfile(data.getDescricao());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateSystemProfile(@PathVariable Integer id, @RequestBody SystemProfileData data) {
        systemProfileServices.updateProfile(id, data.getDescricao());
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSystemProfile(@PathVariable Integer id) {
        systemProfileServices.deleteProfile(id);
        return ResponseEntity.noContent().build();
    }
}
