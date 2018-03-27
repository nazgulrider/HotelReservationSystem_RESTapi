package com.avempra.hotelreservation.service;
import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Room;
import com.avempra.hotelreservation.resources.HotelResource;
import org.springframework.hateoas.Resources;

import java.util.Collection;
import java.util.List;


public interface HotelService {
    Resources<HotelResource> findAllHotels();

    List<Hotel> getAllHotels();

    Hotel findHotelById(Long hotelId);

    Hotel saveHotel(Hotel hotel);

    Collection<Room> findRoomsByHotelId(Long hotelId);

    Hotel saveRoomToHotel(Long hotelId, Room room);

    Hotel updateHotel(Long hotelId, Hotel hotel);

    void deleteHotelById(Long hotelId);
}
