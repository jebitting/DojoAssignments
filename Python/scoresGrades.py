#Scores and Grades
import random
# random = random.random()
# print random
grade = 0
score = 0
i = 0

while (i < 10) :
    grade = int(random.random()*100)
    if  grade >= 90:
        print "Score:", grade, "; Your grade is A"
        i += 1
    elif grade >= 80:
        print "Score:", grade, "; Your grade is B"
        i += 1
    elif grade >= 70:
        print "Score:", grade, "; Your grade is C"
        i += 1
    elif grade >= 60:
        print "Score:", grade, "; Your grade is D"
        i += 1
    else:
        continue
print "End of the program.  Bye!"
