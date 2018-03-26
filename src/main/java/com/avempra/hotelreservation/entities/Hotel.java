package com.avempra.hotelreservation.entities;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Data
@NoArgsConstructor
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private float rating;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "hotel_rooms",
            joinColumns = @JoinColumn(name = "hotel_id"),
            inverseJoinColumns = @JoinColumn(name = "room_id")
    )
    private Collection<Room> rooms = new ArrayList<>();

    @OneToMany(mappedBy = "hotel", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Collection<Reservation> reservations = new ArrayList<>();


    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Address address;

}
