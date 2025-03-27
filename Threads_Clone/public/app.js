let bars = document.querySelector("#bars");
let content = document.querySelector(".content");
let tweetBtn = document.querySelector(".tweet_btn");
let tweets = document.querySelectorAll(".tweet");

bars.addEventListener("click", () => {
    document.querySelector(".sidebar").style.display = "none";
    content.style.marginLeft = "0";
    tweetBtn.style.left = "50%";
    tweets.forEach(tweet => {
        tweet.style.width = "50%";
        tweet.style.margin = "40px auto";
    });
});