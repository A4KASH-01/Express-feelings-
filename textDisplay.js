const text = "Dear Neha, Every moment without you feels like a lifetime. Your smile, your warmth, and the way you light up every room you enter – I find myself missing these things more with each passing day. Life seems a bit dimmer without your presence to brighten it up. I often think back to the special moments we've shared – those late-night talks, the spontaneous adventures, and the quiet times where it felt like the world stopped just for us. Each of these memories is like a cherished treasure that I hold close to my heart. The connection we share is something truly extraordinary, and it's something I deeply miss. I long for the day when we can be together again, to laugh, to dream, and to make new memories that will stay with us forever. Until then, know that you are always in my thoughts and in my heart. I can’t wait for the moment when I can see you again and hold you close. Until that beautiful day arrives, remember that you are loved beyond words and missed more than you can imagine.";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
    if (i < arr.length) {
        document.querySelector(".textCont").textContent += arr[i];
        i++;
        setTimeout(function () {
            dashOut(arr);
        }, interval(arr[i]));
    }
}

function interval(letter) {
    if (letter == ";" || letter == "." || letter == ",") {
        return Math.floor(Math.random() * 500 + 500);
    } else {
        return Math.floor(Math.random() * 130 + 5);
    }
}

function startFromBegin() {
    i = 0;
    dashOut(paragraph);
}

startFromBegin();
