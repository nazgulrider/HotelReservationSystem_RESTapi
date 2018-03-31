package com.avempra.hotelreservation.controller;


import com.avempra.hotelreservation.entities.Hotel;
import com.avempra.hotelreservation.entities.Room;
import com.avempra.hotelreservation.resources.HotelResource;
import com.avempra.hotelreservation.resources.ReservationResource;
import com.avempra.hotelreservation.resources.RoomResource;
import com.avempra.hotelreservation.service.HotelService;
import com.avempra.hotelreservation.service.ReservationService;
import com.avempra.hotelreservation.service.RoomService;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;


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
    private RoomService roomService;

    public HotelController(HotelService hotelService, ReservationService reservationService, RoomService roomService) {
        this.hotelService = hotelService;
        this.reservationService = reservationService;
        this.roomService = roomService;
    }

    /**
     * Maps to all hotels in the system
     * @return Returns all existing hotels in the database
     */
    @GetMapping
    public ResponseEntity<Resources<HotelResource>> getAllHotels(){
        return new ResponseEntity<>(
                hotelService.findAllHotels(), HttpStatus.OK
        );
    }

    /**
     * Saves a new instance of a hotel object to the database
     * @param hotel The hotel object that needs to be saved to the database
     * @return Returns the saved hotel if the action was successful
     */
    @PostMapping
    public ResponseEntity<HotelResource> saveHotel(@RequestBody Hotel hotel){
        return new ResponseEntity<>(
                hotelService.saveHotel(hotel), HttpStatus.CREATED
        );
    }


    /**
     * Maps to a hotel with given id
     * @param hotelId Id of the hotel to search for
     * @return Returns an instance of hotel wrapped in a Hotel resource object
     */
    @GetMapping("/{hotelId}")
    public ResponseEntity<HotelResource> findHotelById(@PathVariable Long hotelId){
        //TODO Add HATEOAS links
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

    /**
     * Mapping to delete the hotel with given id
     * @param hotelId Id of the hotel to be deleted
     * @return Returns an empty response object with status
     */
    @DeleteMapping("/{hotelId}")
    public ResponseEntity<Void> deleteHotelWithId(@PathVariable Long hotelId){
        hotelService.deleteHotelById(hotelId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     *Maps to the rooms that are available for a hotel with a given Id
     * @param hotelId The Id of the hotel to be searched for rooms
     * @return Returns rooms for the hotel with the given Id
     */
    @GetMapping("/{hotelId}/rooms")
    public ResponseEntity<Resources<RoomResource>> getRoomsForHotelId(@PathVariable Long hotelId){
        return new ResponseEntity<>(
                hotelService.findRoomsByHotelId(hotelId),HttpStatus.OK
        );
    }


    //TODO Refactor this so that it returns an instance of a room instead of the hotel to which the room is saved to
    /**
     * Saves room object to database and maps it to the hotelId to which it was saved. Hotel to be saved to is inferred from the URI path variable
     * @param hotelId Id of the hotel to which to save the room to
     * @param room Room to be saved
     * @return Returns an RoomResource object
     */
    @PostMapping("/{hotelId}/rooms")
    public ResponseEntity<HotelResource> saveRoomToHotel(@PathVariable Long hotelId, @RequestBody Room room){

        return new ResponseEntity<>(
                hotelService.saveRoomToHotel(hotelId, room), HttpStatus.CREATED
        );
    }

    /**
     * Maps to all reservations belonging to a hotel
     * @param id Id of the hotel to be searched
     * @return Returns all reservation resources
     */
    @GetMapping("/{hotelId}/reservations")
    public ResponseEntity<Resources<ReservationResource>> getAllReservationsForHotelId(@PathVariable("hotelId") final long id){

        return new ResponseEntity<>(
                reservationService.getAllReservationsByHotelId(id), HttpStatus.OK
        );
    }

}
