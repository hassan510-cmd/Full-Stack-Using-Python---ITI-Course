# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

eval('2+5')
def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('PyCharm')

# See PyCharm help at https://www.jetbrains.com/help/pycharm/


fname= input('enter first name')
lname=input('enter lname')
print(f'{lname} {fname}')
# ------------------------------------------------
num=input('enter tne number')
print(int(num)+int(num+num)+int(num+num+num))
# -------------------------------------------
print("""
Sample string:
a string that you "don't" have to escape
This
is a ....... multi-line
heredoc string --------> example
""")
# -----------------------------------------
volume = (4/3)*3.14*(6**2)
# -----------------------------------------
base=float(input('enter base'))
height=float(input('enter height'))
area = 0.5*base*height
print(f'triangle area = {area}')

# ------------------------------------------
for i in range(1,7):
    if i > 5:
        for k in range(4,0,-1):
            print(k*"*")
        break
    print(i*"*")
# ------------------------------------
word=input('enter the word')
print(word[::-1])
# -----------------------------------
for i in range(0,7):
    if  i%3:
        print(i)
# -----------------------------------
Fibonacci=10
n1=0
n2=1
for i in range(Fibonacci):
    print(n1)
    next = n1 + n2
    n1 = n2
    n2 = next
# -------------------------------------------------------
statment="hello in this statement 29 letter and 40  4 number  "
count_nums=0
count_letter=0
for i in statment:
    if i.isalpha():
        count_letter+=1
    elif i.isnumeric():
        count_nums+=1
print(f"total letters {count_letter} and total nums {count_nums}")
# -----------------------------------------------------------------
