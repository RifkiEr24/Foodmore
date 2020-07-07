import './category-item.js';
class mealCategory extends HTMLElement{
    
    set category(categories){
        this._category=categories;
        this.render();
    }
    set name(categoryname){
        this._name=categoryname;
    }
    renderError(message){
        this.innerHTML="";
        this.innerHTML+=`<h2> ${message} </h2>`
    }
    render(){
        // CREATE SECTION
        const section= document.createElement('section');
        section.setAttribute("id",`${this._name}`)
        section.setAttribute("class","mb-5")
        // Create category title by <p> element
        const Categoryname=document.createElement('p');
        Categoryname.setAttribute("class","g-bold size30 text-center")
        Categoryname.innerText=`${this._name}`;
        // Append categoryname to section
        section.appendChild(Categoryname);
        //CREATE Row
        const row=document.createElement('div');
        row.setAttribute("class","row ml-0 mr-0");
        this._category.slice(-8).forEach(category=>{
            const categoryItemElement=document.createElement("category-item");
            categoryItemElement.setAttribute("class","col-md-3 col-6");
            categoryItemElement.setAttribute("data-aos","fade-up");
            categoryItemElement.category=category;
            section.appendChild(row);
            row.appendChild(categoryItemElement);
            this.appendChild(section);
        })
    }

}
customElements.define("meal-category-list",mealCategory);