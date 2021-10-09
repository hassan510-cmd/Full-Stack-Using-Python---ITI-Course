class employee:
    all_emp=[]
    def __init__(self,fname,lname,age,department,salary):

        self.fname=fname
        self.lname=lname
        self.age=age
        self.department=department
        self.salary=salary
        self.all_emp.append(self)
        print("added to employees")

    @staticmethod
    def get_all_employees():
        for emn in employee.all_emp:
            print(f"name:{emn.fname} {emn.lname}\nage:{emn.age}"
                  f" \ndepartment:{emn.department}\nsalary:{emn.salary}")

    @classmethod
    def get_all_employees2():
        for emn in employee.all_emp:
            print(f"name:{emn.fname} {emn.lname}\nage:{emn.age}"
                  f" \ndepartment:{emn.department}\nsalary:{emn.salary}")

emb1=employee('hassan','mahmoud','22','python dev',10000)
# insert in db
# ------------------------------------

employee.all_emp
employee.get_all_employees()
emb1.get_all_employees
emb1.get_all_employees2
# ------------------------------------
emb1.department='python developer'
# update in db
# ------------------------------------
# emb1.department
employee.all_emp.remove(emb1)
# delete form db
# ------------------------------------
class manager(employee):
    def __init__(self,managed_department,fname,lname,age,department,salary):
        self.managed_department=managed_department
        employee.__init__(self,fname, lname, age, department, salary)

man1=manager('python','hassan','mahmoud','22','python dev',10000)
man1.lname
if __name__ == '__main__':
    operation = input('[add] for add new employee\n[remove] for remove employee\n[q] for exit')
    privillages=input('[m] manager\n[e] employee ?')
