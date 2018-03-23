package com.avempra.hotelreservation.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private UserRole userRole;

    private String firstName;
    private String lastName;
    private String email;
    private int phone;

    @Embedded
    private Login login;

    @ElementCollection
    @JoinTable(name = "user_billing")
    private Collection<Billing> billing;

    @OneToMany(mappedBy = "user",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Collection<Address> address;

    @OneToMany(fetch = FetchType.LAZY,
            mappedBy = "user",
            cascade = CascadeType.ALL)
    private Collection<Reservation> reservations;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "users")
    private Collection<Hotel> hotels;

}
