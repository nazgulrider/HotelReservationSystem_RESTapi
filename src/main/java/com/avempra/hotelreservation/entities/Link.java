package com.avempra.hotelreservation.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Link {
    private String rel;
    private String link;
}
