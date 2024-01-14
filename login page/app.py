from flask import Flask, render_template, request, redirect, url_for
import hashlib

app = Flask(__name__)

# In a real application, use a database to store user information securely.
# This example uses a simple dictionary for demonstration purposes.
users = {
    "user1": {
        "username": "user1",
        "password": hashlib.sha256("password1".encode()).hexdigest()  # Hashed password
    },
    "user2": {
        "username": "user2",
        "password": hashlib.sha256("password2".encode()).hexdigest()  # Hashed password
    }
}

@app.route('/')
def login_page():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    if username in users and hashlib.sha256(password.encode()).hexdigest() == users[username]["password"]:
        # Authentication successful
        return "Login Successful!"
    else:
        # Authentication failed
        return "Login Failed. Please check your username and password."

if __name__ == '__main__':
    app.run(debug=True)
