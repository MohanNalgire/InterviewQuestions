package statements;

public class LeapYear {
    public static void main(String[] args) {
        int fromYear = 2000;
        int toYear = 2999;
        for (int year = fromYear; year < toYear; year++) {
            /*
            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                System.out.println(year +"=> Leap year");
            } else {
                System.out.println(year +"=> Not a leap year");
            }
            */
            String output = ((year %4 == 0) && (year % 100 !=0) || (year % 400 == 0) ) ? year +"=> Leap year": year +"=> Not a leap year";
            System.out.println(output);
        }
    }
}