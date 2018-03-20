package com.avempra.hotelreservation.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Hotel {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Embedded
    private Address address;
    private float rating;
    @ElementCollection
    @JoinTable(name = "HOTEL_ROOMS")
    private Collection<Room> room = new HashSet<>();
    @OneToMany(fetch = FetchType.LAZY)
    private Collection<User> customers = new ArrayList<>();
    @OneToMany(fetch = FetchType.LAZY)
    private Collection<Reservation> reservations = new ArrayList<>();

}
