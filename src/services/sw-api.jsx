

async function getStarships() {
    try {
        const response = await fetch('https://swapi.dev/api/starships/')
        const data = await response.json()
        const ships = data.results
        
        return ships
    } catch (err) {
        console.log(err);
    }
}



  

export default getStarships