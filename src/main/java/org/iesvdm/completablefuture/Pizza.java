package org.iesvdm.completablefuture;

import java.util.Objects;

public class Pizza {

    private String nombre;
    private boolean quemada = false;
    private int porciones;

    public Pizza(String nombre) {
        this.nombre = nombre;
    }

    public Pizza(String nombre, boolean quemada) {
        this.nombre = nombre;
        this.quemada = quemada;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getPorciones() {
        return porciones;
    }

    public void setPorciones(int porciones) {
        this.porciones = porciones;
    }

    public boolean isQuemada() {
        return quemada;
    }

    public void setQuemada(boolean quemada) {
        this.quemada = quemada;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pizza pizza = (Pizza) o;
        return Objects.equals(nombre, pizza.nombre);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nombre);
    }

    @Override
    public String toString() {
        return "Pizza{" +
                "nombre='" + nombre + '\'' +
                '}';
    }
}
