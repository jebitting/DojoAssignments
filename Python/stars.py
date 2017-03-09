# Draw Stars

x = [4,6,1,3,5,7,25]
y = [4,"Tom",1,"Michael",5,7,"Jimmy Smith"]

def draw_stars(item):
    for i in range(0, len(item)):
        group = ""
        if type(item[i]) != str:
            for j in range(0, item[i]):
                group += "*"
        else:
            for j in range(0, len(item[i])):
                group += item[i][0].lower()
            j+=1
        i+=1
        print group

show = draw_stars(y)
