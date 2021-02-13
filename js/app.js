const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchNASAData = async () => {
    try {
      const response = await fetch(`${url}${api_key}`);
      const data = await response.json();
      console.log('NASA APOD data', data);
      displayData(data);
    } 
    catch (error) {
      console.log(error)
    }
  }
  const displayData = data => {
    document.getElementById('title').textContent = data.title;
    let date = new Date(data.date);
   // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = data.date //date.toLocaleDateString('pt-BR',options).toUpperCase();
    if (data.media_type=="video"){     
      document.getElementById("player").style.visibility = "visible";
      document.getElementById('player').src = data.url;
    }
    else{
      document.getElementById("picture").style.visibility = "visible";
      document.getElementById('picture').src = data.hdurl;
    }
    document.getElementById('explanation').textContent = data.explanation;
  }
  document.getElementById("player").style.visibility = "hidden";
  document.getElementById("picture").style.visibility = "hidden";
  fetchNASAData();
