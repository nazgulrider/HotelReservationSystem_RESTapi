package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.Reservation;
import org.springframework.data.repository.CrudRepository;


public interface ReservationRepository extends CrudRepository<Reservation,Long> {
}
