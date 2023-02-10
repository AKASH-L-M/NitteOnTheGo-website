from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/test')
def test():
    return 'Test'

@app.route('/result')
def result():
    dict = {'phy':50,'che':60,'maths':70}
    return render_template('index.html', result=dict)

if __name__ == "__main__":
    #logging.getLogger().setLevel("DEBUG")
    app.run(host = '0.0.0.0',port='5000', debug=True)