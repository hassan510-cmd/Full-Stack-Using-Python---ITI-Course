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
test_case="here is my email hassanmahmoud607@gmail.alexu.edu.eg   hassanmahmoud607@gmail.com can you catch it ?"
measure="hre | 5.2 | 1.2 hsex | 5.2 | 1.2"
input_search = "he 5.3"


measure_list=["hre | 5.2 | 1.2","hrsex | 5.2 | 1.2","cds | 5.3 | 1.2"]
r = re.compile(".*5.3.*")
newlist = list(filter(r.match, measure_list))
print(newlist)

input_list=input_search.split()
for x in measure_list:
    for y in input_list :
        if y in x :
            print(f"{x} exist")
            break

measure_pattern=fr"[A-z]*{input_search}[A-z]*\s*\|*\s*\d*\.*\d*"
re.findall(measure_pattern,measure)

re.match(measure_pattern,measure).group()
patern = r'[\w]*@[a-zA-Z]*(\.[a-z]*){1,}'
pat=r'(\.[a-z]*){1,}'
re.match(patern,test_case).group()
type(x)
re.findall(patern,test_case)


fname="hassan "
lname="mahmoud "
tname="32423"
fullname = fname+lname+tname
pattern2=r'[a-z]*\s[a-z]*\s[a-z]*'
"vaild" if re.fullmatch(pattern2,fullname) else "not valid"