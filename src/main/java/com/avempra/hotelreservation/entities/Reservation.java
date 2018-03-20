package com.avempra.hotelreservation.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Data
@NoArgsConstructor
@Entity
public class Reservation {
    @Id
    @GeneratedValue
    private Long id;
    @OneToOne
    private User user;
    @OneToOne
    private Hotel hotel;




}
