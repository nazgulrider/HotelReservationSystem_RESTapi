package com.avempra.hotelreservation.entities;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = Room.class)
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

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    private Hotel hotel;


    public Room(int roomNumber, RoomType type, Float price, boolean available, Hotel hotel) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.price = price;
        this.available = available;
        this.hotel = hotel;
    }
}
