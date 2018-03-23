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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;


    private float rating;

    @ElementCollection
    @JoinTable(name = "hotel_rooms")
    private Collection<Room> room = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Collection<User> users;

    @OneToMany(mappedBy = "hotel", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Collection<Reservation> reservations;

    @OneToOne(mappedBy = "hotel", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Address address;

}
