package com.avempra.hotelreservation.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Data
@NoArgsConstructor
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = User.class)
@Table(name = "HotelUser")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @Enumerated(EnumType.STRING)
    private UserRole userRole=UserRole.CUSTOMER;

    private String firstName;
    private String lastName;
    private String email;
    private Long phone;

    @Embedded
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Login login;

    @JsonProperty(access = JsonProperty.Access.AUTO)
    @ElementCollection
    @JoinTable(name = "user_billing")
    private Collection<Billing> billing;

    @JsonProperty(access = JsonProperty.Access.AUTO)
    @OneToMany(mappedBy = "user",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Collection<Address> address;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "user",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Collection<Reservation> reservations;


    public User(Login login, String firstName, String lastName, String email, Long phone) {
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
}
