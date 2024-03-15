# Function call by value

def call_by_value(x):
    x =x * 2
    print("In function value updated to", x)
    return

# primitive data types are immutable
# integers are immutable objects
num = 6
print("Number before=", num)
call_by_value(num)