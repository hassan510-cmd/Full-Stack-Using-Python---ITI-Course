from dbconnection import connection

class employee:
    all_emp=[]

    def __init__(self,id,fname,lname,age,department,salary):
        self.id = id
        self.fname=fname
        self.lname=lname
        self.age=age
        self.department=department
        self.salary=salary
        self.all_emp.append(self)
        print('employee added in list successfully!')
        con=connection('postgres','iti_python','localhost','691999',5432)
        con.open_connection()
        con.insert('employees',self.id,self.fname,self.lname,self.age,self.department,self.salary)
        con.close_connection()

    @staticmethod
    def update_department(id,table_name,new_department):
        for emp in employee.all_emp:
            if emp.id == id:
                emp.department=new_department
            else:
                continue
        con=connection('postgres','iti_python','localhost','691999',5432)
        con.open_connection()
        con.update(table_name,f"department='{new_department}'",f'id={id}')
        con.close_connection()

    @staticmethod
    def remove(table_name,id):

        for emp in employee.all_emp:
            if emp.id==id:
                employee.all_emp.remove(emp)
            else:
                continue
        con=connection('postgres','iti_python','localhost','691999',5432)
        con.open_connection()
        con.delete(table_name,f'id={id}')
        con.close_connection()

    @staticmethod
    def get_all_employees():
        for emn in employee.all_emp:
            print(f"name:{emn.fname} {emn.lname}\nage:{emn.age}"
                  f" \ndepartment:{emn.department}\nsalary:{emn.salary}")


if __name__ == '__main__':
    emb1 = employee('hassan', 'mahmoud', '22', 'python dev', 10000)