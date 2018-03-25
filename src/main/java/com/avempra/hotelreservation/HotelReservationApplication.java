package com.avempra.hotelreservation;

import com.avempra.hotelreservation.entities.*;
import com.avempra.hotelreservation.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashSet;

@SpringBootApplication
public class HotelReservationApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelReservationApplication.class, args);
	}
//
//	@Bean
//	CommandLineRunner runner(UserRepository userRepository){
//
//		return args -> {
//
//
//			Login user1Login=new Login("eduardo","ramirez");
//			ArrayList<Billing> user1Billing=new ArrayList<>();
//			ArrayList<Address> user1Addresses=new ArrayList<>();
//			ArrayList<Reservation> reservations = new ArrayList<>();
//			ArrayList<Hotel> user1Hotels = new ArrayList<>();
//
//			ArrayList<Room> rooms = new ArrayList<>();
//			ArrayList<User> users = new ArrayList<>();
//
//
//
//			User user1= new User(1L,UserRole.CUSTOMER,"Eduardo","Ramirez","rami@gmail.com",7775559980L,user1Login,user1Billing,
//					user1Addresses,reservations,user1Hotels);
//			userRepository.save(user1);
//			users.add(user1);
//
//			Hotel hotelMariott = new Hotel(1L,"Mariott",4.5f,rooms,users,reservations,
//					new Address(1L, AddressType.WORK,"31 Empty ln","corner 1",
//							"Bedford","TX", 78765));
//
//		};
//	}
}
