package com.avempra.hotelreservation.controller;


import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Room;
import com.avempra.hotelreservation.service.HotelService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * HotelController is the main entry point for all requests related to hotels
 *
 * @author Prashanta K Shrestha
 */
@RestController
@RequestMapping("/hotels")
public class HotelController {

    private HotelService hotelService;

    public HotelController(HotelService hotelService) {
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

    /**
     *Does partial update on Hotel
     * @param hotelId Id of the Hotel to be updated
     * @param hotel updated Hotel object that has the new information
     * @return Returns updated instance of the Hotel that has been saved to the database
     */
    @PatchMapping("/{hotelId}")
    public ResponseEntity<Hotel> updateHotel(@PathVariable Long hotelId, @RequestBody Hotel hotel){
        return new ResponseEntity<>(
                hotelService.updateHotel(hotelId, hotel), HttpStatus.OK
        );
    }

    //TODO Implement DELETE request on a hotel
    @DeleteMapping("/{hotelId}")
    public ResponseEntity<Void> deleteHotelWithId(@PathVariable Long hotelId){
        hotelService.deleteHotelById(hotelId);
        return new ResponseEntity<>(HttpStatus.OK);
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

    //TODO Implement PUT request on hotel room
    //TODO Implement PATCH request on hotel room
    //TODO Implement DELETE request on hotel room

}
