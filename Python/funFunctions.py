# Odd/Even:
# Loop and specify whether it's odd or even number
def odd_even(i):
    if i % 2 == 0:
        return "Number is ", i, "  This is an even number."
    else:
        return "Number is ", i, "  This is an odd number."
for i in range (1,2001):
    answer = odd_even(i)
    print answer
    i+=1
