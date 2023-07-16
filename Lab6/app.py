from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/') 
def base():
    return render_template('base.html')

@app.route('/index') 
def index():
    return render_template('index.html')

@app.route('/report')
def report():
    #First gets arg for password and turns it into a string element to manipulate 
    password= request.args.get('password')
    user_put=str(password)
    low=False
    up=False
    num=False
    #Here it checks each element of the string to see if it passes
    #For isdigit we added an else statement since it could be true throughout the password but we want to check the last element 
    #And since the last element is what matters if it is False then it will give out the error that it does not end in a num char
    for i in user_put:
        if i.isupper():
            up=True
        if i.islower():
            low=True
        if i.isdigit():
            num=True
        else:
            num=False
    # Used for lambda function
    #https://www.w3schools.com/python/python_lambda.asp
    #https://www.geeksforgeeks.org/how-to-use-if-else-elif-in-python-lambda-functions/
    test=lambda x:"hide" if x else "show"
    return render_template("report.html",
                           password=test(low), 
                           password2=test(up), 
                           password3=test(num),
                           password4=test(len(user_put)>=8), 
                           password0=test(not (low and up and num and len(user_put)>=8))
                           )
if __name__=='__main__':
    app.run(debug=True)
  
   





    