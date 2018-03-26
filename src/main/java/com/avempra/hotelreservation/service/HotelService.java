package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Room;
import com.avempra.hotelreservation.exceptions.DataNotFoundException;
import com.avempra.hotelreservation.repositories.HotelRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;


@Service
public class HotelService implements IHotelService {

    private HotelRepository hotelRepository;

    public HotelService(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public Collection<Hotel> getAllHotels() {

        return this.hotelRepository.findAll();
    }

    @Override
    public Hotel findHotelById(Long hotelId) {
        return hotelRepository.findById(hotelId).orElseThrow(DataNotFoundException::new);
    }

    @Override
    public Hotel saveHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    @Override
    public Collection<Room> findRoomsByHotelId(Long hotelId) {
        return hotelRepository.findById(hotelId).map(Hotel::getRooms)
                .orElseThrow(DataNotFoundException::new);
    }
    @Override
    public Hotel saveRoomToHotel(Long hotelId, Room room) {

        return hotelRepository.findById(hotelId).map(hotel -> {
            hotel.getRooms().add(room);
            return hotelRepository.save(hotel);
        }).orElseThrow(DataNotFoundException::new); //TODO implement different exception handling for save that doesn't work out
    }


}
