package com.avempra.hotelreservation.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
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
    @ManyToOne
    private Hotel hotel;

}
