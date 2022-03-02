indow.addEventListener('DOMContentLoaded', () => {

    
    const work = document.getElementById("submit2");
    work.addEventListener('click', movieFinder )
})
function movieFinder() {
    const input2 = document.getElementById('code2');
    getpokemon(input2.value)
}




function getpokemon(pokemon){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=3c8d31b949ad58738c6e56fd0522a70a&language=en-US&query=${pokemon}&page=1&include_adult=false`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let movieId = data.results[0].id
        document.getElementById('box').innerHTML = `
        <h5>${data.results[0].original_title}</h5>
        <img src = 'https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}' width = "240px" height = "200px">
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
            document.getElementById('box1').innerHTML = `
            <a href=${data.results.US.link}>Check where you can watch this</a>
            `
            })
        }
    })

}
