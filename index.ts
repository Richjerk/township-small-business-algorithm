// Import stylesheets
import './index.css';

// Define a container for the chatbot
const appContainer = document.getElementById('app');

// Function to handle user input and chatbot responses
function handleUserInput(inputText: string) {
  // You can send the user's input to your backend server and get responses from OpenAI here
  // For simplicity, let's assume you have a mock response for now
  const mockResponse = "This is a mock response from the chatbot.";

  // Display the chatbot response
  displayMessage(mockResponse, 'bot');
}

// Function to display messages in the chat
function displayMessage(message: string, sender: string) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  messageElement.textContent = message;
  appContainer?.appendChild(messageElement);
}

// Function to handle user input submission
function handleUserInputSubmit() {
  const userInputElement = document.getElementById('user-input') as HTMLInputElement;
  const userInput = userInputElement.value.trim();

  if (userInput !== '') {
    // Display the user's message
    displayMessage(userInput, 'user');

    // Handle user input and get chatbot response
    handleUserInput(userInput);

    // Clear the input field
    userInputElement.value = '';
  }
}

// Event listener for user input submission (e.g., pressing Enter)
const userInputElement = document.createElement('input');
userInputElement.setAttribute('type', 'text');
userInputElement.setAttribute('placeholder', 'Type your message...');
userInputElement.setAttribute('id', 'user-input');
userInputElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleUserInputSubmit();
  }
});

// Create a submit button
const submitButton = document.createElement('button');
submitButton.textContent = 'Send';
submitButton.addEventListener('click', handleUserInputSubmit);

// Add input field and submit button to the app container
appContainer?.appendChild(userInputElement);
appContainer?.appendChild(submitButton);
