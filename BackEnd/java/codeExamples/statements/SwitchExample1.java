package statements;
/*
 *  1) Case statements have been merged, and the code doesn't use break statement any more.
 *  2) The following example shows a multiline default block which uses the new yield statement to yield a value.
 */
public class SwitchExample1 {
    enum Person {
        Mozart, Picasso, Goethe, Dostoevsky, Prokofiev, Dali,
        Gaudi, Bach, Einstein
    }

    public static void main(String args[]) {
        print(Person.Mozart);
        print(Person.Picasso);
        print(Person.Dali);
        print(Person.Einstein);
    }

    static void print(Person person) {
        String title = switch (person) {
            case Dali, Picasso -> "painter";
            case Mozart, Prokofiev -> "composer";
            case Goethe, Dostoevsky -> "writer";
            default -> {
                System.out.printf("Oops! don't know about %s%n", person);
                yield "...";
            }
        };
        System.out.printf("%s was a %s%n", person, title);
    }
}
