# Multiply:
multList = [2,4,10,16]
multiplier = 5
item = 0

def multiply(item, multiplier):
    multi = item * multiplier
    return multi

for i in range (0, len(multList)):
    item = multList[i]
    multAnswer = multiply(item, multiplier)
    print "Multiply Result is ",multAnswer
    i+=1
