def just_int(nums):
    for i in range(len(nums)):
        nums[i]=int(nums[i])
    return nums
li1=[1,2,3.3]
print(just_int(li1))

# -----------------------------------
def bubble_sort():
    numbers=[5, 1, 4, 2, 8 ]
    flag=1
    while flag:
        for i in range(len(numbers)-1):
            if numbers[i] >numbers[i+1]:
                current=numbers[i]
                numbers[i]=numbers[i+1]
                numbers[i+1]=current
            else:
                flag=0
        print(numbers)
bubble_sort()
# -----------------------------------
def check(x):
    res=map(lambda k :x.count(k)>1,x)
    print('False') if True in list(res)  else print('True')
x1=[1,1,1,2,5,3]
x2=[1,2,3,4]
check(x2)
# -----------------------------------
def cut(*strings):
    front,back="",""
    for x in strings:
        if len(x)&1:
            #even
            front+=x[:(len(x) // 2) + 1]
            back+=x[(len(x) // 2)+1:]
            print(f'odd=>\nfront={front}\nback={back}')
        else:
            front+=x[:-(-len(x)//2)]
            back+=x[(len(x)//2):]
            print(f'even=>\nfront={front}\nback={back}')
cut('abcd','abcd')

# -----------------------------------

def guess(trie=0):
    import random
    target=random.randint(0,100)
    print(target)
    user_inputs=[]
    while trie <10:
        user_answer=int(input('your guess ?'))
        if trie==9:
            print("sorry you have exceed all chances")
            again=input('do you want to play again or not\n[y]yes [n]no')
            guess(trie=0) if again=='y' else print("by") ;break
        if user_answer==target:
            print("congratulate!")
            return guess(trie=trie)
            break
        elif user_answer in user_inputs:
            print("you enter this before")
        elif user_answer>100:
            print("more than 100 not allowed")
            user_inputs.append(user_answer)
            trie += 1
        elif user_answer>target:
            print("you are close but it little than")
            trie += 1
            user_inputs.append(user_answer)
        elif user_answer<target:
            print("you are close but it bigger than")
            trie += 1
            user_inputs.append(user_answer)
        else :
            trie+=1
            print(f"think more you have {10-trie} trie")
            user_inputs.append(user_answer)
        if trie > 0 :
            print(f"think more you have {10 - trie} trie")
guess()

# -----------------------------------
