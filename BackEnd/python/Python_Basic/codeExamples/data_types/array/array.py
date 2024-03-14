from array import *

vals = array('i',[1,2,3,4,5,6])

print(vals)

print(vals.buffer_info())

# revert array
vals.reverse()
print(vals)

# looping on array

for i in range(len(vals)):
    print(vals[i])
    
# copying vlaues from other array

newArray = array(vals.typecode, (a for a in vals))    

for e in newArray:
    print(e)
    
