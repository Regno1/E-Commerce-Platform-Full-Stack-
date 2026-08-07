package com.rahul.backend.dto.response;

import lombok.*;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ErrorResponse{

    private LocalDateTime timestamp;

    private Integer status;

    private String error;

    private String path;





}
