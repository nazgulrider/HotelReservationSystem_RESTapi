package com.avempra.hotelreservation.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private UserRole userRole;

    private String firstName;
    private String lastName;
    private String email;
    private Long phone;

    @Embedded
    @JsonIgnore
    private Login login;

    @ElementCollection
    @JoinTable(name = "user_billing")
    private Collection<Billing> billing;

    @ManyToMany(mappedBy = "users",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Collection<Address> address;

    @OneToMany(fetch = FetchType.LAZY,
            mappedBy = "user",
            cascade = CascadeType.ALL)
    private Collection<Reservation> reservations;


//    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "users")
//    private Collection<Hotel> hotels;

}
