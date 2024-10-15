const text = `প্রিয় ভালোবাসা,

আমি কিছু বলতে চাই। তোমাকে ছাড়া প্রতিদিন যেন আমার একটি অংশ হারিয়ে যাচ্ছে। তোমার হাসি, তোমার মমতা, তোমার অটুট সমর্থন—এগুলো এমন জিনিস যা আমি প্রতিদিন আরও বেশি করে অনুভব করছি। তোমার উপস্থিতি ছাড়া জীবনটা কিছুটা রঙহীন মনে হচ্ছে। আমার হৃদয়ে এমন এক শূন্যতা আছে যা শুধুমাত্র তোমার বন্ধুত্ব পূরণ করতে পারে।

তুমি কি আমাদের সেই অসংখ্য অভিযানের কথা মনে করো? সেই হঠাৎ রোড ট্রিপগুলো থেকে শুরু করে রাতের তারা দেখার মুহূর্তগুলো, প্রতিটি স্মৃতি আমার মনে খোদাই করা এক একটি মূল্যবান রত্নের মতো। সেগুলো কেবল ক্ষণস্থায়ী মুহূর্ত ছিল না; সেগুলো এমন এক বন্ধনের ভিত্তি ছিল যা আমি কোনো শব্দে প্রকাশ করতে পারবো না।

আমি আমাদের রাতের দীর্ঘ কথোপকথনের কথা মিস করি, যা ভোরের প্রথম আলো পর্যন্ত চলত। আমাদের স্বপ্নগুলো ও আত্মার কথা শেয়ার করার সেই মুহূর্তগুলো আমি সবচেয়ে বেশি মিস করি।

আসুন আমরা একে অপরের কাছে প্রতিজ্ঞা করি—যে দূরত্ব আমাদের বন্ধুত্বের আগুন নেভাতে পারবে না। আমি সেই দিনের অপেক্ষায় আছি যখন আমরা আবার একসাথে হবো, হাসতে হাসতে পেট ব্যথা হবে, এবং নতুন নতুন স্মৃতি তৈরি করবো।`;

const paragraph = text.split("");
let i = 0;

function dashOut(arr) {
    if (i < arr.length) {
        document.querySelector("#letter").textContent += arr[i];
        i++;
        setTimeout(() => dashOut(arr), interval(arr[i]));
    }
}

function interval(letter) {
    return letter === ";" || letter === "." || letter === "," ? Math.floor(Math.random() * 500 + 500) : Math.floor(Math.random() * 130 + 5);
}

document.addEventListener("DOMContentLoaded", () => {
    dashOut(paragraph);
});

function togglePlay() {
    const audio = document.querySelector(".audio");
    const pause = document.querySelector(".pause");
    if (audio.paused) {
        audio.play();
        pause.textContent = "🔇";
    } else {
        audio.pause();
        pause.textContent = "🔊";
    }
}
