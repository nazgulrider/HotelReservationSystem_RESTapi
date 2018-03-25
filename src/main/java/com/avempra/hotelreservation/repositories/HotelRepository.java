package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;


public interface HotelRepository extends JpaRepository<Hotel,Long> {

}
