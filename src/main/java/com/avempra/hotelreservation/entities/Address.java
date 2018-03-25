package com.avempra.hotelreservation.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Address {
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
    @ManyToMany
    private Collection<User> users;
    @OneToOne(mappedBy = "address")
    private Hotel hotel;

}
