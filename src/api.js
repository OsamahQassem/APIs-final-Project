
const url = 'https://api.tvmaze.com/shows/169/cast';
async function getData(){
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    return data;
}

// getData();