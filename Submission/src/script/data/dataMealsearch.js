class DataMeal{
    static searchMeal(keyword){
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`,{
          headers: {
            'Connection': 'keep-alive'
          },
        })
        .then(response => {
      return response.json();
      
    })
   .then(responseJson => {
     if(responseJson.meals){
       return Promise.resolve(responseJson.meals);
     }else{ 
       return Promise.reject(`${keyword} is not found`);
     }
   })
  }
}
export default DataMeal;
    
