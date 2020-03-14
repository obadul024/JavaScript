from collections import defaultdict
import json
#class_roll = [('v', 1), ('vi', 2), ('v', 3), ('vi', 4), ('vii', 1)]
with open('class.json') as json_file:
	data = json.load(json_file)
#print(data)

d = defaultdict(list)
for status, employees in data.items():
	#print(status, employees)
	for key in employees:
		print(key)


    
print(sorted(d.items()))
