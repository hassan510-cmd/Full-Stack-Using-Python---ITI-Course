class A:
    def __init__(self,x):
        self.__x=x

    # old way in get
    def get_x(self):
        return self.__x
    # old way in set
    def set_x(self,x):
        self.__x=x
    # new way
    # call property decorator with function's name same as attribute name
    @property
    def x(self):
        pass

    # call @.attribute_name.getter
    @x.getter
    def x(self):
        return  self.__x

    # call @.attribute_name.setter
    @x.setter
    def x(self,x):
        self.__x=x




ob1=A(100)
ob1.get_x()
ob1.set_x(20)
ob1.x
ob1.x=200

def upe(str):
    return str().title()
@upe
def he():
    return "hello world"

print(he)