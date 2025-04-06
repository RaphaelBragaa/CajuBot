from flask import Flask, request, jsonify
import os
import whisper
import ffmpeg
import requests
from dotenv import load_dotenv

# Carregar variáveis de ambiente do arquivo .env
load_dotenv()

# Configurações iniciais
app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
OUTPUT_FOLDER = 'outputs'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# Carregando o modelo Whisper
whisper_model = whisper.load_model("base")

# Variáveis de ambiente
ELEVENLABS_API_KEY = os.getenv('ELEVENLABS_API_KEY')
N8N_WEBHOOK_URL = os.getenv('N8N_WEBHOOK_URL')

if not ELEVENLABS_API_KEY:
    raise ValueError("A chave da API ElevenLabs (ELEVENLABS_API_KEY) não foi configurada no arquivo .env.")

# Rota para transcrição de áudio para texto
@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    if 'audio' not in request.files:
        return jsonify({"error": "Arquivo de áudio não encontrado"}), 400
    
    audio_file = request.files['audio']
    audio_path = os.path.join(UPLOAD_FOLDER, audio_file.filename)
    audio_file.save(audio_path)

    # Transcrição usando Whisper
    try:
        result = whisper_model.transcribe(audio_path)
        return jsonify({"text": result['text']})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Rota para conversão de texto para áudio
@app.route('/text-to-speech', methods=['POST'])
def text_to_speech():
    data = request.get_json()
    text = data.get('text', '')
    
    if not text:
        return jsonify({"error": "Texto não fornecido"}), 400

    # Integração com ElevenLabs API
    try:
        elevenlabs_api_url = f"https://api.elevenlabs.io/v1/text-to-speech"
        headers = {
            "Authorization": f"Bearer {ELEVENLABS_API_KEY}",
            "Content-Type": "application/json"
        }
        response = requests.post(elevenlabs_api_url, json={"text": text}, headers=headers)
        
        if response.status_code == 200:
            audio_output_path = os.path.join(OUTPUT_FOLDER, 'output.mp3')
            with open(audio_output_path, 'wb') as f:
                f.write(response.content)
            return jsonify({"message": "Áudio gerado com sucesso", "file_path": audio_output_path})
        else:
            return jsonify({"error": response.json()}), response.status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Integração com n8n e WhatsApp
@app.route('/webhook', methods=['POST'])
def webhook_handler():
    data = request.get_json()
    
    # Processar mensagens recebidas do WhatsApp via n8n
    incoming_message = data.get('message', '')
    
    if incoming_message:
        response_message = f"Você disse: {incoming_message}"
        
        # Enviar resposta ao WhatsApp via n8n (exemplo fictício)
        if N8N_WEBHOOK_URL:
            requests.post(N8N_WEBHOOK_URL, json={"response": response_message})
        
        return jsonify({"message": "Resposta enviada"}), 200
    
    return jsonify({"error": "Nenhuma mensagem processada"}), 400

if __name__ == '__main__':
    app.run(debug=True)

