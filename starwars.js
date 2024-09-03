const images = [
    "https://vignette.wikia.nocookie.net/star-wars-extended-universe/images/3/3d/LukeSkywalker.png/revision/latest?cb=20200125105040",
    "https://th.bing.com/th/id/R.490f515c02460a5eb59163ffb26e1eff?rik=Fzr0NwBJSQLjPA&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.nh5a2YG-H0h1p-YQr2ILRQHaLz?w=124&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0bc3f0bd-bb82-4799-bb3f-fb01aa4f6c4d/dbwsppz-1f4af0ad-beef-4f4e-8efe-d4e39207da42.jpg/v1/fit/w_750,h_1124,q_70,strp/darth_vader_by_adenry_dbwsppz-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjM5NyIsInBhdGgiOiJcL2ZcLzBiYzNmMGJkLWJiODItNDc5OS1iYjNmLWZiMDFhYTRmNmM0ZFwvZGJ3c3Bwei0xZjRhZjBhZC1iZWVmLTRmNGUtOGVmZS1kNGUzOTIwN2RhNDIuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xhf4bLLEQI1g41lBG2zLCtCz5zK-PV589QUO1lOnSN4",
    "https://th.bing.com/th/id/R.b83e256e348c5952d16c317a38be2e2d?rik=pMdZcSFyeQc7mg&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31800000%2fprincess-leia-princess-leia-organa-solo-skywalker-31897480-2026-2560.jpg&ehk=fqnc8%2b3yr3C1z92iYW3wm4InDqbfukJSF860JuFHN7I%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.842c52ad92d955afbf06af189fda6b02?rik=86OUaXkOclQ%2bLw&riu=http%3a%2f%2fimg3.wikia.nocookie.net%2f__cb20080313203444%2fstarwars%2fimages%2f3%2f33%2fYoung_owen.jpg&ehk=1mkaFC9qNyF1s%2fHTuPRWX6oWhK2XJF7Pn3zG6PiNEy0%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.zwgYDXxcwsHLo1eVdxZ_KQAAAA?rs=1&pid=ImgDetMain",
    "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2023/04/STAR-WARS-THE-BLACK-SERIES-R5-D4-4.jpg",
    "https://th.bing.com/th/id/OIP.dTKMXyMZm3lmJ4TErXKgmwAAAA?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.kzui0EE1XcarsabzUHratQHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
]


function starWarsCharacters() {
    fetch('https://swapi.dev/api/people')
	.then(response => response.json())
	.then((data) => {
        // checking if my API is working
        console.log(data.results)

        // to display character names & dummies

        // created a container in the Html character list:this is where the characters would be displayed
        const characterList = document.getElementById("character_list")
        // to get individual characters i looped through the data results
        data.results.forEach((character, index) => {
          const  characterHTML = `
              <div class="character">
                 <img src="${images[index]}"alt="${character.name}"/>
                 <h2>${character.name}</h2>
                 <button>See More...</button>
              </div>
          `
           characterList.innerHTML += characterHTML

        });

        // to get all the elements inthe div class character
        const characterElements = document.querySelectorAll(".character")
        // looping through to get each element
        // two parameters one is the current element,the next is the index of the element
        characterElements.forEach((element,index)=>{
        //  to add an event listener
        element.addEventListener('click',() => {
            const characterUrl = data.results[index].url
            // to fetch the API of the current element(characterUrl)
            fetch(characterUrl)
            .then(response => response.json())
            .then(character =>{
                const detailsHTML = `
                   <h1>Star Wars Actor</h2>
                   <img src="${character.gender === 'female' ? 'https://csihospitalbangalore.org/sites/default/files/media/image/female_1.png' : "https://th.bing.com/th/id/OIP.rmim2jYzNpSCslo60INohQHaF9?rs=1&pid=ImgDetMain" }"alt="${character.name}"/>
                   <h2>${character.name}</h2>
                   <p>Gender:${character.gender}</p>
                   <p>Height:${character.height}</p>
                
                `
                document.getElementById("character_details").innerHTML = detailsHTML
            })
        })
        })
        const modal = document.getElementById("modal")
        // get the each of the characterElements
        characterElements.forEach((element) => {
        //  add the click event listener
          element.addEventListener('click', () => {
          // set the modal display to block
           modal.style.display = "block" 

         })
      })
      const closeButton = document.getElementById("close")
        // add the event listener to the close button
        closeButton.addEventListener("click", ()=>{
            // set the display back to none
            modal.style.display = "none"
        })

   })

}
starWarsCharacters()