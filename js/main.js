// PROMPT JSVASCRIPT START
//  ALL SUBJECT OF LIFE 
// const health = document.getElementById('health');
// const career = document.getElementById('career');
// const love = document.getElementById('love');
// const spirituality = document.getElementById('spirituality');
// const family = document.getElementById('family');
// const money = document.getElementById('money');
// const fun = document.getElementById('fun');
// const friends = document.getElementById('friends');
// console.log("Health: ", health);
// console.log("career: ", career);
// console.log("love: ", love);
// console.log("spirituality: ", spirituality);
// console.log("family: ", family);
// console.log("money: ", money);
// console.log("fun: ", fun);
// console.log("friends: ", friends);
// let lifeTopic = [health, career, love, spirituality, family, money, fun, friends];
let lifeTopic =  document.querySelectorAll(".life-topic");


// DISPLAY LIFE TOPIC ONE BY ONE 

console.log("Life topic: ", lifeTopic.length);
let currentTopic = 0;
// MAKE DISPLAY NONE FOR ALL OF THEM 
lifeTopic.forEach(lt => lt.style.display = "none");
lifeTopic[currentTopic].style.display = 'block';





// ADD EVENT LISTENER FOR ALL MARK 1 TO 10 AND EXTRACTING THE VALUE 
const mark = document.querySelectorAll(".mark");
console.log("Mark :", mark);
mark.forEach((m, index) => {
    console.log("index of mark: ", index);
    m.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("index of mark: ", index);
        console.log("event value: ", e.target.childNodes[0].textContent);
        const markValue = e.target.childNodes[0].textContent;
        console.log("mark value: ", markValue);
        // if(markValue == 2){
        //     console.log("Mark value is 2");
        // }
        console.log("life topic: ", lifeTopic.length);
        console.log("Current: ", currentTopic);
        lifeTopic[currentTopic].style.display = 'none';
        if (currentTopic >= lifeTopic.length -1) {
            // BLOCK SOME AREA AND SHOW FINAL DISPLAY 
            console.log("no more questuon");
        } else {
            currentTopic++;
            lifeTopic[currentTopic].style.display = 'block';
        }
    })
    // console.log(m.childNodes[0].textContent);
});



const skip = document.getElementById("skip");
console.log("skip :", skip);

const date = document.querySelectorAll("date");
console.log("Date :", date);


// PROMPT JAVASCRIPT ENDS 














// CHART JS POLAR AREA CHART START 
function drawGraph() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            // CONGE LABEL OF COLORS AND BE AWARE OF HOW MANY COLORS NEED 
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: '# of Votes',
                    // DYNAMICALLY CHANGE THE VALUE OF DATA 
                    data: [10, 9, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }

            ]
        },
        options: {
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            },
            scale: {
                // ticks: {
                //     beginAtZero: true,
                //     min: 0,
                //     max: 10,
                //     // stepSize: 20
                // },
                pointLabels: {
                    fontSize: 18
                }
            },
            legend: {
                position: 'right',
                align: 'center'

            },

            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // },
            responsive: false
        }
    });
}


// CHART JS POLAR AREA CHART START 
