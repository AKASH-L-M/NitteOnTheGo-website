from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/mangaluru')
def route_mang():
    return render_template('mangaluru.html')

@app.route('/test')
def test():
    return 'Test'

@app.route('/result')
def result():
    dict = {'phy':50,'che':60,'maths':70}
    return render_template('index.html', result=dict)
