package org.iesvdm.completablefuture;

public class Cliente {

    public static void eat(Pizza pizza) {
        System.out.println("Cliente: Comer rica pizza " + pizza);
    }

    public static void slice(Pizza pizza, int portions) {
        System.out.println("Cliente: Trocear pizza en " + portions);
        pizza.setPorciones(portions);
    }
}
