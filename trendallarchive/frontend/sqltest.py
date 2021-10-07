import pyodbc
server = 'mysqlserver9879.database.windows.net'
database = 'trendalldb'
username = 'trenadmin'
password = 'Latrobe!' 
driver= '{ODBC Driver 17 for SQL Server}'

##code to test connectivity to database. run python sqltest.py
# https://docs.microsoft.com/en-us/azure/azure-sql/database/connect-query-python
with pyodbc.connect('DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password) as conn:
    with conn.cursor() as cursor:
        cursor.execute("SELECT * from Shape;")
        row = cursor.fetchone()
        while row:
            print (str(row[0]) + " " + str(row[1]))
            row = cursor.fetchone()