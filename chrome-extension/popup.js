
addEventListener('DOMContentLoaded', () => {
	const talkButton = document.querySelector('#talk');
	const adviceButton = document.querySelector('#advice');

	talkButton.addEventListener('click', () => {
		const mainContainer = document.getElementById('home');
		mainContainer.style.display = 'none';
	});
});

adviceButton.addEventListener('click', () => {
	chrome.windows.create({
		type: 'popup'
	});
});