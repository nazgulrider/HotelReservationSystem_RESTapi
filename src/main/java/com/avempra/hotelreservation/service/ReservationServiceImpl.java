package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.exceptions.DataNotFoundException;
import com.avempra.hotelreservation.repositories.HotelRepository;
import com.avempra.hotelreservation.repositories.ReservationRepository;
import com.avempra.hotelreservation.resources.ReservationResource;
import org.springframework.hateoas.Resources;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationServiceImpl implements ReservationService {
    private ReservationRepository reservationRepository;
    private HotelRepository hotelRepository;

    public ReservationServiceImpl(ReservationRepository reservationRepository, HotelRepository hotelRepository) {
        this.reservationRepository = reservationRepository;
        this.hotelRepository = hotelRepository;
    }

    @Override
    public Resources<ReservationResource> getAll() {
        final List<ReservationResource> reservationResources = reservationRepository.findAll()
                .stream().map(ReservationResource::new)
                .collect(Collectors.toList());
        return new Resources<>(reservationResources);
    }
    @Override
    public Resources<ReservationResource> getAllReservationsByHotelId(long hotelId) {
        //Check to see if hotel exists
        Hotel hotel = hotelRepository.findById(hotelId).orElseThrow(DataNotFoundException::new);

        //if hotel exists pass it to findAllByHotel function in reservationRepository
        final List<ReservationResource> reservationResources =reservationRepository.findAllByHotel(hotel)
                    .stream()
                    .map(ReservationResource::new)
                    .collect(Collectors.toList());

        return new Resources<>(reservationResources);
    }
}
