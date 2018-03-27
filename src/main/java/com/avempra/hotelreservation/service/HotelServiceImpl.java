package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Room;
import com.avempra.hotelreservation.exceptions.DataNotFoundException;
import com.avempra.hotelreservation.repositories.HotelRepository;
import com.avempra.hotelreservation.resources.HotelResource;
import org.springframework.hateoas.Resources;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class HotelServiceImpl implements HotelService {

    private HotelRepository hotelRepository;

    public HotelServiceImpl(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public Resources<HotelResource> findAllHotels(){
        final List<HotelResource> hotelResources = hotelRepository.findAll()
                .stream().map(HotelResource::new)
                .collect(Collectors.toList());
        return new Resources<>(hotelResources);
    }

    @Override
    public List<Hotel> getAllHotels() {

        return this.hotelRepository.findAll();
    }

    @Override
    public Hotel findHotelById(Long hotelId) {
        return hotelRepository.findById(hotelId)
                .orElseThrow(()->new DataNotFoundException("Hotel with id "+hotelId+" was not found!"));
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

    @Override
    public Hotel updateHotel(Long hotelId, Hotel hotel) {
        return hotelRepository.findById(hotelId)
                .map(hotel1 ->{ hotel.setId(hotel1.getId());
                    return hotelRepository.save(hotel);
                } )
                .orElseThrow(DataNotFoundException::new);
    }

    @Override
    public void deleteHotelById(Long hotelId) {
        hotelRepository.findById(hotelId)
                .ifPresent(hotel -> hotelRepository.delete(hotel));
    }


}
