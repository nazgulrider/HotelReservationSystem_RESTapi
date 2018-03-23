//package com.avempra.hotelreservation.controller;
//
//import com.avempra.hotelreservation.entities.Reservation;
//import com.avempra.hotelreservation.service.IHotelService;
//import org.springframework.data.rest.webmvc.BasePathAwareController;
//import org.springframework.data.rest.webmvc.PersistentEntityResource;
//import org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler;
//import org.springframework.data.rest.webmvc.RepositoryRestController;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import java.util.Collection;
//
//@BasePathAwareController
//@RequestMapping("/hotels")
//public class HotelController {
//    private IHotelService hotelService;
//
//    public HotelController(IHotelService hotelService) {
//        this.hotelService = hotelService;
//    }
//
//    @GetMapping("/{hotelId}/reservations")
//    public ResponseEntity<PersistentEntityResource> getReservations(@PathVariable Long hotelId, PersistentEntityResourceAssembler assembler){
//        Iterable<Reservation> res = hotelService.getReservationsForHotelId(hotelId);
//        return ResponseEntity.ok(assembler.toResource(res));
//    }
//
//}
