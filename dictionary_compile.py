import json
from collections import defaultdict

graphDict = {}

with open("linksGr.json") as file:
	data = json.load(file)




'''
import pandas as pd

result = [{"source": source, "neighbors": df["target"].tolist()}
          for source, df in pd.DataFrame(data["links"]).groupby("source")]

print(result[10])
'''

'''
from itertools import groupby

collectDict = {k: [t["target"] for t in g] for k,g in groupby(data["links"], lambda obj: obj["source"])}

for key in collectDict:
	print(f"{key} -- {collectDict[key]}")


#print(collectDict["1"])

'''





collectDict = defaultdict(list)
for obj in data["links"]:
    collectDict[obj["source"]].append(obj["target"])

print(collectDict["0"])
'''
for key in collectDict:

	print(key, "++++++++",collectDict[key])
'''


'''


targets = [x["target"] for x in data["links"] if x["source"] == "0"]
print(targets)
collectDict = {}

for obj in data["links"]:
	collectDict[obj["source"]].append(obj["neighbour"])
	#collectDict[obj["source"]] = 
	print(collectDict)
	#collectDict["source"] = obj["source"]
	#collectDict["neighbour"] = obj["target"]
	#if(collectDict[] )

	#print(collectDict)

'''