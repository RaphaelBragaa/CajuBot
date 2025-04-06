import { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

export interface ChatBotProps {
  apiEndpoint?: string;
  apiKey?: string;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    fontColor: string;
    botName?: string;
    botAvatar?: string;
    userAvatar?: string;
  };
  initialMessage?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  onSendMessage?: (message: string) => Promise<any>;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const defaultTheme = {
  primaryColor: '#FF9500',  // Orange from the image
  secondaryColor: '#F1F1F1', // Light gray for user messages
  fontColor: '#FFFFFF',
  botName: 'ChatBot',
  botAvatar: '',
  userAvatar: '',
};

export const ChatBot: React.FC<ChatBotProps> = ({
  apiEndpoint,
  apiKey,
  theme = defaultTheme,
  initialMessage = 'Olá, como posso ajudar?',
  position = 'bottom-right',
  onSendMessage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessage) {
      setMessages([
        {
          id: '1',
          text: initialMessage,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
  }, [initialMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      let response;

      if (onSendMessage) {
        // Use the custom handler if provided
        response = await onSendMessage(inputValue);
      } else if (apiEndpoint) {
        // Default API integration
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        };

        if (apiKey) {
          headers['Authorization'] = `Bearer ${apiKey}`;
        }

        const res = await fetch(apiEndpoint, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            message: inputValue,
            conversationHistory: messages,
          }),
        });

        response = await res.json();
      } else {
        // Fallback response if no API or handler is provided
        response = {
          message: "Desculpe, não estou conectado a nenhuma API no momento."
        };
      }

      setTimeout(() => {
        const botResponse: Message = {
          id: Date.now().toString(),
          text: response.message || "Desculpe, houve um erro ao processar sua mensagem.",
          sender: 'bot',
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000); // Simulate typing delay

    } catch (error) {
      console.error('Error sending message:', error);

      setTimeout(() => {
        const errorMessage: Message = {
          id: Date.now().toString(),
          text: "Desculpe, houve um erro ao processar sua mensagem.",
          sender: 'bot',
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const positionClass = `chatbot-widget-${position}`;

  return (
    <div className={`chatbot-widget ${positionClass}`} style={{ '--primary-color': theme.primaryColor } as React.CSSProperties}>
      {!isOpen ? (
        <button
          className="chatbot-toggle-button"
          onClick={toggleChat}
          aria-label="Open chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      ) : (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>{theme.botName}</h3>
            <button
              className="chatbot-close-button"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'bot' ? 'bot-message' : 'user-message'}`}
              >
                {message.sender === 'bot' && theme.botAvatar && (
                  <div className="avatar">
                    <img src={theme.botAvatar} alt="Bot" />
                  </div>
                )}
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="timestamp">{formatTimestamp(message.timestamp)}</span>
                </div>
                {message.sender === 'user' && theme.userAvatar && (
                  <div className="avatar">
                    <img src={theme.userAvatar} alt="User" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="message bot-message">
                {theme.botAvatar && (
                  <div className="avatar">
                    <img src={theme.botAvatar} alt="Bot" />
                  </div>
                )}
                <div className="message-content typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button
              className="send-button"
              onClick={sendMessage}
              aria-label="Send message"
              disabled={!inputValue.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
