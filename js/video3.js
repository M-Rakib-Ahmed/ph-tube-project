// Load categores show button 

const loadCategoris = () =>{
    // fetch to dada
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCategors(data.categories)
    )
    .catch((error) => console.log(error))
    
}


// create a display categoris
const displayCategors =(categoris) =>{
    const categoresContanier = document.getElementById('gotegies');
    categoris.forEach(element => {
        console.log(element);
        // create daynamic button
       const button = document.createElement('button')  
       button.classList = 'btn'
       button.innerText = element.category
       categoresContanier.append(button)
        
    });
}


loadCategoris()