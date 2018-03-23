package com.avempra.hotelreservation.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
@NoArgsConstructor
@Embeddable
public class Billing {
    @Enumerated(EnumType.ORDINAL)
    private PaymentType paymentType;
    @Enumerated(EnumType.ORDINAL)
    private CardType cardType;
    private Long cardNumber;
    private int expiration;
    private int securityCode;
}
