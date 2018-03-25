package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ReservationRepository extends JpaRepository<Reservation,Long> {
}
