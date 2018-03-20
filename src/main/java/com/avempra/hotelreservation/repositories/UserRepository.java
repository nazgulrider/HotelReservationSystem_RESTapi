package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.User;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User,Long> {
}
