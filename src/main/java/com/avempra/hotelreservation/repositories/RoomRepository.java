package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room,Long> {
}
