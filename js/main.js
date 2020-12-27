// ORDER START 
const step = document.querySelectorAll(".step");
const nextStep = document.querySelectorAll('.next-step');
const proBarProgress = document.getElementById('pro-bar-progress');
const dotText = document.querySelectorAll('.dot-text');
const findLocation = document.getElementById('find-location');




let currentStep = 0;
let progressPercentage = 0;
let clickable = [];


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    initilizeWOW();
});


console.log(window.location.pathname);
// JAVASCRIPT FOR INDEX PAGE 
if (window.location.href == '/index.html') {
    console.log("this is index page");
    initilizeWOW();
}

// JAVASCRIPT FOR ORDER PAGE 
if (window.location.href == '/order.html') {
    console.log("this is order page");
    initilizeWOW();
    orderProcess();

}


function initilizeWOW() {
    const wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 30,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();
}
















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

            console.log("Clicked element: " + e.target, "Index of step: " + nsI);
            if (currentStep >= nextStep.length - 1) {
                console.log("You are completed with the process");
                clickable = [];
            } else {
                progressPercentage += 16;
                proBarProgress.style.width = progressPercentage.toString() + "%";
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





    findLocation.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Search find button hit");
        document.getElementById('second-part').style.display = "block";
    });
}




orderProcess();






// ORDER ENDS 
