const movies = {1: "Dilwale Dulhania Le Jayenge", 2: "Inception", 3: "3 Idiots", 4: "The Dark Knight", 5: "Lagaan", 6: "Interstellar", 7: "PK", 8: "The Avengers", 9: "Kabhi Khushi Kabhie Gham", 10: "Titanic", 11: "Sholay", 12: "Jurassic Park", 13: "Dangal", 14: "The Lion King", 15: "Bajrangi Bhaijaan", 16: "Avatar", 17: "Padmaavat", 18: "Forrest Gump", 19: "Andhadhun", 20: "The Matrix", 21: "Queen", 22: "Gladiator", 23: "Gully Boy", 24: "The Godfather", 25: "Uri: The Surgical Strike", 26: "Pulp Fiction", 28: "Fight Club", 30: "The Shawshank Redemption", 31: "Chennai Express", 32: "The Lord of the Rings: The Fellowship of the Ring", 33: "Kabir Singh", 34: "The Lord of the Rings: The Two Towers", 35: "War", 36: "The Lord of the Rings: The Return of the King", 37: "Tanhaji", 38: "Star Wars: Episode IV - A New Hope", 39: "Kesari", 40: "Star Wars: Episode V - The Empire Strikes Back", 42: "Star Wars: Episode VI - Return of the Jedi", 43: "Good Newwz", 44: "The Social Network", 45: "Chhichhore", 46: "The Departed", 47: "Mission Mangal", 48: "The Revenant", 49: "Article 15", 50: "The Wolf of Wall Street", 51: "Stree", 52: "The Grand Budapest Hotel", 53: "Badhaai Ho", 54: "The Shape of Water", 55: "Raazi", 56: "La La Land", 57: "Sanju"};
let api = "http://www.omdbapi.com/?i=tt3896198&apikey=612363b2&t=";
let btn = document.querySelector('.btn');
let content = document.querySelector('.content');
let container = document.querySelector('.container');
let enter = document.querySelector(".user_searched");

function clear(){
    document.querySelector('.content').innerHTML=" ";
}
btn.addEventListener("click", async () => {
    let search = document.querySelector(".user_searched").value;
    container.style.display = 'none';
    content.style.display = "flex";
    content.style.alignAround = "space-between";
    content.style.flexWrap = "wrap";
    await get(search);
});

enter.addEventListener("keypress", async (event) => {
    if (event.key == 'Enter') {
        let search = document.querySelector(".user_searched").value;
        container.style.display = 'none';
        content.style.display = "flex";
        content.style.alignAround = "space-between";
        content.style.flexWrap = "wrap";
        await get(search);
    }
});

let btn4 = document.querySelector('.btn4');
btn4.addEventListener('click', () => {
    content.style.display = "none";
    container.style.display="grid";
    clear();
});

function randomnumber() {
    return Math.floor((Math.random() * 57) + 1);
}

let arr = [];
async function random() {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=612363b2&t=";
    try {
        let images = document.querySelectorAll('.img');
        for (let img of images) {
            let number;
            do {
                number = randomnumber();
            } while (arr.includes(number));
            arr.push(number);
            let res1 = await axios.get(url + movies[number]);
            img.setAttribute('src', res1.data.Poster);
        }
    } catch (e) {
        console.log(e);
    }
}

random();

function hover() {
    document.querySelectorAll('.home').forEach((home, index) => {
        home.addEventListener('mouseenter', () => {
            home.style.height = "90%";
            home.style.textAlign = "center";
            home.style.border = "2px solid gray";
            let btn = document.querySelector(`.clickto${index + 1}`);
            if (btn) {
                btn.style.display = 'block';
            }
        });

        home.addEventListener('mouseleave', () => {
            home.style.height = "100%";
            home.style.border = "none";
            let btn = document.querySelector(`.clickto${index + 1}`);
            if (btn) btn.style.display = 'none';
        });
        let btn = document.querySelector(`.clickto${index + 1}`);
        if (btn) {
            btn.addEventListener('click', async () => {
                container.style.display = 'none';
                content.style.display = "flex";
                content.style.alignAround = "space-between";
                content.style.flexWrap = "wrap";
                await get(movies[arr[index]]);
            });
        }
    });
}

hover();


async function get(search) {
    try {
        
        const existingErrors = document.querySelectorAll('h1.error-message');
        existingErrors.forEach(error => error.remove());
        let res = await axios.get(api + search);
        if (res.data.Response == "False") {
            document.querySelector('.content').style.display = "none";
            let h1 = document.createElement('h1');
            h1.innerText = "Movie Not Found. Try Again.....";
            h1.classList.add('error-message');
            document.querySelector("body").appendChild(h1);
            h1.style.textAlign = 'center';
        } else {
            function displayMovieContent() {
     
                const contentDiv = document.querySelector('.content');
                contentDiv.style.display = "flex";
                contentDiv.innerHTML = `
                    <button class="btn4">X</button>
                    <div class="text">
                        <img src="" class="search_img">
                        <div class="dev1">
                            <h2 class="title"></h2>
                            <h3 class="rating"></h3>
                            <div class="year"></div>
                        </div>
                    </div>
                    <div class="plot"></div>
                    <div class="cast"></div>
                `;
                
      
                const closeBtn = document.querySelector('.btn4');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        content.style.display = "none";
                        container.style.display = "grid";
                        clear();
                    });
                }
                
            
                let title = document.querySelector(".title");
                document.querySelector(".search_img").setAttribute('src', res.data.Poster || '');
                title.innerText = res.data.Title || 'Title Not Available';
                title.style.textAlign = 'center';
                
                let rating = document.querySelector('.rating');
                const ratingValue = res.data.Ratings && res.data.Ratings.length > 0 ? res.data.Ratings[0].Value : 'N/A';
                rating.innerHTML = `<span class="fa fa-star checked">&nbsp</span>${ratingValue}`;
                rating.style.textAlign = "center";
                
                let h4 = document.createElement('h4');
                h4.innerHTML = `${res.data.Rated || 'N/A'}&nbsp&nbsp&nbsp&nbsp${res.data.Year || 'N/A'}&nbsp&nbsp&nbsp&nbsp${res.data.Runtime || 'N/A'}`;
                let year = document.querySelector('.year');
                year.appendChild(h4);
                
                let plot = document.querySelector(".plot");
                let h3 = document.createElement("h3");
                h3.innerHTML = `<b>Plot:</b><br>${res.data.Plot || 'Plot not available'}`;
                plot.appendChild(h3);
                
                let cast = document.querySelector('.cast');
                cast.innerHTML = `<h3><b>Cast:</b><br>${res.data.Actors || 'Cast not available'}</h3>`;
                
                let genres = res.data.Genre || '';
                let parts = genres.split(/,\s*/);
                if (genres) {
                    parts.forEach((genre) => {
                        let btn2 = document.createElement('button');
                        btn2.classList.add('btn3');
                        btn2.innerText = genre;
                        document.querySelector('.dev1').appendChild(btn2);
                    });
                }
            }
            displayMovieContent();
        }
    } catch (e) {
        // Remove any existing error messages first
        const existingErrors = document.querySelectorAll('h1.error-message');
        existingErrors.forEach(error => error.remove());
        
        document.querySelector('.content').style.display = "none";
        let h1 = document.createElement('h1');
        h1.classList.add('error-message'); // Add class for easy cleanup
        h1.innerText = `Error Encountered ${e}. Try Again.....`;
        document.querySelector("body").appendChild(h1);
        h1.style.textAlign = 'center';
    }
}