package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.entities.Room;
import com.avempra.hotelreservation.resources.RoomResource;
import org.springframework.hateoas.Resources;

import java.util.Collection;
import java.util.List;

public interface RoomService {
    Resources<RoomResource> getRoomsForReservation(long reservationId);
    Resources<RoomResource> saveAllRooms(Collection<Room> rooms);

    RoomResource getRoomWithId(long roomId);
}
