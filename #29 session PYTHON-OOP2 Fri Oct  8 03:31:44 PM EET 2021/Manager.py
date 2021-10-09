from Employee import employee
from dbconnection import connection
class manager(employee):
    def __init__(self,id,fname,lname,age,department,salary,managed_department):
        try:
            super(manager, self).__init__(id,fname, lname, age, department, salary)
        except Exception as ex:
            print(ex)
            print(f'employee with id {id} exist  skipped from adding in data base')
        self.managed_department=managed_department
        self.id=id
        print('manager added successfully!')
        con=connection('postgres','iti_python','localhost','691999',5432)
        con.open_connection()
        con.insert('managers',self.id,self.fname,self.lname,self.age,self.department,self.salary,self.managed_department)
        con.close_connection()