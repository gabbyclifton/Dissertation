from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/runCode', methods=['POST'])
def runCode():
    # Get form inputs
    #code = request.form.get('code')
    # Process the inputs and prepare data for the second page (popup)
    #code_to_run = {
    #    'code': code,
    #}
    code = request.form.get('code')
    code_to_run = {'code': code,}
    # Render the second page (popup) with the processed data
    return render_template('popup.html', data=code_to_run)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
    
