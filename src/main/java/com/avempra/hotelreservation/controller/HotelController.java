package com.avempra.hotelreservation.controller;


import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Room;
import com.avempra.hotelreservation.service.IHotelService;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/hotels")
public class HotelController {

    private IHotelService hotelService;

    public HotelController(IHotelService hotelService) {
        this.hotelService = hotelService;
    }

    @GetMapping(value = {"","/"})
    public List<Hotel> getHotels(){
        return hotelService.getAllHotels();
    }

    @PostMapping(value = {"","/"})
    public Hotel saveHotel(@RequestBody Hotel hotel){
        return hotelService.saveHotel(hotel);
    }

    @GetMapping("/{hotelId}")
    public Hotel findHotelById(@PathVariable Long hotelId){
         //hotel.add(linkTo(methodOn(HotelController.class).findHotelById(hotelId)).withSelfRel());
        return hotelService.findHotelById(hotelId);
    }

    @GetMapping("/{hotelId}/rooms")
    public Collection<Room> getRoomsForHotelId(@PathVariable Long hotelId){

        return hotelService.findRoomsByHotelId(hotelId);
    }

    @PostMapping("/{hotelId}/rooms")
    public Hotel saveRoomToHotel(@PathVariable Long hotelId, @RequestBody Room room){

        return hotelService.saveRoomToHotel(hotelId, room);
    }

}
