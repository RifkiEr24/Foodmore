class categoryItem extends HTMLElement{
    set category(categories){
        this._category=categories;
        this.render();
    }

    render(){
        this.innerHTML=`
       
        <img class="w-100 p-5 rounded-circle cate-icon" src="${this._category.strMealThumb}">
         <p class="text-center g-medium size15">${this._category.strMeal}</p>   
      `
    }
}

customElements.define("category-item",categoryItem);