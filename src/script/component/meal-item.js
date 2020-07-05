import DataCountry from "./../data/Flagdata.js";
import { parseJSON } from "jquery";
class mealItem extends HTMLElement{
 
    set meals(meal){
        this._meal=meal;
        this.render();
    }
    render(){   
       
        const country=this._meal.strArea;
      
    //   console.log(testPromise());
    //   const countryname= results=>{
    //     this._country=results;
    //     this._country.forEach(country=>{
    //         const name=country;
    //         console.log(`${name.demonym},${name.flag}`);
    //     })
      
    //   }
    // GET ingredient
    let ingredient="";
      for(let i=0; i < 20; i++){
        if(this._meal[`strIngredient${i+1}`] !== null && this._meal[`strIngredient${i+1}`] !== ""){
         ingredient += `<p class="g-medium">${i+1}) ${this._meal[`strIngredient${i+1}`]}</p>`;

        }
      }
    //   GET MEASURE
      let Measure="";
      for(let i=0; i < 20; i++){
        if(this._meal[`strMeasure${i+1}`] !== null && this._meal[`strMeasure${i+1}`] !== "" && this._meal[`strMeasure${i+1}`] !== " "){
         Measure += `<p class="g-medium">${i+1}) ${this._meal[`strMeasure${i+1}`]}</p>`;

        }
      }
    // replace /r/n for ingredient
    const instruction=this._meal.strInstructions;
    const instrutionbr=instruction.replace(/(?:\r\n|\r|\n)/g, '<br><br>');
    // replace Link for embed youtube
       const youtube=this._meal.strYoutube;
      const youtubeembedlink=youtube.replace('https://www.youtube.com/watch?v=','');
        
const modal=` <div class="modal fade " id="meal${this._meal.idMeal}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                             <div class="modal-dialog modal-lg" role="document">
                                         <div class="modal-content">
                                               <div class="modal-header">
                                                  <h5 class="modal-title" id="exampleModalLongTitle">${this._meal.strMeal}</h5>
                                                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                     <span aria-hidden="true">&times;</span>
                                                     </button>
                                                </div>
                                                                                  <div class="modal-body">
                                                                                      <!-- FIRST ROW -->
                                                                                            <div class="row">
                                                                                                      <div class="col-md-6">
                                                                                                        <img class="center" src="${this._meal.strMealThumb}" style="width: 18rem;">
                                                                                                       </div>
                                                                                                            <div class="col-md-6">
                                                                                                              <a><p class="g-medium" >Name:${this._meal.strMeal}</p>
                                                                                                              <p class="g-medium">Category:${this._meal.strCategory}</p>
                                                                                                              <p class="g-medium">Area:${this._meal.strArea}</p>
                                                                                                             </div>
                                                                                             </div>
                                
                                                                                             <div class="row mt-4">
                                                                                                     <div class="col-md-6">
                                                                                                          <div class="text-center">
                                                                                                                <p class="g-bold size20">Ingredient</p>
                                                                                                                ${ingredient}
                                                                                                           </div>
                                                                                                      </div>
                                                                                                       <div class="col-md-6">
                                                                                                              <div class="text-center">
                                                                                                                       <p class="g-bold size20">Measure</p>
                                                                                                                         ${Measure}
                                                                                                               </div>
                                                                                                        </div>
                                                                                             </div>      
                                                                                             <div class=row>
                                                                                                    <div class="col-md-12">
                                                                                                        <div class="p-3 text-center">
                                                                                                                <p class="g-bold size20">Introduction</p>
                                                                                                                <p class="g-book">${instrutionbr}</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                              </div>
                                                                                              <div class=row>
                                                                                                
                                                                                                <div class="col-md-12">
                                                                                                  <div class="p-3 center text-center">
                                                                                                    <p class="g-bold size20"> Watch it on Youtube!</p>
                                                                                                    <iframe class="w-100" style="height: 30rem;" src="https://www.youtube.com/embed/${youtubeembedlink}">
                                                                                                    </iframe>
                                                                                            </div>
                                                                                                </div>
                                                          
                                                                                                
                                                                                          </div>  
                                                                                     </div>
                                                                            
                                           <div class="modal-footer">
                                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                               </div>
                                   </div>
                               </div>
                           </div>`


        this.innerHTML=`
        <div class="col-md-3 p-3" data-toggle="modal" data-target="#meal${this._meal.idMeal}">
                     <div class="card center pointer" style="width: 18rem;">
                                     <img class="card-img-top" src="${this._meal.strMealThumb}" alt="Card image cap">
                                            <div class="card-body">
                                                 <p class="g-bold">${this._meal.strMeal}</p>
                                             </div>
                                         </div>
                           </div>
                        <!-- MODAL -->
                          ${modal}
        `
    }
}
customElements.define("meal-item",mealItem);