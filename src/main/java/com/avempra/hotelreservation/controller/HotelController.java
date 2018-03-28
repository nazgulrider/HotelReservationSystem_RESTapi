package com.avempra.hotelreservation.controller;


import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Room;
import com.avempra.hotelreservation.resources.HotelResource;
import com.avempra.hotelreservation.resources.ReservationResource;
import com.avempra.hotelreservation.service.HotelService;
import com.avempra.hotelreservation.service.ReservationService;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Collection;


import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;


/**
 * HotelController is the main entry point for all requests related to hotels
 *
 * @author Prashanta K Shrestha
 */
@RestController
@RequestMapping(value = "/hotels",produces = "application/hal+json")
public class HotelController {

    private HotelService hotelService;
    private ReservationService reservationService;

    public HotelController(HotelService hotelService, ReservationService reservationService) {
        this.hotelService = hotelService;
        this.reservationService = reservationService;
    }


    @GetMapping
    public ResponseEntity<Resources<HotelResource>> getAllHotels(){
        return new ResponseEntity<>(
                hotelService.findAllHotels(), HttpStatus.OK
        );
    }
    @GetMapping("/{hotelId}/reservations")
    public ResponseEntity<Resources<ReservationResource>> getAllReservationsForHotelId(@PathVariable("hotelId") final long id){
        //TODO Implement GET for all reservations
        return new ResponseEntity<>(
                reservationService.getAllReservationsByHotelId(id), HttpStatus.OK
        );
    }

    @PostMapping
    public ResponseEntity<HotelResource> saveHotel(@RequestBody Hotel hotel){
        return new ResponseEntity<>(
                hotelService.saveHotel(hotel), HttpStatus.CREATED
        );
    }



    @GetMapping("/{hotelId}")
    public ResponseEntity<HotelResource> findHotelById(@PathVariable Long hotelId){
        //TODO Add HATEOAS links
//         hotel.add(linkTo(methodOn(HotelController.class).findHotelById(hotelId)).withSelfRel());
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
    public ResponseEntity<HotelResource> updateHotel(@PathVariable Long hotelId, @RequestBody Hotel hotel){
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
    public ResponseEntity<Resources<Room>> getRoomsForHotelId(@PathVariable Long hotelId){
        return new ResponseEntity<>(
                hotelService.findRoomsByHotelId(hotelId),HttpStatus.OK
        );
    }

    @PostMapping("/{hotelId}/rooms")
    public ResponseEntity<HotelResource> saveRoomToHotel(@PathVariable Long hotelId, @RequestBody Room room){

        return new ResponseEntity<>(
                hotelService.saveRoomToHotel(hotelId, room), HttpStatus.CREATED
        );
    }

}
