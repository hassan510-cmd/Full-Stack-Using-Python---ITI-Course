#!/usr/bin/bash
### --------------------
### Validatin required:
##	1-Read permission (done)
##  2-write permission (done)
##	3-Exits (done)
##	4-Pass the parameter
##	5-id is unique (done)
##  6-id is integer (done)
##  7-id >=1 (done)
##	8-Name has no digits (done)
##  9-total is integer (done)
##  10-quantity is integer or float(done)

### --------------------
### error codes:
##	1 => Read permission 
##  2 => write permission 
##	3 => Exits 
##	4 => Pass the parameter
##	5 => id is unique 
##  6 => id is integer 
##  7 => id >=1 
##	8 => Name has no digits 
##  9 => total is integer 
##  10 => quantity is integer or float

#--------permission validation-----------------

# last_id=$(psql -d iti_python -t -c  "
# select count(*) from invoice_details;
# ")
# echo ${last_id}

inv_file="invoice_file.txt"

if [ ! -r ${inv_file} ]
then
    echo "Not readable"
    exit 1
fi

if [ ! -w ${inv_file} ]
then
	echo "Not writtable"
	exit 2
fi
# ////////////////////////// invoice file /////////////////////
IFS=":"
all_fine=1
lines=0
while  read -r f1 f2 f3 f4
do
    id=${f1}
    name=${f2}
    total=${f3}
    inv_date=${f4}

#--------id validation-----------------

    count=$(echo ${id} |  egrep -c -v "[^0-9]+")
    if [ ${count} -ne 1 ]
    then
        all_fine=0
        echo "id invalid"
        exit 6
    fi
    
    if [ ${id} -le 0 ]
    then
        echo "Invalid ID value, must be greater than 0"
        all_fine=0
        exit 7

    fi

    RES=$(cut -d ":" -f 1 invoice_file.txt|grep ${id} | uniq -c )
    freq=${RES[0]:6:1}
    if [ "${freq}" -gt 1 ]
    then
        echo "ERROR: ID is not unique"
        all_fine=0
        exit 5
    fi
#--------name validation-----------------

    COUNT=$(echo ${name} |  egrep -c -v "[^a-zA-Z]+")
    if [ ${COUNT} -ne 1 ]
    then
        echo "name is not a valid "
        all_fine=0
        exit 8
    fi

# #--------id validation-----------------

    count=$(echo ${total} |  egrep -c -v "[^0-9]+")
    if [ ${count} -ne 1 ]
    then
        echo "total price invalid"
        all_fine=0
        exit 9
    fi

# # -----------------------------------------------
    if [ ! ${all_fine} -eq 1 ]   
    then
        echo "failed to insert"
    else
        # insert into database
        psql -d iti_python -c  "
        insert into invoice_file values (${id},'${name}',${total},'${inv_date}');
        "
        lines=$[lines+1];
        echo "row ${lines} => successful inserted!"
    fi
done < "invoice_file.txt"
echo "finish invoice_file"
echo "*****************************************"

psql -d iti_python -c  "
select * from invoice_file;
# "
echo "*****************************************"

# ////////////////////////////////////////////////////////////////////////////

# ////////////////////////// invoice details /////////////////////

while read -r f1 f2 f3 f4 f5
do
    inv_id=${f2}
    product=${f3}
    quantitiy=${f4}
    unit=${f5}
#  --------id validation-----------------
    count=$(echo ${inv_id} |  egrep -c -v "[^0-9]+")
    if [ ${count} -ne 1 ]
    then
        all_fine=0
        echo "id invalid"
        exit 6
    fi
    
    if [ "${inv_id}" -le 0 ]
    then
        echo "Invalid ID value, must be greater than 0"
        all_fine=0
        exit 7

    fi
#  --------quantitiy validation-----------------
    count=$(echo ${quantitiy} |  egrep -c -v "[^0-9]+.[^0-9]")
    if [ ${count} -ne 1 ]
    then
        echo "invalid "
        all_fine=0
        exit 10
    fi
# # -----------------------------------------------
    if [ ! ${all_fine} -eq 1 ]   
    then
        echo "failed to insert"
    else
        # insert into database
        psql -d iti_python -c  "
        insert into invoice_details (inv_id , product ,quantitiy , unit) values (${inv_id} , '${product}' ,${quantitiy} , '${unit}');
        "
        lines=$[lines+1];
        echo "row ${lines} => successful inserted!"
    fi
    # echo ${quantitiy}
done < "invoice_details.txt"
echo "finish invoice_details"
echo "*****************************************"

psql -d iti_python -c  "
select * from invoice_details;
"
echo "*****************************************"


