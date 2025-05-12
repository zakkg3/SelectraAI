/**
 * SmartHire - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Chatbot functionality
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbot = document.getElementById('chatbot');
    const closeChatbot = document.getElementById('close-chatbot');
    const chatInput = document.getElementById('chat-input');
    const sendMessage = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');
    
    let chatbotActive = false;
    
    if (chatbotToggle && chatbot && closeChatbot) {
        chatbotToggle.addEventListener('click', () => {
            chatbotActive = !chatbotActive;
            if (chatbotActive) {
                chatbot.classList.remove('hidden');
                chatbot.classList.add('active');
            } else {
                chatbot.classList.remove('active');
                setTimeout(() => {
                    chatbot.classList.add('hidden');
                }, 300);
            }
        });
        
        closeChatbot.addEventListener('click', () => {
            chatbotActive = false;
            chatbot.classList.remove('active');
            setTimeout(() => {
                chatbot.classList.add('hidden');
            }, 300);
        });
    }
    
    // Chat message handling
    if (chatInput && sendMessage && chatMessages) {
        function addMessage(message, isUser) {
            const messageDiv = document.createElement('div');
            messageDiv.className = isUser ? 'user-message chat-message' : 'bot-message chat-message';
            messageDiv.innerHTML = `<p>${message}</p>`;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        function handleUserMessage() {
            const message = chatInput.value.trim();
            if (message) {
                addMessage(message, true);
                chatInput.value = '';
                
                // Simulate bot response
                setTimeout(() => {
                    let response;
                    
                    if (message.toLowerCase().includes('hi') || message.toLowerCase().includes('hello')) {
                        response = "Hello! How can I assist you with your hiring needs today?";
                    } else if (message.toLowerCase().includes('pricing') || message.toLowerCase().includes('price')) {
                        response = "We offer three pricing tiers:<br><br>1. <b>AI Only</b> ($99/search) - Fast, automated candidate filtering<br>2. <b>AI + Human</b> ($299/search) - Our most popular balanced approach<br>3. <b>Full Service</b> ($999/search) - Dedicated recruiter support<br><br>Would you like more details about any specific tier?";
                    } else if (message.toLowerCase().includes('work') || message.toLowerCase().includes('process')) {
                        response = "Our process has 4 simple steps:<br><br>1. You describe the role you're hiring for<br>2. Our AI filters thousands of profiles to find matches<br>3. Optional human experts review the shortlist<br>4. You interview and hire the best candidates<br><br>Would you like me to explain any step in more detail?";
                    } else if (message.toLowerCase().includes('contact') || message.toLowerCase().includes('demo')) {
                        response = "You can contact us at hello@smarthire.ai or call (555) 123-4567. Would you like me to connect you with our team or schedule a demo?";
                    } else {
                        response = "I'm happy to help with that! For more detailed information, you might want to check our <a href='#how-it-works' class='text-blue-500 underline'>How It Works</a> section or <a href='#contact' class='text-blue-500 underline'>Contact Us</a> directly for specific questions.";
                    }
                    
                    addMessage(response, false);
                }, 800);
            }
        }
        
        sendMessage.addEventListener('click', handleUserMessage);
        
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleUserMessage();
            }
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close chatbot if open
                if (chatbotActive && targetId !== '#contact' && chatbot) {
                    chatbotActive = false;
                    chatbot.classList.remove('active');
                    setTimeout(() => {
                        chatbot.classList.add('hidden');
                    }, 300);
                }
            }
        });
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('a.rounded-md, button.rounded-md');
    buttons.forEach(button => {
        button.classList.add('btn-hover-effect');
    });
});