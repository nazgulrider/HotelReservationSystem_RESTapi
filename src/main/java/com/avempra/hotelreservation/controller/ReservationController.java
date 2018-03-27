package com.avempra.hotelreservation.controller;

import com.avempra.hotelreservation.entities.Reservation;
import com.avempra.hotelreservation.resources.ReservationResource;
import com.avempra.hotelreservation.service.ReservationService;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/reservations", produces = "application/hal+json")
public class ReservationController {

    private ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }


    @GetMapping
    public ResponseEntity<Resources<ReservationResource>> getAllReservations(){
        //TODO Implement GET for all reservations
        return new ResponseEntity<>(
                reservationService.getAll(), HttpStatus.OK
                );
    }

    @GetMapping("/{reservationId}")
    public ResponseEntity<ReservationResource> getReservationWithId(@PathVariable("reservationId") final long id){
        //TODO Implement GET for all reservations
        return null;
    }


    @PostMapping
    public ResponseEntity<ReservationResource> makeReservation(@RequestBody Reservation reservation){
        //TODO Implement POST for all reservations
        return null;
    }

    @PatchMapping("/{reservationId}")
    public ResponseEntity<ReservationResource> updateReservation(@PathVariable("reservationId") final long id,
                                                                 @RequestBody Reservation reservation ){
        //TODO Implement PATCH for a reservation
        return null;
    }

    @DeleteMapping("/{reservationId}")
    public ResponseEntity delete(@PathVariable("reservationId") final long id){
        //TODO Implement DELETE for all reservations
        return null;
    }


}
