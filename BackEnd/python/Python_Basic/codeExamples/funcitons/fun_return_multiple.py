# Write a function to return multiple values as even numbers and odd numbers from given list

def even_odd(list):
    even_num =[]
    odd_num = []
    for num in list:
        if num % 2 == 0:
            even_num.append(num)
        else:
            odd_num.append(num)
    return even_num, odd_num
        
numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

even_num, odd_num = even_odd(numberList)
print('Even Number', even_num)
print("Odd Numbers", odd_num)