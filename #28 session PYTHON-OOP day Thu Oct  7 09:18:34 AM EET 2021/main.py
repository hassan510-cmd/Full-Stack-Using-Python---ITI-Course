# 1
def get_ranked_words():
    from sys import argv
    file_name=argv[0]
    all_words=[]
    most_freq={}

    with open(f'{file_name}','r') as data:
        for line in data:
            all_words=[word.lower().replace(".","") for word in line.split()]

    for word in set(all_words):
        most_freq[word]=all_words.count(word)

    ranked_words=sorted(most_freq.items(),key=lambda x:x[1])
    output=open("popular_words.txt",'w')
    for i in x[(len(x)-1):(len(x)-21):-1]:
        output.write(f"{i}\n")
    output.close()
# ---------------------------------------------------
class Vehicle:
    pass
# ---------------------------------------------------

class Vehicle:
    def __init__(self,max_speed,mileage):
        self.max_speed=max_speed
        self.mileage=mileage
# ---------------------------------------------------

statement="hello my name is hassan"
reversed_statment=""
for i in statement.split():
    reversed_statment+=i[::-1]+" "
# ---------------------------------------------------


def calc_point_distance(x1,y1,x2,y2):
    import math
    distance= math.sqrt(math.pow(x2-x1,2)+math.pow(y2-y1,2))
    print(distance)
calc_point_distance(10,20,5,3)
# ---------------------------------------------------

class upper:
    str=""
    def get_string(self):
        self.str=input('enter your string')

    def print_string(self):
        print(self.str.title())

ob=upper()
ob.get_string()
ob.print_string()
# ---------------------------------------------------

class Circle():
    def __init__(self,radius):
        self.radius=radius

    def calc_area(self):
        area=3.14*(self.radius**2)
        print(f"your circle area = {area}")

    def calc_perimeter(self):
        perimeter=2*3.14*self.radius
        print(f"you circle perimeter = {perimeter}")

c1=Circle(10)
c1.calc_area()
c1.calc_perimeter()
# ---------------------------------------------------
