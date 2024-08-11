document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.button-group button').forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            document.querySelectorAll('.button-group button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            this.classList.add('active');
            const targetContent = document.querySelector(`#${this.dataset.target}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});

document.querySelector('.calculate').addEventListener('click', function() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    
    if (height > 0 && weight > 0) {
        let bmi = weight / ((height / 100) ** 2);
        positionTriangle(bmi);
    } else {
        alert("Please enter a valid value.");
    }
});

function positionTriangle(bmi) {
    let bmiTriangle = document.getElementById('bmi-triangle');
    
    if (bmi < 18.5) {
        bmiTriangle.style.left = '26.5%'; // Position for underweight
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiTriangle.style.left = '38%'; // Position for normal weight
    } else if (bmi >= 25 && bmi < 30) {
        bmiTriangle.style.left = '50%'; // Position for overweight
    } else if (bmi >= 30 && bmi < 35) {
        bmiTriangle.style.left = '61.5%'; // Position for obese
    } else {
        bmiTriangle.style.left = '73%'; // Position for extremely obese
    }

    bmiTriangle.style.display = 'block';
}