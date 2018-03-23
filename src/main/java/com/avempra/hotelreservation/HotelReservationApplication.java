package com.avempra.hotelreservation;

import com.avempra.hotelreservation.entities.*;
import com.avempra.hotelreservation.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.HashSet;

@SpringBootApplication
public class HotelReservationApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelReservationApplication.class, args);
	}

//	@Bean
//	CommandLineRunner runner(UserRepository userRepository){
//
//		return args -> {
//			userRepository.save(new User(1L, UserRole.MANAGER, "Matt", "Johnson", "something@some.com", 998877,
//					new Login("tomato", "potato"),
//					new HashSet<>(),
//					new Billing()));
//		};
//	}
}
