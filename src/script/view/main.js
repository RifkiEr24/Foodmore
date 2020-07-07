import '../component/meal-search-list.js';
import  DataMeal from '../data/dataMealsearch.js';
import '../component/meal-category-list.js'

import DataCategory from "../data/dataMealCategory.js"
const main = ()=>{
    const searchElement=document.querySelector("#searchMeal");
    const mealListElement = document.querySelector("meal-search-list");
    const categoryListElement = document.querySelector("meal-category-list");
    const buttonSearchElement=document.querySelector("#search")
    const buttontop = document.getElementById("btntop");
    const categoryitem=async()=>{
        try {
            let keyword= "Beef";
            let result = await DataCategory.categorysearch(keyword);
            await categoryrenderResult(result,keyword);
            keyword=await "Breakfast";
            result = await DataCategory.categorysearch(keyword);
            await categoryrenderResult(result,keyword);
            keyword=await "Chicken";
            result = await DataCategory.categorysearch(keyword);
            await categoryrenderResult(result,keyword);
            keyword=await "Dessert";
            result = await DataCategory.categorysearch(keyword);
            await categoryrenderResult(result,keyword);
            keyword=await "Lamb";
            result = await DataCategory.categorysearch(keyword);
            await categoryrenderResult(result,keyword);
            keyword=await "Vegetarian";
            result = await DataCategory.categorysearch(keyword);
            await categoryrenderResult(result,keyword);

        } catch (message) {
            categoryfallbackResult(message);
        }
    };

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataMeal.searchMeal(searchElement.value);
            mealrenderResult(result);
        } catch (message) {
            mealfallbackResult(message);
        }
    };
    // RENDER & FALLBACK RESULT FOR MEAL SEARCH
    const mealrenderResult = results => {
        mealListElement.meals=results;
    }

    const mealfallbackResult = message => {
        mealListElement.renderError(message);
     };


    //  RENDEER & FALLBACK RESULT FOR CATEGORY
    const categoryrenderResult = (results,categoryname) => {
        categoryListElement.name=categoryname;
        categoryListElement.category=results;
    }

    const categoryfallbackResult = message => {
        categoryListElement.renderError(message);
     };
     
     categoryitem();
     
    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
  


//button top function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 384 || document.documentElement.scrollTop > 384) {
    buttontop.style.display = "block";
  } else {
    buttontop.style.display = "none";
  }
}

}
 
    export default main;