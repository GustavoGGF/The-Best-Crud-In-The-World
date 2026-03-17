package backend.controller;

import backend.model.UserProfileData;
import backend.repository.UserProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserProfileController {

    private final UserProfileRepository userProfileRepository;

    @GetMapping("/get-all-users")
    public List<UserProfileData> getUserProfile() {
        List<UserProfileData> profiles = userProfileRepository.getUserAllProfile();

        return (profiles == null || profiles.isEmpty()) ? null : profiles;
    }
}
