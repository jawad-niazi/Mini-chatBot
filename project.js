




const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const chatbotResponses = {
    hello: 'Hello! How can I assist you?',
    hi: 'Hi there! What\'s on your mind?',
    hey: 'Hey! How\'s it going',
    'how are you': 'I\'m doing great, thanks for asking!',
    'what\'s your name': 'I\'m a mini chatbot!',
    'who are you': 'I\'m a mini chatbot designed to chat with you!',
    thanks: 'You\'re welcome!',
    thank: 'You\'re welcome!',
    'goodbye': 'Goodbye! It was nice chatting with you!',
    bye: 'Bye! Have a great day!',
    'what can you do?': 'I can chat with you, answer questions, and provide information!',
    'help': 'I\'m here to help! What do you need assistance with?',
    'what is your job': 'My job is to chat and help you!',
    'do you have feelings': 'Not really, but I understand emotions.',
    'what is ai': 'AI stands for Artificial Intelligence. It helps machines do smart things!',
    'are you smart': 'I try my best to be helpful and smart!',
    'can you learn': 'I don’t learn from chats here, but I was trained on lots of info!',
    'who made you': 'I was created by you!',
    'can we be friends': 'Of course! I’d be happy to be your chat buddy.',
    'what is your favorite food': 'I don’t eat, but I’ve heard pizza is popular!',
    'do you speak other languages': 'I can understand and reply in many languages!',
    'what day is it': 'You can check your device for today’s date!',
    'can you sing': 'I can type lyrics, but I can’t sing out loud!',
    'what is love': 'Love is a strong feeling of care and affection.',
    'do you play games': 'I don’t play games, but I can talk about them!',
    'how do i learn coding': 'Start small, try simple exercises, and practice every day!',
    'what is your favorite movie': 'I don’t watch movies, but I can recommend some!',
    'what is your favorite song': 'I don’t have ears, but I hear people love music!',
    'tell me something interesting': 'Did you know honey never spoils? It can last for thousands of years!',
    'what is the meaning of life': 'Many say it’s about happiness, love, and purpose!',
};


sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage) {
        displayUserMessage(userMessage);
        const response = getChatbotResponse(userMessage);
        displayChatbotResponse(response);
        userInput.value = '';
    }
});

function displayUserMessage(message) {
    const userMessageElement = document.createElement('div');
    userMessageElement.textContent = `You: ${message}`;
    chatLog.appendChild(userMessageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function displayChatbotResponse(response) {
    const chatbotResponseElement = document.createElement('div');
    chatbotResponseElement.textContent = `Bot: ${response}`;
    chatLog.appendChild(chatbotResponseElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getChatbotResponse(userMessage) {
    return chatbotResponses[userMessage] || 'Sorry, I didn\'t understand that!';
}

