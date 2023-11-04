package org.iesvdm.completablefuture;

import org.junit.jupiter.api.Test;

import java.util.concurrent.*;

public class CompletableFutureTest {

    @Test
    void futureTest() {

        ExecutorService executor = Executors.newCachedThreadPool();
        //Desde java 5 existe Future
        Future<Pizza> future = executor.submit(new Callable() {
            public Pizza call() {
                System.out.println(Thread.currentThread());
                Pizza pizza = null;

                try {
                    System.out.println("Durmiendo un poco...");
                    // EL HILO SE SUSPENDE 1 s
                    //              |
                    //              V
                    Thread.sleep(4000);
                    pizza = Pizzero.cookPizza();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }

                return pizza;
            }

        });

        try {
            System.out.println(Thread.currentThread());
            System.out.println("Antes de obtener la pizza.");

            //           HACE FALTA ACCEDER AL FUTURE CON get
            //                      |
            //                      V
            Pizza pizza = future.get(); // INCONVENIENTE DE LOS FUTURE: NO SE PUEDEN ENCADENAR
                                        // MÉTODOS DE LLAMADAS COMO EN EL CASO DE JS CON then
            System.out.println("Después de obtener la pizza.");
            Cliente.eat(pizza);
        } catch (final InterruptedException | ExecutionException e) {
            // not cooked
        }
    }

    @Test
    void completableFuture() {
        //COMPLETABLEFUTURE SON LAS PROMISES DE JAVA, PERO CON OTRO NOMBRE...
        System.out.println(Thread.currentThread());
        CompletableFuture
                //.supplyAsync(Pizzero::cookPizza)
                //         Lambda Supplier
                //              |
                //              V
                .supplyAsync(() -> { System.out.println(Thread.currentThread());
                    return Pizzero.cookPizza();
                })
                //.thenAccept(Cliente::eat)
                //         Lambda Consumer
                //              |
                //              V
                .thenAccept(pizza -> {
                    System.out.println(Thread.currentThread());
                    Cliente.eat(pizza);
                 })
                .join(); // EN EL JOIN ES CUANDO EMPIEZA LA EJECUCIÓN
    }

    @Test
    void completableFutureThenApply() {
        //COMPLETABLEFUTURE SON LAS PROMISES DE JAVA, PERO CON OTRO NOMBRE...
        System.out.println(Thread.currentThread());
        CompletableFuture
                //.supplyAsync(Pizzero::cookPizza)
                //         Lambda Supplier
                //              |
                //              V
                .supplyAsync(() -> { System.out.println(Thread.currentThread());
                    return Pizzero.cookPizza();
                })
                //  Lambda Function
                //               |
                //               V
                .thenApply(pizza -> {
                    System.out.println(Thread.currentThread());
                    Cliente.slice(pizza, 8);
                    return pizza;
                })
                //.thenAccept(Cliente::eat)
                //         Lambda Consumer
                //              |
                //              V
                .thenAccept(pizza -> {
                    System.out.println(Thread.currentThread());
                    Cliente.eat(pizza);
                })
                .join(); // EN EL JOIN ES CUANDO EMPIEZA LA EJECUCIÓN
    }

    @Test
    void completableFutureExceptionally() {
        //COMPLETABLEFUTURE SON LAS PROMISES DE JAVA, PERO CON OTRO NOMBRE...
        System.out.println(Thread.currentThread());
        CompletableFuture
                //.supplyAsync(Pizzero::cookPizza)
                //         Lambda Supplier
                //              |
                //              V
                .supplyAsync(() -> { System.out.println(Thread.currentThread());
                    //return Pizzero.cookPizza();
                    return Pizzero.cookPizzaQuemada();
                })
                //  Lambda Function
                //               |
                //               V
                .thenApply(pizza -> {
                    System.out.println(Thread.currentThread());
                    if (pizza.isQuemada()) throw new RuntimeException("Pizza quemada");
                    Cliente.slice(pizza, 8);
                    return pizza;
                })
                .exceptionally(throwable -> {
                    System.out.println(Thread.currentThread());
                    System.out.println(throwable.getMessage());
                    return Pizzero.cookPizza();
                })
                //.thenAccept(Cliente::eat)
                //         Lambda Consumer
                //              |
                //              V
                .thenAccept(pizza -> {
                    System.out.println(Thread.currentThread());
                    Cliente.eat(pizza);
                })
                .join(); // EN EL JOIN ES CUANDO EMPIEZA LA EJECUCIÓN
    }
}
