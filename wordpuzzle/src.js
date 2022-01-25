let	settingChilds =  setting.getElementsByClassName("container")[0]
let cardAnswer = document.getElementById("card_answer")
let words
let icon
let letters
let lettersTemp
let cardLetter
let letterShaperIsFilled = false
let letterReshpeCode
// let setting = document.getElementById("setting")
let isHide = false
let isChecked = true

function start(){

	let i = 0
	let j = 0
	let index = 0
	let innerIndex = 0
	let txt = document.getElementById('txt').value; 
	words = txt.split("\n")
	letters = txt.split("") 
		
	letterShaper = []
	let card = document.getElementById("card")
	cardLetter = document.getElementById("card_letter")
	console.log(words)
	isPaused = false
	isActive = false
	var innerInterval
	clearAnswer()

			lettersTemp = letters

			console.log("array of letters: " + letters)
			console.log("array of letterTemp: " + lettersTemp)

			if(isChecked){
				lettersTemp.forEach(element => {

				if(element != " "  & element!= "\n"){
							if(innerIndex == 0){
								letterReshpeCode = letterResahper(lettersTemp[innerIndex], "init")
								console.log("letter reshape code is: " + letterReshpeCode)
								console.log(String.fromCharCode(letterReshpeCode))
								letters[innerIndex] = String.fromCharCode(letterReshpeCode)
								innerIndex = innerIndex + 1
								}
							else if(innerIndex == letters.length - 1){
								letterReshpeCode = letterResahper(lettersTemp[innerIndex], "final")
								console.log("letter reshape code is: " + letterReshpeCode)
								console.log(String.fromCharCode(letterReshpeCode))
								letters[innerIndex] = String.fromCharCode(letterReshpeCode)
								innerIndex = innerIndex + 1
							}
							else{
								letterResahperCode = letterResahper(lettersTemp[innerIndex], "mid")
								console.log("letter reshape code is: " + letterReshpeCode)
								console.log("String.fromCharCode(letterReshpeCode"))
								letters[innerIndex] = String.fromCharCode(letterReshpeCode)
								innerIndex = innerIndex + 1
							}
							}
							else{
								innerIndex = innerIndex + 1
							}
							}
			);
			}
			console.log("letters is:" + letters)
			console.log("letters is:" + lettersTemp)

	const myin = setInterval(
		function setWords(){

          if(!isHide){

                hide(settingChilds)
                isHide = !isHide
            }

			clearInterval(innerInterval)
			console.log("InterInterval clear")
			
			if(!isPaused){
				
			if(letters[i] == "\n"){

				setImage(j)	
                j++
				isPaused = true
			}

			if(letters.length - 1 < i){
				setImage(words.length - 1)
				clearInterval(myin)
				clearInterval(innerInterval)
				return;
			}

			if(!isPaused)

			cardLetter.innerHTML = letters[i] 
			i = i+1

			}
			
			if(!isPaused){
				
			innerInterval = setInterval(() => {
					cardLetter.innerHTML = ""	
					console.log("InnterInterval start")

				},2000);

			}
		
		}, 3000);
	}


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

function letterResahper(letter, poistion="iso"){
	let index = 0
	letter = String(letter)
	console.log(letter+ " " + letter.charCodeAt(0) + " is here and position is " + poistion)
	 for(let i=0;i< charsMap.length - 1; i++){
			if(letter.charCodeAt(0) == charsMap[i][0]){
				console.log("#letterReshaper: letter is: " + letter + "charsMap is: " + String.fromCharCode(charsMap[i][0]))
				if(poistion = "init"){
					console.log("for letter " + letter + "reuturn" + charsMap[i][2])
					return charsMap[i][2]
				}
				if(poistion = "mid"){
					console.log("for letter " + letter + "reuturn" + charsMap[i][3])
                    return charsMap[i][3]
				}
				if(poistion = "final"){
					console.log("for letter " + letter + "reuturn" + charsMap[i][4])
					return charsMap[i][4]
				}
				else{
					console.log("for letter " + letter + "reuturn" + charsMap[i][4])
				return "پیدا نشد"
				}
			}
		}
	}

var charsMap = [
			/* code,isolated,initial, medial, final */
			[ 0x0621, 0xFE80, null  , null  , null   ], /* HAMZA */
			[ 0x0622, 0xFE81, null  , null  , 0xFE82 ], /* ALEF_MADDA */
			[ 0x0623, 0xFE83, null  , null  , 0xFE84 ], /* ALEF_HAMZA_ABOVE */
			[ 0x0624, 0xFE85, null  , null  , 0xFE86 ], /* WAW_HAMZA */
			[ 0x0625, 0xFE87, null  , null  , 0xFE88 ], /* ALEF_HAMZA_BELOW */
			[ 0x0626, 0xFE89, 0xFE8B, 0xFE8C, 0xFE8A ], /* YEH_HAMZA */
			[ 0x0627, 0xFE8D, 0xFE8E , 0xFE8E  , 0xFE8E ], /* ALEF */
			[ 0x0628, 0xFE8F, 0xFE91, 0xFE92, 0xFE90 ], /* BEH */
			[ 0x0629, 0xFE93, null  , null  , 0xFE94 ], /* TEH_MARBUTA */
			[ 0x062A, 0xFE95, 0xFE97, 0xFE98, 0xFE96 ], /* TEH */
			[ 0x062B, 0xFE99, 0xFE9B, 0xFE9C, 0xFE9A ], /* THEH */
			[ 0x062C, 0xFE9D, 0xFE9F, 0xFEA0, 0xFE9E ], /* JEEM */
			[ 0x062D, 0xFEA1, 0xFEA3, 0xFEA4, 0xFEA2 ], /* HAH */
			[ 0x062E, 0xFEA5, 0xFEA7, 0xFEA8, 0xFEA6 ], /* KHAH */
			[ 0x062F, 0xFEA9, 0xFEA9  , 0xFEA9 , 0xFEAA ], /* DAL */
			[ 0x0630, 0xFEAB, 0xFEAB  , 0xFEAB , 0xFEAC ], /* THAL */
			[ 0x0631, 0xFEAD, 0xFEAD  , 0xFEAD , 0xFEAE ], /* REH */
			[ 0x0632, 0xFEAF, null  , null  , 0xFEB0 ], /* ZAIN */
            [ 0x0698, 0xFB8A,  0xFB8A  , 0xFB8A    , 0xFB8B ], /* ZHEH */
			[ 0x0633, 0xFEB1, 0xFEB3, 0xFEB4, 0xFEB2 ], /* SEEN */
			[ 0x0634, 0xFEB5, 0xFEB7, 0xFEB8, 0xFEB6 ], /* SHEEN */
			[ 0x0635, 0xFEB9, 0xFEBB, 0xFEBC, 0xFEBA ], /* SAD */
			[ 0x0636, 0xFEBD, 0xFEBF, 0xFEC0, 0xFEBE ], /* DAD */
			[ 0x0637, 0xFEC1, 0xFEC3, 0xFEC4, 0xFEC2 ], /* TAH */
			[ 0x0638, 0xFEC5, 0xFEC7, 0xFEC8, 0xFEC6 ], /* ZAH */
			[ 0x0639, 0xFEC9, 0xFECB, 0xFECC, 0xFECA ], /* AIN */
			[ 0x063A, 0xFECD, 0xFECF, 0xFED0, 0xFECE ], /* GHAIN */
			[ 0x0640, 0x0640, 0x0640, 0x0640, 0x0640 ], /* TATWEEL */
			[ 0x0641, 0xFED1, 0xFED3, 0xFED4, 0xFED2 ], /* FEH */
			[ 0x0642, 0xFED5, 0xFED7, 0xFED8, 0xFED6 ], /* QAF */
			[ 0x0643, 0xFED9, 0xFEDB, 0xFEDC, 0xFEDA ], /* KAF */
			[ 0x0644, 0xFEDD, 0xFEDF, 0xFEE0, 0xFEDE ], /* LAM */
			[ 0x0645, 0xFEE1, 0xFEE3, 0xFEE4, 0xFEE2 ], /* MEEM */
			[ 0x0646, 0xFEE5, 0xFEE7, 0xFEE8, 0xFEE6 ], /* NOON */
			[ 0x0647, 0xFEE9, 0xFEEB, 0xFEEC, 0xFEEA ], /* HEH */
			[ 0x0648, 0xFEED,  0xFEED  , 0xFEED   , 0xFEEE ], /* WAW */
			[ 0x0649, 0xFEEF, null  , null  , 0xFEF0 ], /* ALEF_MAKSURA */
			[ 0x064A, 0xFEF1, 0xFEF3, 0xFEF4, 0xFEF2 ], /* YEH Arabic */
            [ 0x06CC, 0xFBFC, 0xFBFE, 0xFBFF, 0xFBFD ], /* YEH Farsi */
            [ 0x0686, 0xFB7A, 0xFB7C, 0xFB7D, 0xFB7B ], /* CHEH */
            [ 0x067E, 0xFB56, 0xFB58, 0xFB59, 0xFB57 ],
            [ 0x06AF, 0xFB92, 0xFB94, 0xFB95, 0xFB93 ],
            [ 0x06A9, 0xFB8E, 0xFB90, 0xFB91, 0xFB8F ],

		]