# Assignment: Names

# Part I:  Create a program that outputs clean Names
print ">>> Part One <<<"
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

for item in students:
    print item['first_name'] + " " + item['last_name']
print ""
print ">>> Part Two <<<"
# Names Pt II
#  Create a program that prints number of characters in each combined
# # - FIRST LAST - #

users = {
    'Students': [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ],
    'Instructors': [
    {'first_name' : 'Michael', 'last_name' : 'Choi'},
    {'first_name' : 'Martin', 'last_name' : 'Puryear'}
    ]
    }

for item, group in users.iteritems():
    print item
    index = 0

    for person in group:
        index += 1
        print str(index) + ' - ' + person['first_name'].upper() + ' ' + person['last_name'].upper() + ' - ' + str(len(person['first_name']) + len(person['last_name']))
