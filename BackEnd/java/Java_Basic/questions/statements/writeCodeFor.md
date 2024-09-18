# statements

## Question Index

1. ### Write code for finding leap years

>
```java
public class LeapYear {
    public static void main(String[] args) {
        int fromYear = 2000;
        int toYear = 2999;
        for (int year = fromYear; year < toYear; year++) {
            /*
            With if else statement
            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                System.out.println(year +"=> Leap year");
            } else {
                System.out.println(year +"=> Not a leap year");
            }
            */
            // With ternary operator
            String output = ((year %4 == 0) && (year % 100 !=0) || (year % 400 == 0) ) ? year +"=> Leap year": year +"=> Not a leap year";
            System.out.println(output);
        }
    }
}
```

Refernece: BackEnd\java\codeExamples\statements\LeapYear.java
