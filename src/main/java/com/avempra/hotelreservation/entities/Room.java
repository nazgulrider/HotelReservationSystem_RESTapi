package com.avempra.hotelreservation.entities;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

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

    @JsonProperty(access = JsonProperty.Access.AUTO)
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "Room_Reservation",
            joinColumns = {@JoinColumn(name = "room_id")},
            inverseJoinColumns = {@JoinColumn(name = "reservation_id")}
    )
    private Collection<Reservation> reservations;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    private Hotel hotel;


    public Room(int roomNumber, RoomType type, Float price, Hotel hotel) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.price = price;
        this.hotel = hotel;
    }
}
