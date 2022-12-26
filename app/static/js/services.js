// fetch the Weatherdata
async function getCurrentWeather () {
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=2f304395275f4b16b9b174317221612&q=Ghent&aqi=no");
    const data = await response.json();
    console.log(data);
  }


  getCurrentWeather = async () => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=28ec16b97de640a3aae234209221912&q=Ghent&aqi=no `);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
};
