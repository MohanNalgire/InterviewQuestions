# nubmer divisible by 5 from num = [12, 13, 14, 15, 16, 1, 18, 19, 20]
# Else on for loop
nums = [12, 13, 14, 15, 16, 1, 18, 19, 20]
for num in nums:
    if num % 5 == 0:
        print(num)
        break
else:
    print("Not found any number.")
    
    