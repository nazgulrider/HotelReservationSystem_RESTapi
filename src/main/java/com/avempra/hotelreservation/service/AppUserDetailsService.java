package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.entities.User;
import com.avempra.hotelreservation.exceptions.DataNotFoundException;
import com.avempra.hotelreservation.repositories.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("userDetailsService")
public class AppUserDetailsService implements UserDetailsService {


    private UserRepository userRepository;

    public AppUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = userRepository.findByLogin_UserName(s).orElseThrow(DataNotFoundException::new);

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(String.valueOf(user.getUserRole())));

        UserDetails userDetails = new org.springframework.security.core
                .userdetails.User(user.getLogin().getUserName(), user.getLogin().getPassword(), authorities);

        return userDetails;
    }
}
