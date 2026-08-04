package com.rahul.backend.exception;

public class ResourceNotFound extends RuntimeException {
    public ResourceNotFound(String message) {

        super(message);
    }
}
