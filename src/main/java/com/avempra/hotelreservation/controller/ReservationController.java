package com.avempra.hotelreservation.controller;

import com.avempra.hotelreservation.service.ReservationService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReservationController {

    private ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    //TODO Implement GET for all reservations
    //TODO Implement POST for all reservations
    //TODO Implement DELETE for all reservations
    //TODO Implement PATCH for a reservation
    //TODO Implement DELETE for a reservation
}
