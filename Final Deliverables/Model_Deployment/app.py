import pickle

from flask import Flask, render_template, request

import Static.utils
from Static.utils import Home
from Static.utils.Geoloc import geolo

# Loading rainfall prediction model

rainfall_model = pickle.load(open('rainfall.pkl','rb'))

app=Flask(__name__)

@app.route("/")
def login():
    return render_template("Login.html",wrong="")

@app.route("/signin")
def signin():
    return render_template("Signup.html")

@app.route("/rainfall")
def rainfall():
    return render_template("Rainfall.html",rainfall="")


@app.route('/login', methods=['POST','GET'])        
def welcome():
    email=""
    password=""
    if request.method=='POST':
        email=str(request.form['email'])
        password=str(request.form['password'])
    if(Static.utils.Home.logins(email, password)):
        return render_template("Welcome.html")
    else:
        return render_template("login.html",wrong=['Invalid Creditails','wr'])

@app.route('/signins', methods=['POST','GET'])        
def signins():
    email=""
    password=""
    name=""
    mobile=""
    if request.method=='POST':
        name=str(request.form['name'])
        email=str(request.form['email'])
        mobile=str(request.form['mobile'])
        password=str(request.form['password'])
        print(name,email,mobile,password)
    Static.utils.Home.signups(email, password, name, mobile)
    return render_template("login.html",wrong="")

@app.route('/home', methods=['POST','GET'])
def home():
    city=""
    if request.method=='POST':
        lat=float(request.form['lat'])
        lon=float(request.form['lon'])
        city=geolo(lat,lon)
        print(city)
    return render_template("Home.html",city=city)

@app.route('/rainfall_predict',methods=['POST','GET'])
def rainfall_prediction(data=None):
    if request.method=='POST':
        mintemp=float(request.form['mintemp'])
        meantemp=float(request.form['meantemp'])
        maxtemp=float(request.form['maxtemp'])
        pressure=float(request.form['pressure'])
        preceptions=float(request.form['preceptions'])
        windspeed=float(request.form['windspeed'])

        final_prediction=Static.utils.RainCloud.call_cloud("TAMIL NADU", 2022, 11, mintemp, meantemp, maxtemp, preceptions, pressure, windspeed)
        #ws=["static/image/"+final_prediction+".jpg",final_prediction,'myfunc()']
        return render_template('Rainfall.html',rainfall=[final_prediction,"pre()"])
    else:
            return render_template('Rainfall.html',error="Can't predicted Some Error. Try Again")

if __name__ == '__main__':
   app.run(debug = True)
