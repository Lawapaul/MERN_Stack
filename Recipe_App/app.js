let btn=document.querySelector(".btn_one");
let inpu=document.querySelector('input');
let chan=document.querySelector('.initial');

btn.addEventListener("click",async()=>{
    chan.innerHTML="<h3>Fetching Recipies...</h3>";
    setTimeout(()=>{
        chan.style.display="none";
    },1000);
    setTimeout(async()=>{
        await search(inpu.value)
    },1000);
})
let btn_recipe=document.createElement("button");
async function search(dish){
    try{
        let url="https://www.themealdb.com/api/json/v1/1/search.php?s="
        let search=await axios.get(url+dish);
        search.data.meals.forEach(meal=>{
            let recipe=document.createElement("div");
            recipe.classList.add("dishes");
            recipe.innerHTML=`
             <img src="${meal.strMealThumb}">
             <h3>${meal.strMeal}</h3>
             <p><b>${meal.strArea}</b> Dish</p>
             <p>Belongs to <b>${meal.strCategory}</b> Category</p>
            `
            let btn_two=document.createElement("button");
            btn_two.innerText="View Recipe"
            recipe.appendChild(btn_two);
            btn_two.classList.add("btn_recipe");
            btn_two.addEventListener("click",()=>{
                let detail=document.querySelector(".recipe_detail");
                console.log(search.data.meals);
                document.querySelector(".recipe_detail").style.display="block";
                detail.innerHTML="Hello World";
            })
            document.querySelector(".content").appendChild(recipe);
        });
    
        
    
        
    }
    catch{
        console.log("Not found");
    }
}

