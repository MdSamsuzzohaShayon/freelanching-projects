const step = document.querySelectorAll(".step");
const nextStep = document.querySelectorAll('.next-step');
const proBarProgress = document.getElementById('pro-bar-progress');




let currentStep = 0;
let progressPercentage = 0;
step.forEach(s => s.style.display = "none");
step[currentStep].style.display = "block";
console.log(progressPercentage);



console.log(nextStep.length);

nextStep.forEach((ns, nsI) => {
    ns.addEventListener('click', (e) => {
        e.preventDefault();
        progressPercentage += 16;
        proBarProgress.style.width = progressPercentage.toString() + "%";
        console.log("Clicked element: " + e.target, "Index of step: " + nsI);
        if (currentStep >= nextStep.length - 1) {
            console.log("You are completed with the process");
        } else {
            step[currentStep].style.display = "none";
            currentStep++;
            step[currentStep].style.display = "block";
        }
    });
});