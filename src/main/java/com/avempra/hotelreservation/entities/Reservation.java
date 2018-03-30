package com.avempra.hotelreservation.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;
import java.util.Collection;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = Reservation.class)
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Instant created;
    private Date checkIn;
    private Date checkOut;
    private Boolean paid;


    @ManyToOne
    private User user;

    @JsonIgnore
    @ManyToOne
    private Hotel hotel;

    @JsonIgnore
    @OneToMany(mappedBy = "reservation")
    private Collection<Room> rooms;

}
