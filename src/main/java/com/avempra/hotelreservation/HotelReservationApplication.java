package com.avempra.hotelreservation;

import com.avempra.hotelreservation.entities.*;
import com.avempra.hotelreservation.repositories.HotelRepository;
import com.avempra.hotelreservation.repositories.RoomRepository;
import com.avempra.hotelreservation.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@SpringBootApplication
public class HotelReservationApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelReservationApplication.class, args);
	}


	//Populate the db with initial data
	@Bean
	CommandLineRunner runner(RoomRepository roomRepository, UserRepository userRepository, HotelRepository hotelRepository){

		return args -> {

			Collection<Hotel> hotels = new ArrayList<>();
			Collection<Room> rooms = new ArrayList<>();
			Collection<User> users = new ArrayList<>();

			int userCount = 1;
			while(userCount<11){
				users.add(new User(new Login("user"+userCount, "admin"),
						"User"+userCount,
						"Tomato"+userCount,
						"user"+userCount+"@gmail.com",
						4692765544L,
						"https://s3.us-east-2.amazonaws.com/hotel-reservation-system/batman.jpg"));
				userCount++;
			}

			int count = 1;
			int count1 =1;
            int count2 =1;
            int count3 =1;
			int roomNumber = 101;

			while(count<11){
				Hotel hotel = new Hotel("Hotel"+count,
						count,"https://s3.us-east-2.amazonaws.com/hotel-reservation-system/hotel-"+count+".jpg","The best Hotel in the whole world");
				hotels.add(hotel);

				while (count1<11){
					rooms.add(new Room(roomNumber,RoomType.ROYAL,299.99f, hotel));
					roomNumber++;
					count1++;
				}
				while (count2<11){
					rooms.add(new Room(roomNumber,RoomType.PRESIDENTIAL,199.99f, hotel));
					roomNumber++;
					count2++;
				}
				while (count3<11){
					rooms.add(new Room(roomNumber,RoomType.DELUXE,99.99f, hotel));
					roomNumber++;
					count3++;
				}
				count1=1;
                count2=1;
                count3=1;
                roomNumber=101;
				count++;
			}


			hotelRepository.saveAll(hotels);
			roomRepository.saveAll(rooms);
			userRepository.saveAll(users);


		};
	}
}
