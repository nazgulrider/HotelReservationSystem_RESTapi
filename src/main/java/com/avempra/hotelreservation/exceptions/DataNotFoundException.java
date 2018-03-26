package com.avempra.hotelreservation.exceptions;

public class DataNotFoundException extends RuntimeException {

    private static final long serialVersionUID = -4733865946311368852L;

    public DataNotFoundException() {
    }

    public DataNotFoundException(String message) {
        super(message);
    }

    public DataNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public DataNotFoundException(Throwable cause) {
        super(cause);
    }

    public DataNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
