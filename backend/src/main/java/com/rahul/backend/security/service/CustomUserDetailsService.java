package com.rahul.backend.security.service;

import com.rahul.backend.entity.User;
import com.rahul.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service // Spring Bean
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        // Email se user nikalo
        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User Not Found"));

        // Spring Security ka User object return karna hai
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())      // Username = Email
                .password(user.getPassword())       // Encrypted Password
                .roles(user.getRole())              // USER / ADMIN
                .build();
    }
}