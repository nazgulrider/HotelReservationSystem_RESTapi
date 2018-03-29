package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ReservationRepository extends JpaRepository<Reservation,Long> {
List<Reservation> findAllByHotel(Hotel hotel);
List<Reservation> findAllByUser_Id(long userId);
}
