let	settingChilds =  setting.getElementsByClassName("container")[0]
let cardAnswer = document.getElementById("card_answer")
let words
let icon
let letter
let cardLetter
// let setting = document.getElementById("setting")
let isHide = false

function start(){

	let i = 0
	let j = 0
	let txt = document.getElementById('txt').value; 
	words = txt.split("\n")
	letter = txt.split("") 
	let card = document.getElementById("card")
	cardLetter = document.getElementById("card_letter")
	console.log(words)
	isPaused = false
	isActive = false
	var innerInterval
	clearAnswer()

	const myin = setInterval(
		function setWords(){
            
            if(!isHide){

                hide(settingChilds)
                isHide = !isHide
            }

			clearInterval(innerInterval)
			console.log("InterInterval clear")
			
			if(!isPaused){
				
			if(letter[i] == "\n"){

				setImage(j)	
                j++
				isPaused = true
			}

			if(letter.length - 1 < i){
				setImage(words.length - 1)
				clearInterval(myin)
				clearInterval(innerInterval)
				return;
			}

			if(!isPaused)

			cardLetter.innerHTML = letter[i] 
			i = i+1

			}
			
			if(!isPaused){
				
			innerInterval = setInterval(() => {
					cardLetter.innerHTML = ""	
					console.log("InnterInterval start")

				},2000);

			}

		
		}, 3000
		);

	}

	
// }

function resume(){
	console.log("resume")
	isPaused = false
	clearAnswer()
}

function setImage(index){
	
	var img = document.createElement('img')
	img.id="card_img"
	img.src = "robot.png"
	img.onclick = function(){
		card.removeChild(img)
		// cardLetter.innerHTML = words[index]
		cardLetter.innerHTML = "" 
		clearAnswer(words[index])
	}
	// cardLetter.innerHTML = ""
	card.appendChild(img)
	console.log("set image")
} 

function toggle(){

	if(!isHide){
        hide(settingChilds)
		isHide = !isHide
		animate()
	}
	else{
        show(settingChilds)
		isHide = !isHide
		animate()
	}
}

function hide(element){

    element.style.display = "none"
}

function show(element){

    element.style.display = "block"

}

function animate(){
	icon = document.getElementById("icon")
	icon.classList.toggle("rotate")
}

function clearAnswer(word = ""){

	cardAnswer.innerHTML = word

}