package com.avempra.hotelreservation.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
class Login {
    private String userName;
    private String password;
}
