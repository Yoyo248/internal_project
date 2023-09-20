const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// const dropdowns = document.querySelectorAll('.dropdown1');

// dropdowns.forEach(dropdown1 => {
//     const select = dropdown1.querySelector('.select');
//     const caret = dropdown1.querySelector('.caret');
//     const menu = dropdown1.querySelector('.menu');
//     const options = dropdown1.querySelectorAll('.menu li');
//     const selected = dropdown1.querySelector('.selected');

//     select.addEventListener('click', () => {
//         select.classList.toggle('select-clicked');
//         caret.classList.toggle('caret-rotate');
//         menu.classList.toggle('menu-open');
//     });

//     options.forEach(option => {
//         option.addEventListener('click', () => {
//             selected.innerText = option.innerText;
//             select.classList.remove('select-clicked');
//             caret.classList.remove('caret-rotate');
//             menu.classList.remove('menu-open');
//             options.forEach(option => {
//                 option.classList.remove('active');
//             });
//             option.classList.add('active');
//         });
//     });
// });

// var selectBox = document.getElementById("fitness");
// var selectedOption = selectBox.options[selectBox.selectedIndex];
// var selectedText = selectedOption.textContent;
// alert(selectedText);

// var selectBox = document.getElementById("fitness");
// var selectedValue = selectBox.value;
// alert(selectedValue)



let loginForm = document.getElementById("fit_form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var x1 = document.getElementById("cardio_b");
    var x2 = document.getElementById("cardio_i");
    var x3 = document.getElementById("cardio_a");
    var x4 = document.getElementById("flexibility_b");
    var x5 = document.getElementById("flexibility_i");
    var x6 = document.getElementById("flexibility_a");
    var x7 = document.getElementById("strength_b");
    var x8 = document.getElementById("strength_i");
    var x9 = document.getElementById("strength_a");
    var x1d = document.getElementById("cardio_bd");
    var x2d = document.getElementById("cardio_id");
    var x3d = document.getElementById("cardio_ad");
    var x4d = document.getElementById("flexibility_bd");
    var x5d = document.getElementById("flexibility_id");
    var x6d = document.getElementById("flexibility_ad");
    var x7d = document.getElementById("strength_bd");
    var x8d = document.getElementById("strength_id");
    var x9d = document.getElementById("strength_ad");
    var meow = document.getElementById("fit_form");
    var wtitle = document.getElementById("workout_title");
    var ftitle = document.getElementById("fitness_title");
    var wtitle2 = document.getElementById("workout_title2");

    let fitness = document.getElementById("fitness");
    let level = document.getElementById("level");
    let frequency = document.getElementById("frequency");
    
    if (fitness.value == "cardio" && level.value == "beginner") {
      x1d.style.display = "block";
      x1.style.display = "block";
      meow.style.display = "none";
      document.getElementById("workout_title").innerHTML = "Beginner Cardio Fitness Plan";
      wtitle.style.marginTop = "70px"
      wtitle.style.marginLeft = "19px"
      wtitle.style.fontSize = "2.4rem"
      ftitle.style.display = "block"
      wtitle2.style.display = "none"
    } else if (fitness.value == "cardio" && level.value == "intermediate") {
      // perform operation with form input
      x2.style.display = "block";
      x2d.style.display = "block";
      meow.style.display = "none";
      document.getElementById("workout_title").innerHTML = "Intermediate Cardio Fitness Plan";
      wtitle.style.marginTop = "70px"
      wtitle.style.marginLeft = "19px"
      wtitle.style.fontSize = "2.4rem"
      ftitle.style.display = "block"
      wtitle2.style.display = "none"
    } else if (fitness.value == "cardio" && level.value == "advanced") {
      // perform operation with form input
      x3.style.display = "block";
      x3d.style.display = "block";
      meow.style.display = "none";
      document.getElementById("workout_title").innerHTML = "Advanced Cardio Fitness Plan";
      wtitle.style.marginTop = "70px"
      wtitle.style.marginLeft = "19px"
      wtitle.style.fontSize = "2.4rem"
      ftitle.style.display = "block"
      wtitle2.style.display = "none"
    } else if (fitness.value == "strength" && level.value == "beginner") {
      // perform operation with form input
      x7.style.display = "block";
      x7d.style.display = "block";
      meow.style.display = "none";
      document.getElementById("workout_title").innerHTML = "Beginner Strength Fitness Plan";
      wtitle.style.marginTop = "70px"
      wtitle.style.marginLeft = "19px"
      wtitle.style.fontSize = "2.4rem"
      ftitle.style.display = "block"
      wtitle2.style.display = "none"
    } else if (fitness.value == "strength" && level.value == "intermediate") {
      // perform operation with form input
      x8.style.display = "block";
      x8d.style.display = "block";
      meow.style.display = "none";
      document.getElementById("workout_title").innerHTML = "Intermediate Strength Fitness Plan";
      wtitle.style.marginTop = "70px"
      wtitle.style.marginLeft = "19px"
      wtitle.style.fontSize = "2.4rem"
      ftitle.style.display = "block"
      wtitle2.style.display = "none"
    } else if (fitness.value == "strength" && level.value == "advanced") {
      // perform operation with form input
      x9.style.display = "block";
      x9d.style.display = "block";
      meow.style.display = "none";
      wtitle2.style.display = "none"
      document.getElementById("workout_title").innerHTML = "Advanced Strength Fitness Plan";
      wtitle.style.marginTop = "70px"
      wtitle.style.marginLeft = "19px"
      wtitle.style.fontSize = "2.4rem"
      ftitle.style.display = "block"
      wtitle2.style.display = "none"
    } else if (fitness.value == "flexibility" && level.value == "beginner") {
      // perform operation with form input
      x4.style.display = "block";
      x4d.style.display = "block";
      meow.style.display = "none";
      document.getElementById("workout_title").innerHTML = "Beginner Flexbibility Routine";
      wtitle.style.marginTop = "70px"
      wtitle.style.marginLeft = "19px"
      wtitle.style.fontSize = "2.4rem"
      ftitle.style.display = "block"
      wtitle2.style.display = "none"
    } else if (fitness.value == "flexibility" && level.value == "intermediate") {
      // perform operation with form input
      x5.style.display = "block";
      x5d.style.display = "block";
      meow.style.display = "none";
      wtitle2.style.display = "none"
      document.getElementById("workout_title").innerHTML = "Intermediate Flexibility Routine";
      wtitle.style.marginTop = "70px"
      wtitle.style.marginLeft = "19px"
      wtitle.style.fontSize = "2.4rem"
      ftitle.style.display = "block"
    } else if (fitness.value == "flexibility" && level.value == "advanced") {
      // perform operation with form input
      x6.style.display = "block";
      x6d.style.display = "block";
      meow.style.display = "none";
      document.getElementById("workout_title").innerHTML = "Advanced Flexibility Routine";
      wtitle.style.marginTop = "70px"
      wtitle.style.marginLeft = "19px"
      wtitle.style.fontSize = "2.4rem"
      ftitle.style.display = "block"
      wtitle2.style.display = "none"
    } 
  });
}
var textBox = document.getElementById("textBox");
var goaltext = document.getElementById("goal__text")

document.getElementById("prevText").innerHTML = localStorage.getItem("value")
textBox.onkeyup = textBox.onkeydown = function(){
  localStorage.setItem("value", this.value);
  document.getElementById("prevText").innerHTML = localStorage.getItem("value")
  // console.log(localStorage.getItem("value"));
}

// moo = "url(" +goal_default.jpg+ ")";
// localStorage.setItem("imgstore", moo);
imgBox.style.backgroundImage = "url(" +localStorage.getItem("imgstore")+ ")";
var loadFile = function(event){
  var storedfile = URL.createObjectURL(event.target.files[0]);
  localStorage.setItem("imgstore", storedfile);
  storedimg = localStorage.getItem("imgstore");
  imgBox.style.backgroundImage = "url(" +storedimg+ ")";
}

// var filestore = function(event) {
//   var storedfile = URL.createObjectURL(event.target.files[0]);
//   localStorage.setItem("imgstore", storedfile);
//   storedimg = localStorage.getItem("imgstore");
//   imgBox.style.backgroundImage = "url(" +storedimg+ ")";
// }


