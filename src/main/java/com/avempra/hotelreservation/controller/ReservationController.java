package com.avempra.hotelreservation.controller;

import com.avempra.hotelreservation.entities.Reservation;
import com.avempra.hotelreservation.resources.HotelResource;
import com.avempra.hotelreservation.resources.ReservationResource;
import com.avempra.hotelreservation.resources.RoomResource;
import com.avempra.hotelreservation.resources.UserResource;
import com.avempra.hotelreservation.service.HotelService;
import com.avempra.hotelreservation.service.ReservationService;
import com.avempra.hotelreservation.service.RoomService;
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
    private RoomService roomService;


    public ReservationController(ReservationService reservationService, UserService userService, HotelService hotelService, RoomService roomService) {
        this.reservationService = reservationService;
        this.userService = userService;
        this.hotelService = hotelService;
        this.roomService = roomService;
    }

    @GetMapping
    public ResponseEntity<Resources<ReservationResource>> getAllReservations(){
        return new ResponseEntity<>(
                reservationService.getAll(), HttpStatus.OK
                );
    }

    @PostMapping
    public ResponseEntity<ReservationResource> makeReservation(@RequestBody Reservation reservation){
        return new ResponseEntity<>(
                reservationService.saveReservation(reservation), HttpStatus.CREATED
        );
    }

    @GetMapping("/{reservationId}")
    public ResponseEntity<ReservationResource> getReservationWithId(@PathVariable("reservationId") final long id){
        return new ResponseEntity<>(
                reservationService.findReservationById(id), HttpStatus.OK
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
     * Searches for the hotel to which the reservation was made
     * @param reservationId Id for the reservation
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

    /**
     * Finds rooms that belong to a reservation
     * @param reservationId Id of the reservation for which to search the rooms
     * @return Returns a collection of room resources wrapped in a HTTP response entity
     */
    @GetMapping("/{reservationId}/rooms")
    public ResponseEntity<Resources<RoomResource>> getRoomsForReservation(@PathVariable("reservationId") final long reservationId){
        return new ResponseEntity<>(
                roomService.getRoomsForReservation(reservationId), HttpStatus.OK
        );
    }


}
