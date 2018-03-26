package com.avempra.hotelreservation.controller;


import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Room;
import com.avempra.hotelreservation.service.IHotelService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/hotels")
public class HotelController {

    private IHotelService hotelService;

    public HotelController(IHotelService hotelService) {
        this.hotelService = hotelService;
    }

    @GetMapping
    public ResponseEntity<Collection<Hotel>> getAllHotels(){
        return new ResponseEntity<>(
                hotelService.getAllHotels(), HttpStatus.I_AM_A_TEAPOT
        );
    }

    @PostMapping
    public ResponseEntity<Hotel> saveHotel(@RequestBody Hotel hotel){
        return new ResponseEntity<>(
                hotelService.saveHotel(hotel), HttpStatus.CREATED
        );
    }

    @GetMapping("/{hotelId}")
    public ResponseEntity<Hotel> findHotelById(@PathVariable Long hotelId){
        //TODO Add HATEOAS links
         //hotel.add(linkTo(methodOn(HotelController.class).findHotelById(hotelId)).withSelfRel());
        return new ResponseEntity<>(
                hotelService.findHotelById(hotelId), HttpStatus.OK
        );
    }

    @GetMapping("/{hotelId}/rooms")
    public ResponseEntity<Collection<Room>> getRoomsForHotelId(@PathVariable Long hotelId){
        //TODO Add HATEOAS links
        return new ResponseEntity<>(
                hotelService.findRoomsByHotelId(hotelId),HttpStatus.OK
        );
    }

    @PostMapping("/{hotelId}/rooms")
    public ResponseEntity<Hotel> saveRoomToHotel(@PathVariable Long hotelId, @RequestBody Room room){

        return new ResponseEntity<>(
                hotelService.saveRoomToHotel(hotelId, room), HttpStatus.CREATED
        );
    }

}
