let btn_in = document.querySelector("#button_in");
let content = document.querySelector(".content");
let tweetBtn = document.querySelector(".tweet_btn");
let tweets = document.querySelectorAll(".tweet");
let btn_out = document.querySelector("#button_out");

btn_in.addEventListener("click", () => {
    document.querySelector(".sidebar").style.display = "none";
    content.style.marginLeft = "0";
    content.style.width = "100%";
    tweetBtn.style.left = "50%";
    tweets.forEach(tweet => {
        tweet.style.width = "70%";
        tweet.style.margin = "40px 0 40px 15%";
        tweet.style.display = "block";
    });
    btn_out.style.display = "block";
    btn_out.style.position = "relative";
    btn_out.style.left = "10px";
    btn_out.style.top = "10px";
    btn_out.style.fontSize = "2.5em";
    btn_out.style.color = "white";
});

btn_out.addEventListener("click", () => {
    document.querySelector(".sidebar").style.display = "flex";
    content.style.marginLeft = "20%";
    content.style.width = "75%";
    tweetBtn.style.left = "50%";
    tweets.forEach(tweet => {
        tweet.style.width = "70%";
        tweet.style.margin = "40px 0 40px 15%";
        tweet.style.display = "block";
    });
});