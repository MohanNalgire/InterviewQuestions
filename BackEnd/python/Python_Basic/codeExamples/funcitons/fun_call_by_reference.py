# Function call by reference

def call_by_reference(list):
    list.append("F")
    print("In function value updated to", list)
    return

# list is a mutable object
my_list = ["E"]
print("List before", my_list)
call_by_reference(my_list)