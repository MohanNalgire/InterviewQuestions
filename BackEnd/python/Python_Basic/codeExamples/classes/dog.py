class Dog:
    def __init__(self, name, breed):
        self.name = name;
        self.breed = breed;

class Robot_Dog: 
    def __init__(self, name_val, breed_val):
        self.name = name_val
        self.breed = breed_val

    def bark(self):
        print("woof woof!");

# Main program
my_dog= Robot_Dog('Spot', 'local dog')
print(my_dog.name)
print(my_dog.breed)

