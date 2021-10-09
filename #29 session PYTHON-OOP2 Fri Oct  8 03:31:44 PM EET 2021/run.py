from Employee import employee
from Manager import manager


if __name__ == '__main__':
    again=1
    while again:
        operation = input('[add] for add new employee\n[remove] for remove employee\n[update] for update\n[show] for display all\n[q] for exit')
        if operation=='q':
            print('bye')
        else:
            privillages = input('[m] manager\n[e] employee ?')
            if operation=='add':
                if privillages=='m':
                    id=int(input('id>>'))
                    fname=input('fname>>')
                    lname=input("lname>>")
                    age=int(input("age>>"))
                    depart=input("department>>")
                    salary=int(input("salary>>"))
                    md=input("managed department>>")
                    mang1 = manager(id, fname, lname, age, depart, salary, md)
                elif privillages=='e':
                    id=int(input('id>>'))
                    fname=input('fname>>')
                    lname=input("lname>>")
                    age=int(input("age>>"))
                    depart=input("department>>")
                    salary=int(input("salary>>"))
                    emb1 = employee(id, fname, lname, age, depart, salary)
            elif operation=='remove':
                if privillages=='m':
                    id=int(input('enter manager id :'))
                    manager.remove('managers',id)
                elif privillages=='e':
                    id=int(input('enter employee id :'))
                    employee.remove('employees',id)
            elif operation=='update':
                if privillages == 'm':
                    id = int(input('enter manager id :'))
                    new_department=(input('enter new department :'))
                    manager.update_department(id,'managers', new_department)
                elif privillages == 'e':
                    id = int(input('enter employee id :'))
                    new_department = (input('enter new department :'))
                    employee.update_department(id,'employees',new_department)
            elif operation=='show':
                if privillages == 'm':
                    manager.show()
                elif privillages == 'e':
                    employee.get_all_employees()
        print("*"*50)
        again=int(input('[0] for exit\n[1] another process'))
