package com.avempra.hotelreservation.config;

import com.avempra.hotelreservation.service.AppUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    private AppUserDetailsService userDetailsService;

    public SecurityConfiguration(AppUserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }


    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(new CustomAuthenticationProvider(userDetailsService));

    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web
                .ignoring()
                //here we are ignoring all static resources with bundle and jpg on them
                .antMatchers("/*.bundle.*")
                .antMatchers("/*.jpg*");
    }



    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic()
                .and()
                .authorizeRequests()
                .antMatchers("/api/**").authenticated() //all api requests are protected
                .anyRequest().permitAll() //all other requests are permitted. Angular should handle route protection for the frontend
                .and()
                .logout()
                .logoutSuccessUrl("/");

    }

}
