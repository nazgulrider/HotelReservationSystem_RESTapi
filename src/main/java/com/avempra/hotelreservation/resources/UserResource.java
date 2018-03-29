package com.avempra.hotelreservation.resources;

import com.avempra.hotelreservation.controller.UserController;
import com.avempra.hotelreservation.entities.User;
import lombok.Getter;
import org.springframework.hateoas.ResourceSupport;

import javax.xml.bind.annotation.XmlRootElement;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

@Getter
@XmlRootElement
public class UserResource extends ResourceSupport {
    private final User user;

    public UserResource(final User user) {
        this.user = user;
        final long id = user.getId();

        //Add link to self
        add(linkTo(methodOn(UserController.class).getUserWithId(id)).withSelfRel());
        //Add link to all the reservations belonging to User
        add(linkTo(methodOn(UserController.class).getAllReservations(id)).withRel("reservations"));
    }

}
