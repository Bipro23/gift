const giftButton = document.getElementById('gift-button');
const messageDiv = document.getElementById('message');

giftButton.addEventListener('click', () => {
    messageDiv.style.display = 'block';
    giftButton.style.display = 'none';
});
