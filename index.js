// Import necessary modules and styles
import './style.css';

// Get references to HTML elements
const appDiv: HTMLElement | null = document.getElementById('app');

// Check if the appDiv exists before manipulating the DOM
if (appDiv) {
  // Create a header element
  const header: HTMLHeadingElement = document.createElement('h1');
  header.textContent = 'Township Small Business Chatbot';

  // Create a chat interface element (you can replace this with your actual chat interface)
  const chatInterface: HTMLElement = document.createElement('div');
  chatInterface.classList.add('chat-interface');
  chatInterface.textContent = 'Chat goes here...';

  // Append the header and chat interface to the appDiv
  appDiv.appendChild(header);
  appDiv.appendChild(chatInterface);
}
