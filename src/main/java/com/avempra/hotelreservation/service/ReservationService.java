package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.resources.ReservationResource;
import org.springframework.hateoas.Resources;


public interface ReservationService {
    Resources<ReservationResource> getAll();
    Resources<ReservationResource> getAllReservationsByHotelId(long hotelId);
}
