# write a function to return factorial number of given number

def factorial(num):
    if num < 0:
        print("Sorry. Factorial does not exist for negative numbers")
    elif num == 0:
        print("The factorial of 0 is 1")
    else:
        factorial = 1
        for i in range(1, num + 1):
            factorial = factorial * i
        print("The factorial of",num,"is",factorial)
        
x = int(input("Enter your number: "))
factorial(x)

    