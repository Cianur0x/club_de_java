package org.iesvdm.completablefuture;

public class Pizzero {

    public static Pizza cookPizza() {
        return new Pizza("Margarita");
    }

    public static Pizza cookPizzaQuemada() {
        return new Pizza("Margarita", true);
    }
}
