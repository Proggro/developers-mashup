
// fetch the Weatherdata

  async function getCurrentWeather () {
  const response = await fetch("http://api.weatherapi.com/v1/current.json?key=28ec16b97de640a3aae234209221912&q=Ghent&aqi=no");
  const data = await response.json();
  displayWeather(data.current);
}


getCurrentWeather();

function displayWeather (weather) {
  document.getElementById("weather").innerHTML = `${weather.temp_c}°c`;
}

//fetch hondentoiletten in Ghent
async function getDogToilets() {
  const response = await fetch("https://data.stad.gent/api/records/1.0/search/?dataset=hondentoilletten-gent&q=&rows=1000&facet=soort&facet=bestaand");
  const data = await response.json();
  displayDogToilets(data.nhits);
  dogToiletName(data.parameters);
};


getDogToilets();

function displayDogToilets(dogtoilet) {
  document.getElementById("dogtoilets").innerHTML = `${dogtoilet}`
};

function dogToiletName (toiletten) {
  document.getElementById("name").innerHTML = `${toiletten.dataset}`
}

async function fetchUsers() {
  const response = await fetch('./app/static/data/pgm.json');
  const data = await response.json();
  console.log(data);
  renderHMTLFOrUsers(data);
  usersPictures();
  getUserInfo();
}

fetchUsers()


//github logo
function githubImage () {
  document.getElementById("github").innerHTML = `
  <a href="https://www.github.com"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""></a>
  `
};

githubImage();

function getUserInfo () {
  document.getElementById("userinfo").innerHTML = 
  `
    <h1>User</h1>
    <img class="userimages_fordisplay" src="https://randomuser.me/api/portraits/women/67.jpg" alt="">

  `
};

getUserInfo();

let userclicks = renderHMTLFOrUsers;

renderHMTLFOrUsers.addEventListener("click", function () {
  alert("you have cliked me")
})



function renderHMTLFOrUsers (user) {
  document.getElementById("users").innerHTML =  
  `
  
  <input type="text" id="myInput" onkeyup="searchFunction()" placeholder="Type user name..."> 
  <ul id="myUL">
    <li><a>${user[0].firstname} ${user[0].lastname}</a>
          <img class="userimages" src="https://randomuser.me/api/portraits/women/78.jpg" alt="">
    </li>

    <li><a>${user[1].firstname} ${user[1].lastname}</a>
          <img class="userimages" src="https://randomuser.me/api/portraits/men/59.jpg" alt="">
    </li>
  
    <li><a>${user[2].firstname} ${user[2].lastname}</a>
          <img class="userimages" src="https://randomuser.me/api/portraits/men/58.jpg" alt="">

    </li>
    <li><a>${user[3].firstname} ${user[3].lastname}</a>
          <img class="userimages" src="https://randomuser.me/api/portraits/women/42.jpg" alt="">

    </li>
    <li><a>${user[4].firstname} ${user[4].lastname}</a>
          <img class="userimages" src="https://randomuser.me/api/portraits/women/67.jpg" alt="">

    </li>
    <li><a>${user[5].firstname} ${user[5].lastname}</a>
          <img class="userimages" src="https://randomuser.me/api/portraits/women/85.jpg" alt="">

    </li>
    <li><a>${user[6].firstname} ${user[6].lastname}</a>
          <img class="userimages" src="https://randomuser.me/api/portraits/men/60.jpg" alt="">

    </li>
    <li><a>${user[7].firstname} ${user[7].lastname}</a>
          <img class="userimages" src="https://randomuser.me/api/portraits/men/71.jpg" alt="">

    </li>

  </ul>
  `
}
renderHMTLFOrUsers();



function searchFunction() {
  // Variabelen declareren
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  
  //Loopen over alle items en verberg de gene die niet overeenkomen met de zoekquery
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
  