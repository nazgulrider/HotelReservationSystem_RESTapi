package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.entities.Room;
import com.avempra.hotelreservation.exceptions.DataNotFoundException;
import com.avempra.hotelreservation.repositories.RoomRepository;
import com.avempra.hotelreservation.resources.RoomResource;
import org.springframework.hateoas.Resources;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Collectors;

@Service
public class RoomServiceImpl implements RoomService {
    private RoomRepository roomRepository;

    public RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @Override
    public Resources<RoomResource> getRoomsForReservation(long reservationId) {
        return new Resources<>(roomRepository
                .findRoomsByReservation_Id(reservationId)
                .stream()
                .map(RoomResource::new)
                .collect(Collectors.toList()));
    }

    @Override
    public Resources<RoomResource> saveAllRooms(Collection<Room> rooms) {

        return new Resources<>(roomRepository
                .saveAll(rooms)
                .stream()
                .map(RoomResource::new)
                .collect(Collectors.toList()));
    }

    @Override
    public RoomResource getRoomWithId(long roomId) {
        return roomRepository.findById(roomId)
                .map(RoomResource::new)
                .orElseThrow(DataNotFoundException::new);

    }
}
