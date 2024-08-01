import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hello! I'm here to help you with personal development. How can I assist you today?" }
    ]);

    const messagesEndRef = useRef(null); // Reference to the end of messages

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const sendMessage = () => {
        if (input.trim() === '') return;

        // Add user message to chat
        setMessages((prevMessages) => [...prevMessages, { type: 'user', text: input }]);
        const userMessage = input;
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            setMessages((prevMessages) => [...prevMessages, { type: 'bot', text: botResponse }]);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission if inside a form
            sendMessage();
        }
    };

    const getBotResponse = (message) => {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes('goal') || lowerCaseMessage.includes('set goal')) {
            return 'Setting clear and achievable goals is crucial for personal development. Start by defining what you want to achieve and break it down into smaller, actionable steps.';
        } else if (lowerCaseMessage.includes('hey') || lowerCaseMessage.includes('hi')) {
            return 'Hello !';
        } else if (lowerCaseMessage.includes('how are you') || lowerCaseMessage.includes('are you ok')) {
            return 'I am doing well, thanks for asking. And yourself?';
        } else if (lowerCaseMessage.includes('how old are you')) {
            return 'I am always Young';
        } else if (lowerCaseMessage.includes('who are you')) {
            return 'I am a AI Chatbot specially made for Personal development';
        }else if (lowerCaseMessage.includes('hello')){
            return 'Hi ^^';
        }else if (lowerCaseMessage.includes('good morning')){
            return 'I hope your morning is joyful and blessed!';
        }else if (lowerCaseMessage.includes('thank you')){
            return 'Glad I could help';
        }else if (lowerCaseMessage.includes('bye')){
            return 'Take care, See you later!';
        }else if (lowerCaseMessage.includes('ok')){
            return 'Bye, Talk to you soon....';
        }
        else if (lowerCaseMessage.includes('motivation') || lowerCaseMessage.includes('stay motivated')) {
            return 'Staying motivated can be challenging. Try setting short-term goals, celebrating small achievements, and surrounding yourself with positive influences.';
        } else if (lowerCaseMessage.includes('time management')) {
            return 'Effective time management involves prioritizing tasks, setting deadlines, and using tools like planners or digital calendars to stay organized.';
        } else if (lowerCaseMessage.includes('overcome procrastination')) {
            return 'To overcome procrastination, break tasks into smaller steps, set specific deadlines, and eliminate distractions. Building a routine can also help.';
        } else if (lowerCaseMessage.includes('confidence')) {
            return 'Building confidence involves setting and achieving small goals, practicing positive self-talk, and stepping out of your comfort zone regularly.';
        } else if (lowerCaseMessage.includes('stress management')) {
            return 'Managing stress can be achieved through techniques like mindfulness, exercise, adequate rest, and seeking support from friends or professionals.';
        } else if (lowerCaseMessage.includes('career advice')) {
            return 'Career development involves setting clear career goals, networking, acquiring new skills, and seeking feedback for continuous improvement.';
        } else if (lowerCaseMessage.includes('balance life')) {
            return 'Maintaining a balance in life involves managing your time effectively between work, personal interests, and relationships. Prioritize self-care and set boundaries.';
        }
        else {
            return "I'm here to help with personal development. If you have any specific questions or topics you'd like to discuss, just let me know!";
        }
    };

    useEffect(() => {
        // Automatically scroll to the bottom of the messages container
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="card">
            <div id="header">
                <h1>Life Coach Chatbot</h1>
            </div>
            <div id="message-section">
                <div className="message-container">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.type}`}>
                            <span>{msg.text}</span>
                        </div>
                    ))}
                    <div ref={messagesEndRef} /> {/* Empty div to scroll to */}
                </div>
            </div>
            <div id="input-section">
                <input
                    id="input"
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress} // Handle Enter key press here
                    placeholder="Type a message"
                    autoComplete="off"
                    autoFocus
                />
                <button className="send" onClick={sendMessage}>
                    <div className="circle">✉️</div>
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
