from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Route to handle business name generation
@app.route('/generate-names', methods=['POST'])
def generate_names():
    data = request.get_json()

    # Extract the business type and keywords
    business_type = data.get('businessType', '')
    keywords = data.get('keywords', '')

    # Simulate a call to Groq API (you can replace this with the actual API)
    # Here's where the API request would go, but for simplicity, we'll mock the response
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'  # Replace with your real key
    }
    
    # Mocking the response for now
    response = {
        "names": [
            f"{business_type} Innovations",
            f"{business_type} Solutions",
            f"{keywords} Global",
            f"{keywords} Enterprises",
            f"NextGen {business_type}"
        ]
    }
    
    # If actually calling Groq, it would look like:
    # response = requests.post('https://api.groq.com/v1/generate-names', json=payload, headers=headers)

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
