package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Reservation;
import com.avempra.hotelreservation.repositories.HotelRepository;
import org.springframework.stereotype.Service;


@Service
public class HotelService implements IHotelService {

    private HotelRepository hotelRepository;

    public HotelService(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public Iterable<Reservation> getReservationsForHotelId(Long hotelId) {

        return this.hotelRepository
                .findById(hotelId)
                .map(Hotel::getReservations).orElseThrow(NegativeArraySizeException::new);
    }
}
