package com.avempra.hotelreservation.service;
import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Room;

import java.util.Collection;
import java.util.List;


public interface IHotelService {
    List<Hotel> getAllHotels();

    Hotel findHotelById(Long hotelId);

    Hotel saveHotel(Hotel hotel);

    Collection<Room> findRoomsByHotelId(Long hotelId);

    Hotel saveRoomToHotel(Long hotelId, Room room);
}
