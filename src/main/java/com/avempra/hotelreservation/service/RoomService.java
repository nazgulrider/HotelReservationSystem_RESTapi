package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.resources.RoomResource;
import org.springframework.hateoas.Resources;

public interface RoomService {
    Resources<RoomResource> getRoomsForReservation(long reservationId);
}
