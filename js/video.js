// Fetch, Load and Show Categories on html

// create loadCAtegories 

const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then(data => DisplayCategories(data.categories))
    .catch((error) => console.log(error)
    )
}

const loadvideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then(data => displayVideos(data.videos)
    )
    .catch((error) => console.log(error)
    )
}

const cardDame = {
    "category_id": "1001",
    "video_id": "aaab",
    "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
    "title": "Midnight Serenade",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
            "profile_name": "Noah Walker",
            "verified": false
        }
    ],
    "others": {
        "views": "543K",
        "posted_date": ""
    },
    "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
}

const displayVideos =(videos) =>{
    const videosContainer = document.getElementById('videos')
    console.log(videos);
    for(const video of videos){
        console.log(video);
        const card = document.createElement('div')
        card.classList = "card card-compact "
        card.innerHTML = `
        <figure class = "h-[200px]">
    <img 
      src=${video.thumbnail}
      class = "h-full w-full object-cover"
      alt="Shoes"/>
  </figure>
  <div class="px-0 py-2 flex gap-2">
  <div>
  <img class ="w-10 h-10 rounded-full object-cover" src =${video.authors[0].profile_picture}/>
  </div>
    
  <div>
  <h2 class ="font-bold">${video.title}</h2>
  <div class ="flex items-center gap-2">
  <P class ="text-gray-400 ">${video.authors[0].profile_name}</p>
  ${video.authors[0].verified === true? '<img class = "w-5" src ="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>': ""}
  </div>
  <P></p>
  </div>
    
  </div>
        
        
  `
  videosContainer.append(card)
        
    }
   

}



// create DisplayCategories

const DisplayCategories = (categories) => {
    const cateContainer = document.getElementById('categories');

    for(const item of categories){
        console.log(item);
        // {
    //     "category_id": "1001",
    //     "category": "Music"
    // }

    //create a button 
    const button = document.createElement('button');
    button.classList = "btn";
    button.innerText = item.category
   // add button to category
   
   cateContainer.append(button)
        
    } 
}


loadCategories()
loadvideos()