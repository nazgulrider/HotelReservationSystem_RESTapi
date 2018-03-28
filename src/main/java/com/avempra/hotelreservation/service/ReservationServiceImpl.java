package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Reservation;
import com.avempra.hotelreservation.exceptions.DataNotFoundException;
import com.avempra.hotelreservation.repositories.HotelRepository;
import com.avempra.hotelreservation.repositories.ReservationRepository;
import com.avempra.hotelreservation.resources.ReservationResource;
import org.springframework.hateoas.Resources;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Class responsible for accessing the reservations from the database and processing the data
 * to be passed on to the controller
 *
 * @author Prashanta K Shrestha
 */
@Service
public class ReservationServiceImpl implements ReservationService {
    private ReservationRepository reservationRepository;
    private HotelRepository hotelRepository;

    public ReservationServiceImpl(ReservationRepository reservationRepository, HotelRepository hotelRepository) {
        this.reservationRepository = reservationRepository;
        this.hotelRepository = hotelRepository;
    }

    /**
     * Gets all reservations from the database
     * @return Returns a collection of resource of reservation
     */
    @Override
    public Resources<ReservationResource> getAll() {
        final List<ReservationResource> reservationResources = reservationRepository.findAll()
                .stream().map(ReservationResource::new)
                .collect(Collectors.toList());
        return new Resources<>(reservationResources);
    }

    /**
     * Fetches all reservations by the hotel that the reservation belongs to
     * @param hotelId Id of the hotel for which we want to find the reservations
     * @return Returns collection of resource for the reservation objects
     */
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

    /**
     * Finds reservation matching the reservation Id
     * @param reservationId Id of the reservation to be looked up
     * @return Returns resource for the reservation object
     */
    @Override
    public ReservationResource findReservationById(Long reservationId) {

        return reservationRepository.findById(reservationId).map(ReservationResource::new)
                .orElseThrow(DataNotFoundException::new);
    }

    /**
     * Persists the reservation into database
     * @param reservation The reservation to be saved
     * @return Returns rest resource for the newly created reservation
     */
    @Override
    public ReservationResource saveReservation(Reservation reservation) {
        //TODO
        return new ReservationResource(reservationRepository.save(reservation));
    }

    /**
     * Updates reservation to new information passed
     * @param reservationId Id of the reservation to be updated
     * @param reservation the new contents of the reservation object
     * @return Returns rest resource of the updated reservation
     */
    @Override
    public ReservationResource updateReservation(Long reservationId, Reservation reservation) {

        if (reservationRepository.existsById(reservationId)){
            reservation.setId(reservationId);
            return new ReservationResource(reservationRepository.save(reservation));
        }else{
            throw new DataNotFoundException("Reservation with Id "+reservationId+" does not exist");
        }
    }

    /**
     * Deletes a reservation by its Id
     * @param reservationId The id of the reservation to be deleted
     */
    @Override
    public void deleteReservationById(Long reservationId) {
        if(reservationRepository.existsById(reservationId)){
            reservationRepository.deleteById(reservationId);
        }else {
            throw new DataNotFoundException("Could not delete reservation "+reservationId);
        }
    }

}