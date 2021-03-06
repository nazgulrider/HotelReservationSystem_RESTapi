package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Reservation;
import com.avempra.hotelreservation.entities.Room;
import com.avempra.hotelreservation.exceptions.DataNotFoundException;
import com.avempra.hotelreservation.repositories.HotelRepository;
import com.avempra.hotelreservation.repositories.ReservationRepository;
import com.avempra.hotelreservation.repositories.RoomRepository;
import com.avempra.hotelreservation.resources.HotelResource;
import com.avempra.hotelreservation.resources.ReservationResource;
import com.avempra.hotelreservation.resources.RoomResource;
import org.springframework.hateoas.Resources;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class HotelServiceImpl implements HotelService {

    private HotelRepository hotelRepository;
    private RoomRepository roomRepository;

    public HotelServiceImpl(HotelRepository hotelRepository, RoomRepository roomRepository) {
        this.hotelRepository = hotelRepository;
        this.roomRepository = roomRepository;
    }

    @Override
    public Resources<HotelResource> findAllHotels(){
        final List<HotelResource> hotelResources = hotelRepository.findAll()
                .stream().map(HotelResource::new)
                .collect(Collectors.toList());
        return new Resources<>(hotelResources);
    }


    @Override
    public HotelResource findHotelById(Long hotelId) {

        Hotel hotel =  hotelRepository.findById(hotelId)
                .orElseThrow(()->new DataNotFoundException("Hotel with id "+hotelId+" was not found!"));
        return new HotelResource(hotel);
    }

    @Override
    public HotelResource saveHotel(Hotel hotel) {
        return new HotelResource(hotelRepository.save(hotel));
    }

    @Override
    public Resources<RoomResource> findRoomsByHotelId(Long hotelId) {
        Collection<Room> rooms =  hotelRepository.findById(hotelId).map(Hotel::getRooms)
                .orElseThrow(DataNotFoundException::new);
        return new Resources<>(rooms.stream().map(RoomResource::new).collect(Collectors.toList()));
    }

    @Override
    public Resources<ReservationResource> findReservationsForRoom(Long hotelId, Long roomId) {
        Collection<Room> room = roomRepository.findRoomsByHotel_Id(hotelId)
                .stream().filter(room1 -> room1.getId()==roomId).collect(Collectors.toList());
        return new Resources<>(((List<Room>) room).get(0).getReservations()
                .stream().map(ReservationResource::new).collect(Collectors.toList()));
    }

//    @Override
//    public HotelResource saveRoomToHotel(Long hotelId, Room room) {
//        Hotel savedHotel = hotelRepository.findById(hotelId).map(hotel -> {
//            hotel.getRooms().add(room);
//            //room.setHotel(hotel);
//            return hotelRepository.save(hotel);
//        }).orElseThrow(DataNotFoundException::new); //TODO implement different exception handling for save that doesn't work out
//        return new HotelResource(savedHotel);
//    }

    @Override
    public HotelResource updateHotel(Long hotelId, Hotel hotel) {
        Hotel updatedHotel = hotelRepository.findById(hotelId)
                .map(hotel1 ->{ hotel.setId(hotel1.getId());
                    return hotelRepository.save(hotel);
                } )
                .orElseThrow(DataNotFoundException::new);
        return new HotelResource(updatedHotel);
    }

    @Override
    public void deleteHotelById(Long hotelId) {
        hotelRepository.findById(hotelId)
                .ifPresent(hotel -> hotelRepository.delete(hotel));
    }




}
