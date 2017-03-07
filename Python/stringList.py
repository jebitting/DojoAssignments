# Jim Bitting
# String and List Practice

# Find and Replace
str = "If monkeys like bananas, then I must be a monkey!"
num = str.find("monkeys")
print num
print str.find("monkeys")
newStr = str.replace("monkey", "alligator")
print newStr

# Min and Max
x = [2,54,-2,7,12,98]
print max(x)
print min(x)

# First and Last
x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
y = len(x)-1
print x[y]

# New List
array = [19,2,54,-2,7,12,98,32,10,-3,6]
array.sort()
splitLeft = array[0:6]
splitRight = array[6:11]
splitRight.insert(0,splitLeft)
print array
print splitRight
