package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
