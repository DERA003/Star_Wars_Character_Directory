function getRandomImages(){
const pexelKey = ""
}




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
        data.results.forEach(character => {
          const  characterHTML = `
              <div class="character">
                 <img src="${character.gender === 'female' ? 'https://csihospitalbangalore.org/sites/default/files/media/image/female_1.png' : "https://th.bing.com/th/id/R.bf36db8bcc873ec68feb1276666d5a40?rik=Qavcd7rNFochWA&pid=ImgRaw&r=0" }"alt="${character.name}"/>
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