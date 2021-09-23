# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('PyCharm')

# See PyCharm help at https://www.jetbrains.com/help/pycharm/

import re
test_case="here is my email hassanmahmoud607@gmail.alexu.edu.eg , can you catch it ?"
patern = r'[\w]*@[a-zA-Z]*(\.[a-z]*){1,}'
pat=r'(\.[a-z]*){1,}'
re.search(patern,test_case).group()
type(x)
re.findall(patern,test_case)


fname="hassan "
lname="mahmoud "
tname="32423"
fullname = fname+lname+tname
pattern2=r'[a-z]*\s[a-z]*\s[a-z]*'
"vaild" if re.fullmatch(pattern2,fullname) else "not valid"