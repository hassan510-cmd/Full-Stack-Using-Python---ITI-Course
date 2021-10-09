import psycopg2
from cme.protocols.smb.database import database


class connection:
    def __init__(self,user,dbname,host,passwd,port):
        self.user=user
        self.dbname=dbname
        self.host=host
        self.passwd=passwd
        self.port=port
        self.con=''


    def open_connection(self):
        print("start connection ....")
        self.con = psycopg2.connect(
        database=self.dbname,
        user=self.user,
        host=self.host,
        password=self.passwd,
        port=self.port
        )
        print('connected successfully!')
        return self.con

    def close_connection(self):
        self.con.close()
        print('connection is being closed')
        return 1

    def test_connection(self):
        exe = self.con.cursor()
        exe.execute(f'select * from accounts')
        result = exe.fetchall()
        for row in result:
            print(f'id:{row[0]} => name:{row[1]} => salary:{row[2]} ')
        self.con.commit()

    def insert(self,table_name,*args):
        exe = self.con.cursor()
        statement=f"insert into {table_name} values {str(args)}"
        exe.execute(statement)
        self.con.commit()
        print("inserted successfully!")

    def delete(self,table_name,criteria):
        exe = self.con.cursor()
        statement=f"delete  from {table_name} where  {criteria}"
        exe.execute(statement)
        self.con.commit()
        print("deleted successfully!")

    def update(self,table_name,new_values,criteria):
        exe = self.con.cursor()
        statement=f"update {table_name} set {new_values} where {criteria}"
        exe.execute(statement)
        self.con.commit()
        print("updated successfully!")

if __name__ == '__main__':
    con=connection('postgres','iti_python','localhost','691999',5432)
    con.open_connection()
    # con.test_connection()
    # con.insert('accounts','8',"ashrafh",7500)
    # con.update('accounts',"balance=1200,name='alicea'",'id=2')
    # con.delete('accounts','id=1')
    con.test_connection()
