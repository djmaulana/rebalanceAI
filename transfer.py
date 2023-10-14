import sys
import numpy as np 
import pandas as pd
import requests
from io import StringIO

# READ DATASET FROM USER
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36'}
urlData = sys.argv[2]
s = requests.get(urlData, headers= headers).text
df = pd.read_csv(StringIO(s), sep=",", encoding='utf-8')


# CHECK TARGET FROM DATASET
def CheckTarget(df):
    status = False
    for col in df.columns:
        if (col.lower() == "target"):
            status = True
            
    if (status):
        return status
    else:
        return status

print(CheckTarget(df))
        
        

