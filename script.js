function updateClock() {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minuteDeg = (minutes * 6);
    const secondDeg = (seconds * 6);

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

const quotes = [
    "সফলতা তাদেরই কাছে আসে, যারা কখনো হাল ছাড়ে না।",
    "কঠোর পরিশ্রমই হলো সাফল্যের মূল চাবিকাঠি।",
    "স্বপ্ন দেখো, চেষ্টা করো, অর্জন করো।",
    "অসফলতা মানেই শেষ নয়, বরং শেখার নতুন সুযোগ।",
    "তোমার সফলতার মূলমন্ত্র হলো, আজকের তুমি গতকালের চেয়ে ভালো হও।",
    "যারা চেষ্টা করতে ভয় পায়, তারা কোনোদিন সফল হতে পারে না।",
    "জীবন একটাই, তাই বড় স্বপ্ন দেখো এবং তা পূরণে অগ্রসর হও।",
    "সমস্যা নয়, সমাধান খোঁজো।",
    "নিজেকে বদলালে, পৃথিবীও বদলে যাবে।",
    "একটি পদক্ষেপই পারে বড় পরিবর্তন আনতে।",
    "আজকে কঠোর পরিশ্রম করো, আগামীকাল তোমার হবে।"
];

let quoteIndex = 0;
let charIndex = 0;
let typingSpeed = 100; 

function typeQuote() {
    if (charIndex < quotes[quoteIndex].length) {
        document.getElementById("quote-text").innerHTML += quotes[quoteIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeQuote, typingSpeed);
    } else {
        setTimeout(() => {
            document.getElementById("quote-text").innerHTML = "";
            charIndex = 0;
            quoteIndex = (quoteIndex + 1) % quotes.length;
            setTimeout(typeQuote, 500);
        }, 5000);
    }
}

typeQuote();
