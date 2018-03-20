package com.avempra.hotelreservation.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;


@Data
@NoArgsConstructor
@Embeddable
class Login {
    private String userName;
    private String password;
}
