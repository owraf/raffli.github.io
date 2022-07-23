/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Particles for Index Page Animation */

// Particles (Index Page) || Id: "particles-js"

// particlesJS(
//     "particles-js",

//     {
//         particles: {
//             number: {
//                 value: 20,
//                 density: {
//                     enable: false,
//                     value_area: 600,
//                 },
//             },
//             color: {
//                 value: ["#434343","#00edff"],
//             },
//             shape: {
//                 type: ["circle", "triangle", "polygon"],
//                 stroke: {
//                     width: 0,
//                     color: "#000000",
//                 },
//                 polygon: {
//                     nb_sides: 4,
//                 },
//                 image: {
//                     src: "img/logo.svg",
//                     width: 50,
//                     height: 50,
//                 },
//             },
//             opacity: {
//                 value: 1,
//                 random: false,
//                 anim: {
//                     enable: false,
//                     speed: 1,
//                     opacity_min: 0.2,
//                     sync: false,
//                 },
//             },
//             size: {
//                 value: 15,
//                 random: true,
//                 anim: {
//                     enable: true,
//                     speed: 10,
//                     size_min: 0.1,
//                     sync: false,
//                 },
//             },
//             line_linked: {
//                 enable: true,
//                 distance: 150,
//                 color: "#3a3f50",
//                 opacity: 0.5,
//                 width: 1,
//             },
//             move: {
//                 enable: true,
//                 speed: 6,
//                 direction: "none",
//                 random: true,
//                 straight: false,
//                 out_mode: "bounce",
//                 attract: {
//                     enable: false,
//                     rotateX: 600,
//                     rotateY: 1200,
//                 },
//             },
//         },
//         interactivity: {
//             detect_on: "canvas",
//             events: {
//                 onhover: {
//                     enable: false,
//                     mode: "repulse",
//                 },
//                 onclick: {
//                     enable: false,
//                     mode: "push",
//                 },
//                 resize: true,
//             },
//             modes: {
//                 grab: {
//                     distance: 400,
//                     line_linked: {
//                         opacity: 1,
//                     },
//                 },
//                 bubble: {
//                     distance: 400,
//                     size: 40,
//                     duration: 2,
//                     opacity: 8,
//                     speed: 3,
//                 },
//                 repulse: {
//                     distance: 100,
//                 },
//                 push: {
//                     particles_nb: 4,
//                 },
//                 remove: {
//                     particles_nb: 2,
//                 },
//             },
//         },
//         retina_detect: true,
//         config_demo: {
//             hide_card: false,
//             background_color: "#fafafa",
//             background_image: "",
//             background_position: "50% 50%",
//             background_repeat: "no-repeat",
//             background_size: "cover",
//         },
//     }
// );

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
