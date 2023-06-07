let apiKey = "eyJhbGciOiJIUzI1NiJ9"

const btn = document.getElementById('movie');

   btn.addEventListener('click', () => {

    //pegar termo digitado pelo usuario
    const searchTerm = document.getElementById('movieInput').value;

    //chamar api
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
    .then(response =>{
        //pegar resultados da api
        const movie = response.data.results;
        const image_path = "https://image.tmdb.org/t/p/w500/"


        //mostrar no frontend
        const divResult = document.getElementById('resultado');
        divResult.innerText = "";
        movie.forEach(movie => {  
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<div class="card" style="width: 18rem;">
                <img src="${image_path}${movie.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p class="card-text">${movie.title}</p>
                    </div>
                </div>`
            divResult.appendChild(itemElement);
        }) 

        console.log(movie);
    })
    .catch(error => {
        console.log(error);
    })
   })
   
    

