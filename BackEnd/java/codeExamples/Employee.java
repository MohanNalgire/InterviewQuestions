public class Employee {
    // public => visible to current and child class
    public String name;
    // private => visible to current class only
    private double salary;
    // constructor method
    public Employee(String empName){
        name = empName;
    }

    public void setSalary(double empSal){
        salary = empSal;
    }

    public void printEmp(){
        System.out.println("name:"+ name);
        System.out.println("salary:"+ salary);
    }
    public static void main(String []args){
        Employee empOne = new Employee("Mohan");
        empOne.setSalary(1000);
        empOne.printEmp();
    }
}
