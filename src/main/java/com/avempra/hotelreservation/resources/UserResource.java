package com.avempra.hotelreservation.resources;

import com.avempra.hotelreservation.entities.User;
import lombok.Getter;
import org.springframework.hateoas.ResourceSupport;

import javax.xml.bind.annotation.XmlRootElement;

@Getter
@XmlRootElement
public class UserResource extends ResourceSupport {
    private final User user;

    public UserResource(final User user) {
        this.user = user;
        final long id = user.getId();
    }
}
