package com.avempra.hotelreservation.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@NoArgsConstructor
@Entity
class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private AddressType addressType;
    private String street1;
    private String street2;
    private String city;
    private String state;
    private int zip;
    @ManyToOne
    private User user;
    @OneToOne
    private Hotel hotel;

}
