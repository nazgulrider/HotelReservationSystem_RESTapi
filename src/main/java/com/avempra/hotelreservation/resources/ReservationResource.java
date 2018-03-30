package com.avempra.hotelreservation.resources;

import com.avempra.hotelreservation.controller.ReservationController;
import com.avempra.hotelreservation.entities.Reservation;
import lombok.Getter;
import org.springframework.hateoas.ResourceSupport;

import javax.xml.bind.annotation.XmlRootElement;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;


@Getter
@XmlRootElement
public class ReservationResource extends ResourceSupport{
    private final Reservation reservation;

    public ReservationResource(final Reservation reservation) {
        this.reservation = reservation;
        final long id = reservation.getId();
        add(linkTo(methodOn(ReservationController.class).getReservationWithId(id)).withSelfRel());
        add(linkTo(methodOn(ReservationController.class).getUserForReservation(id)).withRel("user"));
        add(linkTo(methodOn(ReservationController.class).getHotelForReservation(id)).withRel("hotel"));
        add(linkTo(methodOn(ReservationController.class).getRoomsForReservation(id)).withRel("rooms"));

    }


}
