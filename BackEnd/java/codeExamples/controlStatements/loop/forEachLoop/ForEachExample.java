package controlStatements.loop.forEachLoop;

import java.util.ArrayList;
import java.util.List;

public class ForEachExample {
    public static void main(String[] args){
        List<String> gamaesList = new ArrayList<String>();
        gamaesList.add("football");
        gamaesList.add("criclet");
        gamaesList.add("chess");
        gamaesList.add("hocky");

        System.out.println("Integration:");

        gamaesList.forEach(games -> System.out.println(games));
    }
}
