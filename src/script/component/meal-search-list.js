import './meal-item.js';

class mealSearch extends HTMLElement{

    set meals(meals){
        this._meals=meals;
        this.render();
    }
    renderError(message){
        this.innerHTML="";
        this.innerHTML+=`<h2> ${message} </h2>`
    }
    render(){
        this.innerHTML="";
        this._meals.forEach(meal=>{
            const mealItemElement=document.createElement("meal-item");
            mealItemElement.meals=meal;
            this.appendChild(mealItemElement);
        })
    }
}
customElements.define("meal-search-list",mealSearch);