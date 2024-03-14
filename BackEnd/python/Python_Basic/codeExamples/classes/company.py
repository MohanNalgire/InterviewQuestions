from employee import Employee, SalaryEmployee, HourlyEmployee, CommisionEmplyee

class Company:
    def __init__(self) -> None:
        self.employees =[]
    
    def add_employee(self, new_employee):
        self.employees.append(new_employee)

    def display_employees(self):
        for emp in self.employees:
            print('______________')
            print(emp.fname, emp.lname)
            print(f'Amount ${emp.calculate_paycheck():,.2f}')
    
    def pay_employees(self):
        print('Paying employees')
        for emp in self.employees:
            print('Paycheck for:', emp.fname, emp.lname)
            print('Amout:', emp.calculate_paycheck())
            print('---------------')

def main():
    my_company = Company()

    employee1 = SalaryEmployee("Sarah", "Hess", 50000)
    my_company.add_employee(employee1)

    employee2 = HourlyEmployee("Less", "Hess", 25, 50)
    my_company.add_employee(employee2)

    employee3 = CommisionEmplyee("John", "Week", 150000, 5, 200)
    my_company.add_employee(employee3)  

    # print(my_company.employees)
    my_company.display_employees()
    my_company.pay_employees()

main()