package com.avempra.hotelreservation.service;
import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Room;
import com.avempra.hotelreservation.resources.HotelResource;
import com.avempra.hotelreservation.resources.RoomResource;
import org.springframework.hateoas.Resources;


public interface HotelService {
    Resources<HotelResource> findAllHotels();

    HotelResource findHotelById(Long hotelId);

    HotelResource saveHotel(Hotel hotel);

    Resources<RoomResource> findRoomsByHotelId(Long hotelId);

    HotelResource saveRoomToHotel(Long hotelId, Room room);

    HotelResource updateHotel(Long hotelId, Hotel hotel);

    void deleteHotelById(Long hotelId);
}
