package com.agencedirecte.demo;

import com.agencedirecte.demo.validation.ValidJson;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import static com.agencedirecte.demo.SchemaLocations.USER;

import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {

    final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok().body(userRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<User> createUser(@ValidJson(USER) User user) {

        System.out.println("Validated painting: " + user);
        return ResponseEntity.ok().body(user);
    }

}
