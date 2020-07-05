class DataCategory{
    // beef Data
    static categorybeef(){
        return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=beef`,{
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
//   breakfast data
static categorybreakfast(){
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast`,{
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

//   chicken data
static categorybreakfast(){
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken`,{
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

//dessert data
static categorybreakfast(){
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert`,{
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

  //Lamb data
static categorybreakfast(){
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=lamb`,{
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

  //vegetarian data
static categorybreakfast(){
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian`,{
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
export default DataCategory;
    
