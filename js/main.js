const myChart = document.getElementById('myChart');
const lifeTopic = document.querySelectorAll(".life-topic");
const skip = document.getElementById("skip");
const promptBox = document.getElementById('prompt');
const finalResult = document.getElementById("final-result");
const date = document.getElementById("date");
const wheelOfLife = document.getElementById("wheel-of-life");
const btnBox = document.getElementById("button-box");
const download = document.getElementById("download");
const reload = document.getElementById("reload");
// ADD EVENT LISTENER FOR ALL MARK 1 TO 10 AND EXTRACTING THE VALUE 
const mark = document.querySelectorAll(".mark");

// DISPLAY LIFE TOPIC ONE BY ONE 
let currentTopic = 0;
// MAKE DISPLAY NONE FOR ALL OF THEM 
lifeTopic.forEach(lt => lt.style.display = "none");
lifeTopic[currentTopic].style.display = 'block';

// DECALARING VARIABLE 
// INITIAL EMPTY ARRAY, GETTING VALUE FROM PROMPT AND SET TO GRAPH 
let labels = [];
let data = [];
let bgColors = [];
let borderColors = [];
// COLOR ARRAY FOR ONE DIRRERENT DATA AND LEVEL 
let colorArray = ['rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(255, 206, 86, 0.4)', ' rgba(0, 170, 23, 0.4)', 'rgba(153, 102, 255, 0.4)',
    'rgba(255, 128, 0, 0.4)', 'rgba(0, 51, 85, 0.4)', 'rgba(85, 0, 0, 0.4)', 'rgba(85, 0, 52, 0.4)', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
const now = new Date();
const dateTime = now.getDay() + " - " + now.getMonth() + " - " + now.getFullYear();
date.textContent = dateTime.toString();

// SKIP ANY QUESTION
skip.addEventListener("click", e => {
    e.preventDefault();
    if (currentTopic >= lifeTopic.length - 1) {
        // BLOCK SOME AREA AND SHOW FINAL DISPLAY 
        displayFinal();
        return;
    }
    lifeTopic[currentTopic].style.display = 'none';
    currentTopic++;
    lifeTopic[currentTopic].style.display = 'block';
    addElement = false;
});

// GIVING MARK TO THE QUESTION 
mark.forEach((m, index) => {

    m.addEventListener('click', (e) => {
        e.preventDefault();

        const markValue = e.target.childNodes[0].textContent;
        console.log("Current: ", currentTopic);
        lifeTopic[currentTopic].style.display = 'none';
        if (currentTopic >= lifeTopic.length - 1) {
            addDataToGraph(currentTopic, markValue);
            // BLOCK SOME AREA AND SHOW FINAL DISPLAY 
            displayFinal();
            return;
        }

        // ADD THIS LIFE TOPIC TO GRAPH LABEL 
        addDataToGraph(currentTopic, markValue);
        drawGraph();

        currentTopic++;
        lifeTopic[currentTopic].style.display = 'block';
    });
    // console.log(m.childNodes[0].textContent);
});




function addDataToGraph(currentTopic, markValue) {
    labels.push(lifeTopic[currentTopic].textContent);
    data.push(markValue);
    bgColors.push(colorArray[currentTopic]);
}



function displayFinal() {
    // BLOCK SOME AREA AND SHOW FINAL DISPLAY 
    promptBox.style.display = "none";
    btnBox.style.display = 'block';
    finalResult.style.display = "block";
    // MAKE BIGGER CHART 
    console.log("no more questuon");
    download.addEventListener('click', e => convertHtmlToPDF());
    // ELEMENT THAT ARE CHANGING IN THE GRAPH 
    console.log("All data final output: ", { data, labels, bgColors });
    drawGraph();
}
// PROMPT JAVASCRIPT ENDS 

reload.addEventListener('click', e => {
    location.reload();
});

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
                    backgroundColor: bgColors,
                    borderColor: bgColors,
                    borderWidth: 1
                }
            ]
        },
        options: {
            legend: {
                display: false,
            },
            scale: {
                pointLabels: {
                    fontSize: 18
                }
            },
            legend: {
                position: 'right',
                align: 'center'

            },
            responsive: true
        }
    });
}
// CHART JS POLAR AREA CHART ENDS



// HTML TO PDF USING JAVASCRIPT 
// https://www.youtube.com/watch?v=0bSI9OgYcpQ&t=8s
function convertHtmlToPDF() {
    // TAKING SCREENSHOT OF CANVAS 
    const screenshot = async () => {
        const doc = new jsPDF('p', 'pt', 'letter');
        const canvas = await html2canvas(myChart);
        const imgData = canvas.toDataURL('image/png');
        // ADD IMAGE AND FROM HTML DOES NOT WORK TOGETHER 
        doc.fromHTML(wheelOfLife, 200, 25);
        doc.setFontSize(40);
        doc.addImage(imgData, "PNG", 75, 140); // TOP POSITION AND LEFT POSITION
        doc.save("life-of-wheel.pdf");
    }
    screenshot();
}
