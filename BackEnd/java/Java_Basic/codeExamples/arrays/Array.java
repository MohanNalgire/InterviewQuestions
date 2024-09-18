package arrays;

import java.util.Arrays;

public class Array {
    public static void main(String[] args){
        String[] cars ={"volvo", "bmw"};
        // System.out.println(Arrays.toString(cars));
        /*
        for(int i= 0; i < cars.length; i++){
            System.out.println(cars[i]);
        }
        */
        for(String car : cars){
            System.out.println(car);
        }
    }
    
}
