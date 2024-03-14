# Write a program to print 100 numbers 
# 1) break a line after 10 numbers in line


for i in range(100):
    print(i, end=" ")
    if i % 10 == 0:
        print()
    i +=1
    
    
    