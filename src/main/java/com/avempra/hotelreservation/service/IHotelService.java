package com.avempra.hotelreservation.service;
import com.avempra.hotelreservation.entities.Reservation;


public interface IHotelService {
    Iterable<Reservation> getReservationsForHotelId(Long hotelId);
}
