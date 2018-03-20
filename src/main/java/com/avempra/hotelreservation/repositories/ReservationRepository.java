package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.Reservation;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ReservationRepository extends PagingAndSortingRepository<Reservation,Long> {
}
