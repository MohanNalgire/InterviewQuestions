package OOP.NonAccessModifiers;

final class Vehicle {
    protected String brand = "ford";
    public void honk(){
        System.out.println("Tuut, tuut!");
    }
}

public class FinalClassExample {
    public static void main(String[] args){
        Vehicle myFastCar = new Vehicle();
        myFastCar.honk();
    }
}
/*
 * Final class
 * 1) Inheritance of final class is restricted
 * 2) Final classes cannot be extended or inherited- we will get compilation error.
 * 3) Final class is not abstract class.
 * 4) All wrapper classes in Java are final classes such as String, Integer, etc.
 */

 /* How to run such program 
  * 1) we have package here as package OOP.NonAccessModifiers;
  *  >>> java OOP.NonAccessModifiers.FinalClassExample 
  */
