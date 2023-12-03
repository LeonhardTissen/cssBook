const letterChoices = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';


const book = document.getElementById('book');

function spawnLetter() {
	const letterElement = document.createElement('p');
	letterElement.innerText = letterChoices[Math.floor(Math.random() * letterChoices.length)];
	letterElement.classList.add('letter');
	book.appendChild(letterElement);
	letterElement.style.transform = `translate(
		${Math.random() * 400 - 200}px,
		${Math.random() * 100}px
	)`;
	letterElement.style.fontSize = `${Math.random() * 20 + 6}px`;
	letterElement.style.opacity = '0';

	setTimeout(() => {
		letterElement.style.transform = `translate(
			${Math.random() * 600 - 300}px,
			-600px
		) rotateZ(${Math.random() * 720 - 360}deg)`
		letterElement.style.opacity = `${Math.random()}`;
	}, 10);

	setTimeout(() => {
		letterElement.style.opacity = '0';
	}, 2500);

	setTimeout(() => {
		letterElement.remove();
	}, 3000);
}


function spawnFallingLetter() {
	const letterElement = document.createElement('p');
	letterElement.innerText = letterChoices[Math.floor(Math.random() * letterChoices.length)];
	letterElement.classList.add('fallingletter');
	document.body.appendChild(letterElement);

	const xPos = Math.random() * window.innerWidth;
	const rotation = Math.random() * 360;

	letterElement.style.transform = `translate(
		${xPos}px,
		-40px
	) rotateZ(${rotation}deg)`;
	letterElement.style.fontSize = `${Math.random() * 24 + 2}px`;
	letterElement.style.filter = `blur(${Math.random() * 3}px)`

	setTimeout(() => {
		letterElement.style.transform = `translate(
			${xPos + Math.random() * 100 - 50}px,
			105vh
		) rotateZ(${rotation}deg)`
	}, 10);

	setTimeout(() => {
		letterElement.remove();
	}, 3000);
}

setInterval(spawnLetter, 100);
setInterval(spawnFallingLetter, 230);
