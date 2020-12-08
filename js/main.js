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
const lifeTopic = document.querySelectorAll(".life-topic");
const skip = document.getElementById("skip");
// console.log("skip :", skip);

const promptBox = document.getElementById('prompt');
const finalResult = document.getElementById("final-result");

const date = document.getElementById("date");
// console.log("Date :", date);


const wheelOfLife = document.getElementById("wheel-of-life");


// DISPLAY LIFE TOPIC ONE BY ONE 

// console.log("Life topic: ", lifeTopic.length);
let currentTopic = 0;
// MAKE DISPLAY NONE FOR ALL OF THEM 
lifeTopic.forEach(lt => lt.style.display = "none");
lifeTopic[currentTopic].style.display = 'block';






// ADD EVENT LISTENER FOR ALL MARK 1 TO 10 AND EXTRACTING THE VALUE 
const mark = document.querySelectorAll(".mark");
// console.log("Mark :", mark);





// INITIAL EMPTY ARRAY, GETTING VALUE FROM PROMPT AND SET TO GRAPH 
let labels = [];
let data = [];
let bgColors = [];
let borderColors = [];
// COLOR ARRAY FOR ONE DIRRERENT DATA AND LEVEL 
let colorArray = ['rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(255, 206, 86, 0.4)', ' rgba(0, 170, 23, 0.4)', 'rgba(153, 102, 255, 0.4)',
    'rgba(255, 128, 0, 0.4)', 'color: rgba(0, 51, 85, 0.4);', '#52522862', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];





let addElement = true;
// if(addElement){}


// skip.addEventListener("")


skip.addEventListener("click", e => {
    e.preventDefault();
    lifeTopic[currentTopic].style.display = 'none';
    currentTopic++;
    // console.log("Current: ", currentTopic);
    lifeTopic[currentTopic].style.display = 'block';
    addElement = false;
});



if (addElement == true) {
    mark.forEach((m, index) => {

        // console.log("index of mark: ", index);
        m.addEventListener('click', (e) => {
            e.preventDefault();
            // console.log("index of mark: ", index);
            // console.log("event value: ", e.target.childNodes[0].textContent);
            const markValue = e.target.childNodes[0].textContent;
            // console.log("mark value: ", markValue);
            // if(markValue == 2){
            //     console.log("Mark value is 2");
            // }
            // console.log("life topic: ", lifeTopic.length);


            console.log("Current: ", currentTopic);
            lifeTopic[currentTopic].style.display = 'none';
            if (currentTopic >= lifeTopic.length - 2) {
                // BLOCK SOME AREA AND SHOW FINAL DISPLAY 
                promptBox.style.display = "none";
                finalResult.style.display = "block";
                // MAKE BIGGER CHART 
                console.log("no more questuon");
                // ELEMENT THAT ARE CHANGING IN THE GRAPH 
                console.log("All data final output: ", { data, labels, bgColors });
                convertHtmlToPDF();
            }

            // CHECK WHICH TOPIC WE ARE ON 
            // console.log("Current life topic question : ", lifeTopic[currentTopic].textContent);
            // ADD THIS LIFE TOPIC TO GRAPH LABEL 
            labels.push(lifeTopic[currentTopic].textContent);
            // console.log("labels array: ", labels);
            // ADD VALUE OF LIFE TOPIC TO DATA 
            data.push(markValue);
            // console.log("data array: ", data);
            // console.log("bg color of array: ", colorArray[currentTopic]);
            bgColors.push(colorArray[currentTopic]);
            // console.log("Background colors array: ", bgColors);
            // console.log("border color of array: ", colorArray[currentTopic]);
            // ARRAY INVERT 
            // borderColors.push(colorArray.reverse()[currentTopic]);
            // console.log("border colors array: ", borderColors);



            drawGraph();

            currentTopic++;
            lifeTopic[currentTopic].style.display = 'block';
        });
        // console.log(m.childNodes[0].textContent);
    });
}








// PROMPT JAVASCRIPT ENDS 














// CHART JS POLAR AREA CHART START 
function drawGraph() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            // CONGE LABEL OF COLORS AND BE AWARE OF HOW MANY COLORS NEED 
            labels,
            datasets: [
                {
                    label: '# of Votes',
                    // DYNAMICALLY CHANGE THE VALUE OF DATA 
                    data,
                    backgroundColor: bgColors
                    // [
                    //     // ADD COLOR DYNAMICALLY 
                    //     'rgba(255, 99, 132, 0.2)',
                    //     'rgba(54, 162, 235, 0.2)',
                    //     'rgba(255, 206, 86, 0.2)',
                    //     'rgba(75, 192, 192, 0.2)',
                    //     'rgba(153, 102, 255, 0.2)',
                    //     'rgba(255, 159, 64, 0.2)'
                    // ]
                    ,
                    borderColor: bgColors
                    // [
                    //     'rgba(255, 99, 132, 1)',
                    //     'rgba(54, 162, 235, 1)',
                    //     'rgba(255, 206, 86, 1)',
                    //     'rgba(75, 192, 192, 1)',
                    //     'rgba(153, 102, 255, 1)',
                    //     'rgba(255, 159, 64, 1)'
                    // ]
                    ,
                    borderWidth: 1
                }

            ]
        },
        options: {
            legend: {
                display: false,
                // labels: {
                //     fontColor: 'rgb(255, 99, 132)'
                // }
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
    //Destroy the previous chart;
    // //Rename the "bar" according to your component
    // if (window.myChart != undefined)window.myChart.destroy();
    // window.myChart = new Chart(ctx, {});



}




// CHART JS POLAR AREA CHART ENDS



// HTML TO PDF USING JAVASCRIPT 
// https://www.youtube.com/watch?v=0bSI9OgYcpQ&t=8s
function convertHtmlToPDF() {
    
    /*
    // FAILED TRY 
    let doc = new jsPDF(
        {
            orientation: "letter",
            // unit: "in",
            // format: [4, 2]
        }
    );
    // let elmentHTML = wheelOfLife.html();
    // let specialElementHandlers = {}


    doc.html(wheelOfLife, {
        callback: function (pdf) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
            document.body.appendChild(iframe);
            iframe.src = pdf.output('datauristring');
        }
    })
    // doc.advancedAPI(doc => {
    //     // your code
    // });

    // doc.save("two-by-four.pdf");
    */


     // IE does not support outerHTML on SVGElement
     if (typeof SVGElement === 'object' && !SVGElement.prototype.outerHTML) {
        Object.defineProperty(SVGElement.prototype, 'outerHTML', {
            get: function () {
                var $node, $temp;
                $temp = document.createElement('div');
                $node = this.cloneNode(true);
                $temp.appendChild($node);
                return $temp.innerHTML;
            },
            enumerable: false,
            configurable: true
        });
    }

    window.onload = function () {
        doRefresh();
    };

    var doRefresh = function () {
        var makePdf = function () {
            var pdf = new jsPDF('p', 'pt', 'c1');
            var c = pdf.canvas;
            c.width = 1000;
            c.height = 500;

            var ctx = c.getContext('2d');
            ctx.ignoreClearRect = true;
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, 1000, 700);

            //load a svg snippet in the canvas with id = 'drawingArea'
            canvg(c, document.getElementById('svg').outerHTML, {
                ignoreMouse: true,
                ignoreAnimation: true,
                ignoreDimensions: true
            });

            return pdf;
        };
        document.getElementById('result').setAttribute('src', makePdf().output('dataurlstring'));
        document.getElementById('source').innerText = makePdf().output();
        //makePdf().save();
    };
    doRefresh();
}
