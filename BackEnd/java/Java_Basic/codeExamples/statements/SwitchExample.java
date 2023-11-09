package statements;

public class SwitchExample {
    enum Person {
    Mozart, Picasso, Goethe, Dostoevsky, Prokofiev, Dali
    }
    public static void main(String args[]) {
        print(Person.Mozart);
        print(Person.Picasso);
        print(Person.Dali);
    }

    static void print(Person person) {
        String title = switch(person){
            case Dali, Picasso -> "painter";
            case Mozart, Prokofiev -> "composer";
            case Goethe, Dostoevsky ->"writer";
        };
        System.out.printf("%s was a %s%n", person, title);
    }
}
