# Multiply:
entryList = [2,4,5]
mult = 3

def multiply(item, mult):
    _calc = item * mult
    return _calc

def layered_multiples(calc):
    working = []
    group = 0
    for i in range (0, len(entryList)):
        sublist = []
        item = entryList[i]
        group = multiply(item, mult)
        for j in range (0, group):
            sublist.append(1)
            j += 1
        working.append(sublist)
        i+=1
    return working

answer = layered_multiples(multiply(entryList,mult))
print "the answer", answer
