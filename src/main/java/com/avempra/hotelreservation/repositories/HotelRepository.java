package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Reservation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface HotelRepository extends CrudRepository<Hotel,Long> {

}
