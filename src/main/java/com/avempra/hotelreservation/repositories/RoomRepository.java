package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
    List<Room> findRoomsByReservation_Id(Long reservationId);
}
