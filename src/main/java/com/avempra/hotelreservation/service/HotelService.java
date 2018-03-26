package com.avempra.hotelreservation.service;
import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Room;

import java.util.Collection;


public interface HotelService {
    Collection<Hotel> getAllHotels();

    Hotel findHotelById(Long hotelId);

    Hotel saveHotel(Hotel hotel);

    Collection<Room> findRoomsByHotelId(Long hotelId);

    Hotel saveRoomToHotel(Long hotelId, Room room);

    Hotel updateHotel(Long hotelId, Hotel hotel);

    void deleteHotelById(Long hotelId);
}
