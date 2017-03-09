#Coin Toss
import random

toss = 0
coinHead = 0
coinTail = 0
heads = 0
tails = 0

# Print "Starting the program..."
while(toss <= 5000):
    coinHead= round(random.random())
    coinTail= round(random.random())
    # print coinTail, coinHead
    if coinHead == coinTail:
        continue
    elif coinHead > coinTail:
        print "Attempt #", toss, ": Throwing a coin... It's a head! ... Got", heads,"head(s) so far and", tails, "tail(s) so far"
        heads += 1
        toss +=1
    else:
        print "Attempt #", toss, ": Throwing a coin... It's a tail! ... Got", heads,"head(s) so far and", tails, "tail(s) so far"
        tails += 1
        toss += 1
print "Ending the program, thank you!"
