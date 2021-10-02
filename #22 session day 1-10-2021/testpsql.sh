# echo "hasasa"
# id=5
# product="chery"
# quan=5
# unit="g"
# psql -d iti_python -c  "
# insert into invoice_file values (${id},'ahmed',1200,'2021-5-7');
# "
# psql -d iti_python -c  "
# select * from invoice_file;
# "
# psql -d iti_python -c  "
# insert into invoice_details (inv_id , product ,quantitiy , unit) values (${id} , '${product}' ,${quan} , '${unit}');
# "
# psql -d iti_python -c  "
# select * from invoice_details;
# "

# echo "hasasa"

# x=$(psql -d iti_python -t -c  "
# select count(*) from invoice_details;
# ")
# echo ${x}
