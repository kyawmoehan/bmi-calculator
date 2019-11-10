// height sloder
var slider_height = document.getElementById("height");
var output_height = document.getElementById("height-value");
output_height.innerHTML = slider_height.value;

slider_height.oninput = function() {
    output_height.innerHTML = slider_height.value;

}

// weight slider
var slider_weight = document.getElementById("weight");
var output_weight = document.getElementById("weight-value");
output_weight.innerHTML = slider_weight.value;

slider_weight.oninput = function() {
    output_weight.innerHTML = slider_weight.value;

}


document.getElementById("calculate-bmi").addEventListener("click", function() {
    // check gender
    var genders = document.getElementsByName('gender');
    for (i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            var gender = genders[i].value;
        }

    }
    // get height and weight
    var height = document.getElementById("height-value").innerHTML;
    var weight = document.getElementById("weight-value").innerHTML;

    // calculate bmi
    var bmi = (weight / height / height) * 10000;
    document.getElementById("result-bmi").innerHTML = bmi.toFixed(2);

    if (gender == "male") {
        console.log(bmi);
        if (bmi < 18.5) {
            document.getElementById("img-result").setAttribute("src", "images/result/thinmen2.png");
            document.getElementById("type").innerHTML = "UnderWeight";
        } else if (bmi <= 25 && bmi >= 18.5) {
            document.getElementById("img-result").setAttribute("src", "images/result/fitman.png");
            document.getElementById("type").innerHTML = "Fit";
        } else if (bmi > 25) {
            document.getElementById("img-result").setAttribute("src", "images/result/overmen.png");
            document.getElementById("type").innerHTML = "OverWeight";
        }

    } else if (gender == "female") {
        if (bmi < 18.5) {
            document.getElementById("img-result").setAttribute("src", "images/result/thinwomen.png");
            document.getElementById("type").innerHTML = "UnderWeight";
        } else if (bmi <= 25 && bmi >= 18.5) {
            document.getElementById("img-result").setAttribute("src", "images/result/fitwomen3.png");
            document.getElementById("type").innerHTML = "Fit";
        } else if (bmi > 25) {
            document.getElementById("img-result").setAttribute("src", " images/result/overwomen.png");
            document.getElementById("type").innerHTML = "OverWeight";
        }
    }

});