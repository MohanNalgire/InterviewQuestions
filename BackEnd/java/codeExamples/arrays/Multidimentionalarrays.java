package arrays;

import java.util.Arrays;

public class Multidimentionalarrays {
    public static void main(String[] args){
        // 1-D array
        int[] arr1 = {0, 1, 2, 3, 4, 5};
        System.out.println(arr1);
        // 2-D array
        int [][] myNumbers = {
            {1,2,3},
            {5,6,7}
        };
        System.out.println(Arrays.deepToString(myNumbers));
        // 3-D array
        int[][][] array3 = {
            {
                {0,1},{2,3},{4,5}
            },
            {
                {6,7},{8,9}, {10,11}
            },
            {
                {12,13},{14,15},{16,17}
            }
        };
        System.out.println(Arrays.deepToString(array3));
    }
}
