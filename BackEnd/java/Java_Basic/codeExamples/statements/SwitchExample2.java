package statements;

public class SwitchExample2 {
    enum NumbersEnum {
        One, Two, Three, Four
    }
    public static void main(String args[]) {
        printNewSwitch(NumbersEnum.One);
        printNewSwitch(NumbersEnum.Two);
        printNewSwitch(NumbersEnum.Three);

        // switch with break 
        printOldSwitchBreak(NumbersEnum.One);
        printOldSwitchBreak(NumbersEnum.Two);

        // switch with yield
    }

    static void printOldSwitchBreak(NumbersEnum number){
        String message;
        switch(number){
            case One: 
            message = "painter";break;
            case Two: 
            message = "composer";break;
            case Three:
            message = "writer";break;
            default:
            message = "More default values";
        };
        System.out.printf("%s was a %s%n", number, message);
    }
    static void printOldSwitchYield(NumbersEnum number){
        // yield with colon delimiter
        String message = switch(number){
            case One: 
            yield "painter";
            case Two: 
            yield "composer";
            case Three:
            yield "writer";
            default:
            yield "More default values";
        };
        System.out.printf("%s was a %s%n", number, message);
    }

    static void printNewSwitch(NumbersEnum number) {
        // 
        String title = switch(number){
            case One -> "painter";
            case Two -> "composer";
            case Three ->"writer";
            default -> throw new IllegalArgumentException("Unexpected value: " + number);
        };
        System.out.printf("%s was a %s%n", number, title);
    }
}
