# Write a program to print 100 numbers 
# 1) break a line after 10 numbers in line

i = 1
while i <= 100:
    print(i, end=" ")
    if i % 10 == 0:
        print()
    i += 1
