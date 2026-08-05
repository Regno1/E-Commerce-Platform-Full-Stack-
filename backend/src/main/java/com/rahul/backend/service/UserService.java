package com.rahul.backend.service;

import com.rahul.backend.dto.request.LoginRequest;
import com.rahul.backend.dto.request.RegisterRequest;
import com.rahul.backend.dto.response.AuthResponse;

public interface UserService {

AuthResponse register(RegisterRequest request);

AuthResponse login(LoginRequest request);
}
