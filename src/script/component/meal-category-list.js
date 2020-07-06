import DataCategory from "./../data/dataMealCategory.js"
class mealCategory extends HTMLElement{
    
    get beef(){
        this._beefs= DataCategory.categorybeef();
        this.render();
    }
  
    renderError(message){
        this.innerHTML="";
        this.innerHTML+=`<h2> ${message} </h2>`
    }

    render(){
        console.log(this.beefs);
        this.innerHTML=`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`;
    }
}

customElements.define("meal-category",mealCategory);