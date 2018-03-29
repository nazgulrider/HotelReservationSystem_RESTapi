package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Reservation;
import com.avempra.hotelreservation.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface HotelRepository extends JpaRepository<Hotel,Long> {
}
