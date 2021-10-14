while read line
do
num1=$(echo${line}|cut -f 1 -d" ")
num2=$(echo${line}|cut -f 2 -d" ")
result=$(echo${line}|cut -f 3 -d" ")
sc_result$(./sum.sh ${num1} ${num2})
if [ ! ${sc_result} -eq ${result} ]
	echo "case passed"
else
	exit(101)
done << dataset
