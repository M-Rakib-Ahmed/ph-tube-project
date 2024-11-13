// 1 - Fetch, Load and Show Categories on html

// create loadCategories

const loadCategories = () =>{
   // fetch the data
   fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
   .then(res => res.json())
   .then((data) => displayCategoris(data.categories))
   .catch((error) => console.log(error))
    
}

const displayCategoris = (categories) =>{
  const categorisContainer = document.getElementById('categoris')  
 categories.forEach(element => {
    console.log(element);
    // create a button
    const button = document.createElement('button')
    button.classList = 'btn'
    button.innerText = element.category
    // add button to catagoris to container
    categorisContainer.append(button)
    
 });
 
    
  }
    
    

// Create displayCategoris

loadCategories()
displayCategoris()