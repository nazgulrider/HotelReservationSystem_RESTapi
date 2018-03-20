package com.avempra.hotelreservation.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@NoArgsConstructor
@Embeddable
class Address {
    @Enumerated(EnumType.STRING)
    private AddressType type;
    private String street1;
    private String street2;
    private String city;
    private String state;
    private int zip;

}
