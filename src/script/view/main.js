import '../component/meal-search-list.js';
import  DataMeal from '../data/dataMealsearch.js';
import '../component/meal-category-list.js'
const main = ()=>{
    const searchElement=document.querySelector("#searchMeal");
    const mealListElement = document.querySelector("meal-search-list");
    const buttonSearchElement=document.querySelector("#search")
    
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataMeal.searchMeal(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };
    const renderResult = results => {
        
        mealListElement.meals=results;
    }

    const fallbackResult = message => {
        mealListElement.renderError(message);
     };
    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
     
}
 
    export default main;