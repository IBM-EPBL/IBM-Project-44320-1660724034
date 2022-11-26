from sys import flags
import pandas as pd

def logins(email,password):
    df = pd.read_csv("Static/utils/db.csv")
    print(email,password)
    flag=False
    for i in range(0,len(df)):
        print(len(df))
        if(df["email"][i]==email and str(df["password"][i])==password):
            return True
        else:
            flag=True
    if(flag):
        return False
def signups(email,password,name,mobile):
    dd=pd.DataFrame({"name":[name],"email":[email],"mobile":[mobile],"password":[password],})
    df=pd.read_csv("Static/utils/db.csv")
    df=df.append(dd)
    print(df)
    df.to_csv("Static/utils/db.csv",index=False)
