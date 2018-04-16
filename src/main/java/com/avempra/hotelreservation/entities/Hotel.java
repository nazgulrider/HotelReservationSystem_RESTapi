package com.avempra.hotelreservation.entities;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Data
@NoArgsConstructor
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = Hotel.class)
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private float rating;
    private String url;
    private String description;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "hotel",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Collection<Room> rooms = new ArrayList<>();

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "hotel",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Collection<Reservation> reservations;


    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Address address;

    public Hotel(String name, float rating, String url, String description) {
        this.name = name;
        this.rating = rating;
        this.url = url;
        this.description = description;
    }

}
