print "Hello World!"
x = "Hello Python!"
print x
y = 42
print y


# commenting a single line
# we can even comment out code
# print "this will not print!"

print "read below for more on multi-line comments in python!" #this would execute
# This line and below would not execute

'''
Triple quotations allow us to comment across multiple lines as long as
the triple quoted comment is not the first thing in your file.
You can use double or single quotes!
'''

# define a function that says hello to the name provided
# this starts a new block
def say_hello(name):
  #these lines are indented therefore part of the function
  if name:
   print 'Hello, ' + name + 'from inside the function'
  else:
   print 'No name'
# now we're unindented and have ended the previous block
print 'Outside of the function'
