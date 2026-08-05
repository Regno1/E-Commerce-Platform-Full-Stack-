package com.rahul.backend.service.impl;


import com.rahul.backend.dto.request.LoginRequest;
import com.rahul.backend.dto.request.RegisterRequest;
import com.rahul.backend.dto.response.AuthResponse;
import com.rahul.backend.entity.User;
import com.rahul.backend.repository.UserRepository;
import com.rahul.backend.security.jwt.JwtService;
import com.rahul.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public AuthResponse register(RegisterRequest request) {
         if(userRepository.existsByEmail(request.getEmail())){
             throw new RuntimeException("Email Already Exist");
         }

         User user= User.builder()
                 .name(request.getName())
                 .email(request.getEmail())
                 .password(passwordEncoder.encode(request.getPassword()))
                 .role("USER")
                 .build();

         userRepository.save(user);

         return AuthResponse.builder()
                 .message("User Register Successfully")
                 .build();
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        User user= userRepository.findByEmail(request.getEmail()).orElseThrow(()-> new RuntimeException("Invalid Email or passwrd "));

                if(!passwordEncoder.matches(request.getPassword(), user.getPassword())){
                    throw new RuntimeException("Invalid Email or Password");

                }

                String token = jwtService.generateToken(user.getEmail());

                return AuthResponse.builder()
                        .token(token)
                        .message("Login Successfull")
                        .expiration(jwtService.extractExpiration(token))
                        .build();

    }
}
