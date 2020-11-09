package com.agencedirecte.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	@Autowired
	UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) {
		List<User> users = Arrays
			.asList("1", "2", "3", "4", "5")
			.stream()
			.map(index -> {
				User user = new User();
				user.setFirstName("first" + index);
				user.setLastName("last" + index);
				user.setEmail("email" + index + "@gmail.com");
				user.setPassword("password" + index);

				return user;
			}).collect(Collectors.toList());

		userRepository.saveAll(users);
	}
}
