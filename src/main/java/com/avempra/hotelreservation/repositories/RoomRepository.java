package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
    List<Room> findRoomsByHotel_Id(Long hotelId);



}
