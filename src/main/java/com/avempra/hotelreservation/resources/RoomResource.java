package com.avempra.hotelreservation.resources;

import com.avempra.hotelreservation.controller.ReservationController;
import com.avempra.hotelreservation.entities.Room;
import lombok.Getter;
import org.springframework.hateoas.ResourceSupport;

import javax.xml.bind.annotation.XmlRootElement;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

@Getter
@XmlRootElement
public class RoomResource extends ResourceSupport {
    private final Room room;

    public RoomResource(Room room) {
        this.room = room;
        final long id = room.getId();


    }

}
