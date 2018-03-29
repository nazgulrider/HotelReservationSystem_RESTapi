package com.avempra.hotelreservation.controller;

import com.avempra.hotelreservation.entities.Reservation;
import com.avempra.hotelreservation.resources.HotelResource;
import com.avempra.hotelreservation.resources.ReservationResource;
import com.avempra.hotelreservation.resources.UserResource;
import com.avempra.hotelreservation.service.HotelService;
import com.avempra.hotelreservation.service.ReservationService;
import com.avempra.hotelreservation.service.UserService;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/reservations", produces = "application/hal+json")
public class ReservationController {

    private ReservationService reservationService;
    private UserService userService;
    private HotelService hotelService;


    public ReservationController(ReservationService reservationService, UserService userService, HotelService hotelService) {
        this.reservationService = reservationService;
        this.userService = userService;
        this.hotelService = hotelService;
    }


    @GetMapping
    public ResponseEntity<Resources<ReservationResource>> getAllReservations(){
        return new ResponseEntity<>(
                reservationService.getAll(), HttpStatus.OK
                );
    }

    @GetMapping("/{reservationId}")
    public ResponseEntity<ReservationResource> getReservationWithId(@PathVariable("reservationId") final long id){
        return new ResponseEntity<>(
                reservationService.findReservationById(id), HttpStatus.OK
        );
    }

    @PostMapping
    public ResponseEntity<ReservationResource> makeReservation(@RequestBody Reservation reservation){
        return new ResponseEntity<>(
                reservationService.saveReservation(reservation), HttpStatus.CREATED
        );
    }

    @PatchMapping("/{reservationId}")
    public ResponseEntity<ReservationResource> updateReservation(@PathVariable("reservationId") final long id,
                                                                 @RequestBody Reservation reservation ){
        return new ResponseEntity<>(
                reservationService.updateReservation(id,reservation), HttpStatus.CREATED
        );
    }

    @DeleteMapping("/{reservationId}")
    public ResponseEntity<Void> delete(@PathVariable("reservationId") final long id){
        reservationService.deleteReservationById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    ///---------------------------------------------------------------------------------------------

    /**
     * Maps a reservation to its creator
     * @param reservationId Id for the reservation
     * @return Returns the User that created the reservation
     */
    @GetMapping("/{reservationId}/user")
    public ResponseEntity<UserResource> getUserForReservation(@PathVariable("reservationId") final long reservationId){
        long userId = reservationService
                .findReservationById(reservationId)  //returns reservationResource
                .getReservation() //extract reservation object from the resource
                .getUser() //extract user from object
                .getId(); //extract the id

        return new ResponseEntity<>(

                userService.findUserById(userId), HttpStatus.OK
        );
    }

    /**
     * Maps the reservation to the hotel where the reservation belongs
     * @param reservationId Id for the reservation in question
     * @return Returns the hotel for which the reservation was made
     */
    @GetMapping("/{reservationId}/hotel")
    public ResponseEntity<HotelResource> getHotelForReservation(@PathVariable("reservationId") final long reservationId){
        long hotelId = reservationService
                .findReservationById(reservationId)  //returns reservationResource
                .getReservation() //extract reservation object from the resource
                .getHotel() //extract user from object
                .getId(); //extract the id

        return new ResponseEntity<>(

                hotelService.findHotelById(hotelId), HttpStatus.OK
        );
    }



}
