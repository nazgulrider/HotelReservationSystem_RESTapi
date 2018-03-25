package com.avempra.hotelreservation.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int roomNumber;
    @Enumerated(EnumType.ORDINAL)
    private RoomType type;
    private Float price;
    private boolean available;
    @ManyToOne
    private Reservation reservation;

    @ManyToOne
    private Hotel hotel;

}
