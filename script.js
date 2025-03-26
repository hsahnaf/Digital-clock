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
    "সফলতা সেই লোকেরাই পায়, যারা কখনো হাল ছাড়ে না।",
    "তোমার স্বপ্ন গুলো সত্যি করতে হলে, তোমাকে কঠোর পরিশ্রম করতে হবে।",
    "অসফলতা মানে হার নয়, এটি শেখার একটি উপায়।",
    "জীবনে বড় কিছু করতে হলে বড় চিন্তা করো।",
    "ধৈর্য ধরো, সাফল্য আসবেই।",
    "সফলতা রাতারাতি আসে না, এটি কঠোর পরিশ্রমের ফল।",
    "যে স্বপ্ন দেখে, সে-ই জয়ী হয়।",
    "তুমি যদি নিজেকে বিশ্বাস করো, তাহলে কেউ তোমাকে থামাতে পারবে না।",
    "কঠোর পরিশ্রম, অধ্যবসায় এবং ধৈর্যই হলো সাফল্যের চাবিকাঠি।",
    "তুমি যদি স্বপ্ন দেখতে পারো, তবে তা বাস্তব করাও সম্ভব।",
    "সফল মানুষরা সুযোগের অপেক্ষা করে না, সুযোগ তৈরি করে নেয়।",
    "শিক্ষাই আলো, আর পরিশ্রম হলো সাফল্যের সিঁড়ি।",
    "পেছনে তাকিয়ে আফসোস কোরো না, সামনে তাকিয়ে সুযোগ খুঁজো।",
    "প্রতিদিন নিজের সেরা ভার্সন হতে চেষ্টা করো।",
    "হার মানো না, কারণ তোমার সাফল্য খুব কাছেই অপেক্ষা করছে।",
    "প্রতিটি সমস্যা একটি নতুন সুযোগ নিয়ে আসে।",
    "জীবন হচ্ছে শেখার জায়গা, প্রতিটি ভুল থেকে শেখো।"
];

function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").innerHTML = quotes[randomIndex];
}

setInterval(updateQuote, 60000);
updateQuote();
