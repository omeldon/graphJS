console.log("Hello World!");

// Current date for title
const dateElement = document.getElementById('date');

let currentDate = new Date();

console.log(currentDate);

let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '99b2e638c2msh9324fd54bb209fbp1053e8jsn34d06d5e0a43',
		'X-RapidAPI-Host': 'twitter-trends5.p.rapidapi.com'
	},
	body: new URLSearchParams({woeid: '23424934'})
};

// =========================
// dummy data to comment out
// =========================

// let myPost = {
//    name: "Lee Sung Kyung",
//    queryUrl: "search?q=%22Lee+Sung+Kyung%22",
//    volume: 31799,
//    followers: 3895734
// }

// console.log(myPost);
// console.log(myPost.name);
// console.log(myPost.queryUrl);
// console.log(myPost.volume);
// console.log(myPost.followers);

// let graphData = [
//     {name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
//     {name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
// ];

// console.log(graphData);
// console.log(graphData[1]);

// console.log(graphData[1].name);
// console.log(graphData);

// graphData.push(myPost);
// console.log(graphData);

// ================================
// end of dummy data to comment out
// ================================

let graphData = []

fetch(url, options)
.then(res => res.json())
.then(data => {
    
    console.log(data);

    for (let i = 0; i < 25; i++) {
        graphData.push(
            {
                "name": data.trends[i].name,
                "volume": data.trends[i].volume
            }
        )
    }

    let topics = graphData.map(object => {
        console.log(object);
        console.log(object.name);
        return object.name
    })

    console.log(topics);

    let volumes = graphData.map(object => {
        return object.volume
    })

    console.log(volumes);

    const myChart = document.getElementById('myChart');

     let barChart = new Chart(myChart, {
        type: 'bar',
        data: {
          labels: topics,
          datasets: [{
            label: '# of tweets/xeets',
            data: volumes,
            borderWidth: 2,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            hoverBackgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ]
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
    });

});

// ===========================
// copy paste to fetch request
// ===========================

// console.log(graphData.length);

// for (let i = 0; i < 2; i++) {
//     console.log(graphData[i]);
//     console.log(graphData[i].name);
//     console.log(graphData[i].queryUrl);
//     console.log(graphData[i].volume);
// }

// let topics = graphData.map(object => {
//     console.log(object);
//     console.log(object.name);
//     return object.name
// })

// console.log(topics);

// let volumes = graphData.map(object => {
//     return object.volume
// })

// console.log(volumes);

// const myChart = document.getElementById('myChart');

//  let barChart = new Chart(myChart, {
//     type: 'bar',
//     data: {
//       labels: topics,
//       datasets: [{
//         label: '# of tweets/xeets',
//         data: volumes,
//         borderWidth: 2,
//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(255, 205, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(201, 203, 207, 0.2)'
//         ],
//         borderColor: [
//             'rgb(255, 99, 132)',
//             'rgb(255, 159, 64)',
//             'rgb(255, 205, 86)',
//             'rgb(75, 192, 192)',
//             'rgb(54, 162, 235)',
//             'rgb(153, 102, 255)',
//             'rgb(201, 203, 207)'
//         ],
//         hoverBackgroundColor: [
//             'rgb(255, 99, 132)',
//             'rgb(255, 159, 64)',
//             'rgb(255, 205, 86)',
//             'rgb(75, 192, 192)',
//             'rgb(54, 162, 235)',
//             'rgb(153, 102, 255)',
//             'rgb(201, 203, 207)'
//         ]
//       }]
//     },
//     options: {
//       indexAxis: 'y',
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
// });
// ==================================
// end of copy paste to fetch request
// ==================================