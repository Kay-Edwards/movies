window.addEventListener('DOMContentLoaded', () => {
    const moviesAPI = "https://api.themoviedb.org/3/discover/movie?api_key=3c8d31b949ad58738c6e56fd0522a70a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    fetch(moviesAPI)
    .then(respone => respone.json())
    .then(data => renderImages(data.results))
    
    const work = document.getElementById("submit2");
    work.addEventListener('click', movieFinder )
    



   })
  
   function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
  }

  function onDragOver(event) {
    event.preventDefault();
  }
  function onDrop(event) {
    event.preventDefault()
    const id = event
      .dataTransfer
      .getData('text');
      
      draggableElement = document.getElementById(id);
    
     
      const dropzone = event.target;
      dropzone.appendChild(draggableElement);
    event
    .dataTransfer
    .clearData();
  }
    
  
function movieFinder() {
    const input2 = document.getElementById('code2');
    getpokemon(input2.value)
}

//images.src = `${data.poster_path}`
function renderImages(data){
    console
    let movieImages = document.querySelectorAll('img')
    for(let i = 0; i < movieImages.length; i++){
        movieImages[i].src = `https://image.tmdb.org/t/p/w500/${data[i].poster_path}`
        // console.log(data)
    }

    }


    function getpokemon(pokemon){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=3c8d31b949ad58738c6e56fd0522a70a&language=en-US&query=${pokemon}&page=1&include_adult=false`)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            let movieId = data.results[0].id
            document.getElementById('summary').innerHTML = `
            <h5>${data.results[0].original_title}</h5>
            <img src = 'https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}' width = "100%" >
            <p id="text">${data.results[0].overview}</p>
            <p id = "text"> Release ${data.results[0].release_date} </p>
            `
            test(movieId)
            function test(movieId){
                const moviesAPI = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=3c8d31b949ad58738c6e56fd0522a70a`
                fetch(moviesAPI)
                .then(function(respone){
                    return respone.json()
                })
                .then(function(data){
                document.getElementById('link').innerHTML = `
                <a href=${data.results.US.link}>Check where you can watch this</a>
                `
                })
            }
        })
    
    }
    
    