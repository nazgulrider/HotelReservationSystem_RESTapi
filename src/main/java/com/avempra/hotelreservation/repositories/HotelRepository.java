package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.Hotel;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface HotelRepository extends PagingAndSortingRepository<Hotel,Long> {
}
