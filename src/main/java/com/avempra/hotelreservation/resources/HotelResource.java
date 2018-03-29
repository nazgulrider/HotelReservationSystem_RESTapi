package com.avempra.hotelreservation.resources;

import com.avempra.hotelreservation.controller.HotelController;
import com.avempra.hotelreservation.entities.Hotel;
import lombok.Getter;
import org.springframework.hateoas.ResourceSupport;

import javax.xml.bind.annotation.XmlRootElement;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

@Getter
@XmlRootElement
public class HotelResource extends ResourceSupport {
    private final Hotel hotel;

    public HotelResource(final Hotel hotel) {
        this.hotel = hotel;
        final long id = hotel.getId();
        add(linkTo(HotelController.class).withRel("Hotels"));
        add(linkTo(methodOn(HotelController.class).getRoomsForHotelId(id)).withRel("Rooms"));
        add(linkTo(methodOn(HotelController.class).getAllReservationsForHotelId(id)).withRel("Reservations"));
        add(linkTo(methodOn(HotelController.class).findHotelById(id)).withSelfRel());
    }
}
