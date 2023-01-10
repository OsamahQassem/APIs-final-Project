
const url = 'https://api.tvmaze.com/shows';

async function getData(){
try {
    const response = await fetch(url);
    const data = await response.json();
    printData(data)
} catch (error) {
    console.log("Error:" , error.message)
    document.write(`${error.message} 404`)
}
    
};

getData();


function printData(data){
 const content = document.querySelector('#content');
 content.innerHTML = `
   <h2>Find Out </h2>
   <select class= "form-control" onchange = "${getDetails(this.value)}">
   <option>pleas select</option>
   ${data.map((shows) => `<option value ="${shows.id}">${shows.name}</option>`)}
   </select>
`
};



async function getDetails(showId){
    const response = await fetch(`${url}/${showId}`)
    const data = await response.json();

    const showDetails = document.querySelector('#content');
    showDetails.innerHTML = `
   <h3>${data.name}</h3>
   <p>${data.summary}<p>
   <div class="show-img-place-holder" ><img src="${data.image.medium}"/>
   </div>

   <h6>Genres:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${data.genres}</h6>
   <h6>Type:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${data.type}</h6>
   <h6>Language:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${data.language}</h6>
   <h6>Premiered:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${data.premiered}</h6>
   <h6>Ended:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${data.ended}</h6>
   <h6>Status:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${data.status}</h6>
   <h6>AverageRuntime:   ${data.averageRuntime}</h6>
   <h6> Watch The Trailer: <a href= ${data._links.previousepisode.href}>${data.name}</a> </h6>
   `
  
    };