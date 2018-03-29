package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.entities.Reservation;
import com.avempra.hotelreservation.resources.HotelResource;
import com.avempra.hotelreservation.resources.ReservationResource;
import org.springframework.hateoas.Resources;


public interface ReservationService {
    Resources<ReservationResource> getAll();

    Resources<ReservationResource> getAllReservationsByHotelId(long hotelId);

    ReservationResource findReservationById(Long reservationId);

    ReservationResource saveReservation(Reservation reservation);

    ReservationResource updateReservation(Long reservationId, Reservation reservation);

    void deleteReservationById(Long reservationId);

    Resources<ReservationResource> findReservationByUser(long userId);

}
