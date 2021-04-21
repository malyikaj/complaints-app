function getData(event){
  let borough = event.target.innerHTML.toUpperCase();
  // console.log(borough);

  let numOfComplaints = document.getElementById("input").value;
  // console.log(numOfComplaints);

  if(!numOfComplaints) {
    numOfComplaints = 10;
  }

  fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough="
  + borough
  + "&$limit="
  + numOfComplaints)

  .then((res) => res.json())
  .then((data) => displayData(data))
  .catch((err) => console.log(err))
}

function displayData(data) {
  let output = '';

  for(let i = 0; i < data.length; i++) {
    let des = data[i].descriptor;
    let reso = data[i].resolution_description;

    output += ` <tr><td>${des}</td> 
                <td>
                  <details>
                    <summary id ="police-action"> What did the police do?</summary>
                    ${reso}
                  </details>
                  </td>
                </tr> `;

      document.querySelector("#complaint").innerHTML = output;

  }
}





















// let borough = 'BROOKLYN'
// let limit = 10
// let agency = 'NYPD'

// let api = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?"
// + "agency="
// + agency
// + "&borough="
// + "&$limit="
// + limit

// fetch(api)('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX')
//     .then((data) => data.json())
//     .then((formattedData) => {
//       displayData(formattedData)
// })

// function displayData(data) {
//   let propertyName
//   console.log(data)
  
// }

// https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=3-1-1


// function getData(event){
//   let borough=event.target.innerHTML.toUpperCase();
//   console.log(borough)
  
// }


// let Manhattan = async()  => {
//   let response = await $.ajax({
//     url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=MANHATTAN" , 
//     type: "GET",
//     data: {
//       "$limit" : 5000,
//       "$$app_token" : "YOURAPPTOKENHERE"
//     }
//   }).done(function(data) {
//   alert("Retrieved " + data.length + " records from the dataset!");
//   console.log(data);
//   });

// }






// fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS")
//   .then(response => response.json())
//   .then(data => console.log(data.message))
//   const select = document.getElementById('breeds');
//   const card = document.querySelector('.card'); 
//   const form = document.querySelector('form');


//   fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));



//   document.getElementById('ptag').addEventListener
//   ('click', getText);

//   document.getElementById('ptag').addEventListener
//   ('click', getText);
  
//   function getText() {
//     fetch('sample.txt')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//       document.getElementById('output').innerHTML = data;
//   }
//   .catch((err) => console.log(err))

// }

















  
  // ------------------------------------------
  //  FETCH FUNCTIONS
  // ------------------------------------------
  // function fetchData(url) {
  //   return fetch(url)
  //             .then(res => res.json())
  // }
  
  
  
  // fetch('https://dog.ceo/api/breeds/list') 
  //   .then(response => response.json())
  //   .then(data => generateOptions(data))
    
  // fetch('https://dog.ceo/api/breeds/image/random')
  //   .then(response => response.json())
  //   .then(data => generateImage(data.message))
  
  
  // // ------------------------------------------
  // //  HELPER FUNCTIONS
  // // ------------------------------------------
    
  // function generateOptions(data) {
  //   const options = data.map(item => `
  //     <option value ='${item}'>'${item}</option>
  //  `).join('');
  //   selet.innerHTML = options;
  // } 
    
  
  // function generateImage(data){
  //   const html = `
  //     <img src = '${data}' alt>
  //     <p>Click to view images of ${select.value}s</p>
  // `; 
//     card.innerHTML = html;
//   }        
  



  

// let Manhattan = async()  => {
//   let response = await $.ajax({
//     url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=MANHATTAN" , 
//     type: "GET",
//     data: {
//       "$limit" : 5000,
//       "$$app_token" : "YOURAPPTOKENHERE"
//     }
//   }).done(function(data) {
//   alert("Retrieved " + data.length + " records from the dataset!");
//   console.log(data);
//   });

// }


// https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX


// $.ajax({
//   url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
//   type: "GET",
//   data: {
//     "$limit" : 5000,
//     "$$app_token" : "YOURAPPTOKENHERE"
//   }
// }).done(function(data) {
// alert("Retrieved " + data.length + " records from the dataset!");
// console.log(data);
// });


// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if(xhr.readyState === 4 && xhr.status === 200) {
//     var employees = JSON.parse(xhr.responseText);
//     var statusHTML = '<ul class="bulleted">';
//     for (var i=0; i<employees.length; i += 1) {
//       if (employees[i].inoffice === true) {
//         statusHTML += '<li class="in">';
//       } else {
//         statusHTML += '<li class="out">';
//       }
//       statusHTML += employees[i].name;
//       statusHTML += '</li>';
//     }
//     statusHTML += '</ul>';
//     document.getElementById('employeeList').innerHTML = statusHTML;
//   }
// };
// xhr.open('GET', '../data/employees.json');
// xhr.send();


// var roomRequest = new XMLHttpRequest();
// roomRequest.onreadystatechange = function () {
//   if(roomRequest.readyState === 4) {
//     var rooms = JSON.parse(roomRequest.responseText);
//     var statusHTML = '<ul class="rooms">';
//     for (var i=0; i < rooms.length; i += 1) {
//       if (employees[i].available === true) {
//         statusHTML += '<li class="empty">';
//       } else {
//         statusHTML += '<li class="full">';
//       }
//       statusHTML += rooms[i].room;
//       statusHTML += '</li>';
//     }
//     statusHTML += '</ul>';
//     document.getElementById('roomList').innerHTML = statusHTML;
//   }
// };
// roomRequest.open('GET', '../data/rooms.json');
// roomRequest.send();



// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if(xhr.readyState === 4) {
    
//   }
// };

// xhr.open('GET', 'data/employees.json');
// xhr.send();


// createElement
// append child
// AJAX call
// Fetch Call
// async
// .then (promise)
// json


// let getBron = async () =>{
//     let response = await $.ajax({
//         url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BRONX",
//         type: "GET",
//         data: {
//         "$limit" : 10,
//         "$$app_token" : "KPj1s9hPsOG2ny8RErUOtsRrA"
//         }
//     }).done(function(data) {
//     alert("Retrieved " + data.length + " records from the dataset!");
//     console.log(data);
//     });
//     return response
// }