from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'path/to/upload/folder'  # Update with your desired path
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/api/cars', methods=['POST'])
def add_car():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        
        # Get other car details from form data
        car_name = request.form['name']
        car_description = request.form['description']
        # Assuming you have a Car model defined
        # new_car = Car(name=car_name, description=car_description, image=filename)
        # db.session.add(new_car)
        # db.session.commit()

        return jsonify({'message': 'Car added successfully', 'filename': filename}), 201

if __name__ == '__main__':
    app.run(debug=True)
