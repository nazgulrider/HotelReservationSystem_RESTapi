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


}
