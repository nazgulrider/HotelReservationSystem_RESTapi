package com.avempra.hotelreservation.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Embeddable
public class Room {
    private int roomNumber;
    @Enumerated(EnumType.ORDINAL)
    private RoomType type;
    private boolean available;
}
