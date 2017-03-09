# Multiples:
# Part I odd numbers from 1 to 1000
num = 1
for count in range(0,1000):
    print num
    num = num + 2

# Part II print all multiples of 5 from 5 to 1,000,000.
limit = 0
while limit <= 1000000:
    if limit * 5 >= 1000000:
        # print limit
        break
    else:
        print limit * 5
        limit += 1

# Sum List: Print the sum of all the values in the list:
a = [1, 2, 5, 10, 255, 3]
array = 0
for item in a:
    array = array + item
print "the sum of the array is: ",array


# Average List: Print average of the values in the list:

# a = [1, 2, 5, 10, 255, 3]
a = [1, 2, 5, 10, 255, 3]
array = 0
for item in a:
    array = array + item
print "The average of the array is: ",array / 2
