

# Passo a Passo para Executar a API

## **1. Instalar Dependências**

Certifique-se de que o Python está instalado no seu sistema. Depois, instale as bibliotecas necessárias executando o seguinte comando:

```bash
pip install flask whisper ffmpeg-python requests python-dotenv
```

---

## **2. Configurar o Arquivo `.env`**

Crie um arquivo chamado `.env` na raiz do projeto e insira as variáveis de ambiente necessárias:

```env
ELEVENLABS_API_KEY=sua_chave_da_api
N8N_WEBHOOK_URL=https://seu-webhook-n8n.com
FLASK_ENV=development
```


### **Descrição das Variáveis**

- `ELEVENLABS_API_KEY`: Chave da API do ElevenLabs para conversão de texto para áudio.
- `N8N_WEBHOOK_URL`: URL do webhook configurado no n8n para integração com WhatsApp.

---

## **3. Criar Diretórios Necessários**

Certifique-se de que os diretórios para uploads e outputs estão criados. Caso contrário, eles serão criados automaticamente pelo código:

- Diretório para arquivos enviados: `uploads`
- Diretório para arquivos gerados: `outputs`

---

## **4. Executar o Servidor Flask**

Execute o arquivo principal da API (`app.py`) usando o Python:

```bash
python app.py
```

Se tudo estiver configurado corretamente, você verá uma mensagem indicando que o servidor está rodando:

```
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

---

## **5. Testar os Endpoints**

Você pode testar os endpoints utilizando ferramentas como Postman, cURL ou diretamente via integração com n8n e WhatsApp.

### **Endpoints Disponíveis**

#### **1. Transcrição de Áudio para Texto**

- **URL**: `http://127.0.0.1:5000/transcribe`
- **Método**: `POST`
- **Parâmetros**:
    - Envie um arquivo de áudio no campo `audio` do formulário.
- **Exemplo cURL**:

```bash
curl -X POST -F "audio=@seu_arquivo_audio.mp3" http://127.0.0.1:5000/transcribe
```


#### **2. Conversão de Texto para Áudio**

- **URL**: `http://127.0.0.1:5000/text-to-speech`
- **Método**: `POST`
- **Parâmetros**:
    - Envie um JSON com o campo `text` contendo o texto a ser convertido.
- **Exemplo cURL**:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"text": "Olá mundo"}' http://127.0.0.1:5000/text-to-speech
```


#### **3. Integração com n8n e WhatsApp**

- **URL**: `http://127.0.0.1:5000/webhook`
- **Método**: `POST`
- **Parâmetros**:
    - Envie um JSON com o campo `message` contendo a mensagem recebida do WhatsApp.
- **Exemplo cURL**:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"message": "Olá"}' http://127.0.0.1:5000/webhook
```


---

## **6. Configurar Integração com n8n**

Configure um webhook no n8n apontando para os endpoints da API (`/webhook`) e integre-o ao WhatsApp para enviar e receber mensagens automaticamente.

---
