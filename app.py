from flask import Flask, request, jsonify
from flask_cors import CORS
import json
app = Flask(__name__)  
CORS(app)
 
@app.route('/', methods=["POST", "GET"])  
def home():  
    print(request.json)

    rent = 1000
    return str(rent)  
  
if __name__ =="__main__": 
    print("App is running") 
    app.run(debug = True)  