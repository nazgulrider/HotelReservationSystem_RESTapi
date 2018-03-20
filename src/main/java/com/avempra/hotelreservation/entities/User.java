package com.avempra.hotelreservation.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    @Enumerated(EnumType.STRING)
    private UserRole role;
    private String firstName;
    private String lastName;
    private String email;
    private int phone;
    @Embedded
    private Login login;
    @ElementCollection
    @JoinTable(name = "USER_ADDRESS")
    private Collection<Address> address = new HashSet<>();
    @Embedded
    private Billing billing;

}
