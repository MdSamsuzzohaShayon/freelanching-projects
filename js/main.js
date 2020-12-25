console.log(window.location.pathname);
// JAVASCRIPT FOR INDEX PAGE 
if (window.location.href == '/index.html') {
    console.log("this is index page");
}

// JAVASCRIPT FOR ORDER PAGE 
if (window.location.href == '/order.html') {
    console.log("this is order page");
    orderProcess();
}







// ORDER START 
const step = document.querySelectorAll(".step");
const nextStep = document.querySelectorAll('.next-step');
const proBarProgress = document.getElementById('pro-bar-progress');
const dotText = document.querySelectorAll('.dot-text');




let currentStep = 0;
let progressPercentage = 0;
let clickable = [];








function orderProcess() {
    step.forEach(s => s.style.display = "none");
    step[currentStep].style.display = "block";
    console.log("Progress percentage: ", progressPercentage);



    // EVENT FOR STEP 
    console.log("Next step: ", nextStep.length);
    nextStep.forEach((ns, nsI) => {
        ns.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(dotText[currentStep]);
            clickable.push({ id: currentStep, isClickable: true });
            progressPercentage += 16;
            proBarProgress.style.width = progressPercentage.toString() + "%";
            console.log("Clicked element: " + e.target, "Index of step: " + nsI);
            if (currentStep >= nextStep.length - 1) {
                console.log("You are completed with the process");
                clickable = [];
            } else {
                step[currentStep].style.display = "none";
                currentStep++;
                step[currentStep].style.display = "block";
            }
            console.log("Clickable array: ", clickable);
        });
    });











    // EVENT FOR DOT TEXT 
    console.log("Dot text: ", dotText);
    dotText.forEach((dt, dtI) => {
        console.log("Dot text: " + dt, "Dot text index: " + dtI);
        dt.addEventListener('click', e => {
            e.preventDefault();
            // console.log("Clickable array from dot text: ", clickable);
            console.log("Dot Item Index: ", dtI);
            // CHECK FOR DOT TEXT INDEX IS INSIDE ARRAY OR NOT 

            // CHECK FOR THIS ITEM ID HAS INSIDE CLICKABLE 
            if (clickable.length > 0 && clickable[dtI].id === dtI && clickable[dtI].isClickable == true) {
                console.log("Clickable array index: ", clickable[dtI].id);
                console.log("hello");
                console.log("Current step of dot text before: ", currentStep);
                step[currentStep].style.display = "none";
                step[dtI].style.display = "block";
                currentStep = dtI;
                console.log("Current step of dot text after: ", currentStep);
            } else {
                console.log("not clickable");
            }
        });
    });

    // dotText.forEach((dt, dtI)=>{
    //     console.log("hello");
    //     dt.addEventListener((e)=>{
    //         e.preventDefault();
    //         console.log("Dot text : ",dtI);
    //         // if(clickable.id == )
    //     });
    // });
}











// ORDER ENDS 
