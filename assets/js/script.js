let dayList = [
"First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eight","Nineth","Tenth","Eleventh","Twelvfth"
];

let giftList = [
"A Partridge in a Pear Tree",
"Two turtle doves",
"Three french hens",
"Four colly birds",
"Five gold rings",
"Six geese a-laying",
"Seven swans a-swimming",
"Eight maids a-milking",
"Nine ladies dancing",
"Ten lords a-leaping",
"Eleven pipers piping",
"Twelve drummers drumming"
];

let currentDay = 0;

document.querySelector('#day' + currentDay).textContent = dayList[currentDay];
document.querySelector('#gift' + currentDay).textContent = giftList[currentDay];

function showNextDay() {
	currentDay++;
	document.querySelector('#stanza'+currentDay).style.display = 'block';

	document.querySelector('#day' + currentDay).textContent = dayList[currentDay] + ' Day';
	let gifs = "";
	for (let i = currentDay; i >= 0; i--) {
		if(i === 1) {
			gifs = gifs + giftList[i] + ", and ";
		} else {
			gifs = gifs + giftList[i] + " ";
		}
	}
	document.querySelector('#gift' + currentDay).textContent = gifs;

	if(currentDay === 11)
		document.querySelector('#btn').setAttribute('disabled',true);
}



