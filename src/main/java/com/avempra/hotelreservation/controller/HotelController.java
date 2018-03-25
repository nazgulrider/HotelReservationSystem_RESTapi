package com.avempra.hotelreservation.controller;


import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.service.IHotelService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/hotels")
public class HotelController {

    private IHotelService hotelService;

    public HotelController(IHotelService hotelService) {
        this.hotelService = hotelService;
    }

    @GetMapping(value = {"","/"})
    List<Hotel> findAllHotels(){
        return hotelService.getAllHotels();
    }
}
