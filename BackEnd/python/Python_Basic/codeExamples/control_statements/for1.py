# Write a program to print the pattern as shown bellow
# *
# **
# ***
# ****

# for i in range(5):
#     for j in range(5):
#         print("# ", end="")
#     print()
    
for a in range(5):
    for b in range(a+1):
        print("# ", end="")
    print()    