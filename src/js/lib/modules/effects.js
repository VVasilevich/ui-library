// import $ from "../core";

// $.prototype.animateOverTime = function(dur, cb, fin) {
//   let timeStart;

//   function _animateOverTime(time) {
//     if (!timeStart) {
//       timeStart = time;
//     }

//     let timeElepsed = time - timeStart;
//     let complection = Math.min(timeElepsed / dur, 1);

//     cb(complection);

//     if (timeElepsed < dur) {
//       requestAnimationFrame(_animateOverTime);
//     } else {
//       if (typeof fin === 'function') {
//         fin();
//       }
//     }
//   }

//   return _animateOverTime;
// };

// $.prototype.fadeIn = function(dur, display, fin) {
//   for (let i = 0; i < this.length; i++) {
//     this[i].style.display = display || 'block';

//     const _fadeIn = (complection) => {
//       this[i].style.opacity = complection;
//     };

//     const ani = this.animateOverTime(dur, _fadeIn, fin);
//     requestAnimationFrame(ani);
//   }

//   return this;
// };

// $.prototype.fadeOut = function(dur, fin) {
//   for (let i = 0; i < this.length; i++) {

//     const _fadeOut = (complection) => {
//       this[i].style.opacity = 1 - complection;

//       if (complection === 1) {
//         this[i].style.display = 'none';
//       }
//     };

//     const ani = this.animateOverTime(dur, _fadeOut, fin);
//     requestAnimationFrame(ani);
//   }

//   return this;
// };

// $.prototype.fadeToggle = function(dur, display, fin) {
//   for (let i = 0; i < this.length; i++) {
//     if (window.getComputedStyle(this[i]).display === 'none') {
//       this[i].style.display = display || 'block';

//       const _fadeIn = (complection) => {
//         this[i].style.opacity = complection;
//       };
  
//       const ani = this.animateOverTime(dur, _fadeIn, fin);
//       requestAnimationFrame(ani);
//     } else {
//       const _fadeOut = (complection) => {
//         this[i].style.opacity = 1 - complection;
  
//         if (complection === 1) {
//           this[i].style.display = 'none';
//         }
//       };
  
//       const ani = this.animateOverTime(dur, _fadeOut, fin);
//       requestAnimationFrame(ani);
//     }
//   }

//   return this;
// };

import $ from "../core";

$.prototype.animateOverTime = function (dur, cb, fin) {
  const startTime = performance.now();

  function animate(time) {
    const elapsedTime = time - startTime;
    const completion = Math.min(elapsedTime / dur, 1);

    cb(completion);

    if (completion < 1) {
      requestAnimationFrame(animate);
    } else if (typeof fin === 'function') {
      fin();
    }
  }

  requestAnimationFrame(animate);
};

$.prototype.fade = function (dur, display, fin, isFadeIn) {
  for (let i = 0; i < this.length; i++) {
    if (isFadeIn) {
      this[i].style.display = display || 'block';
    }

    const _animateFn = (completion) => {
      this[i].style.opacity = isFadeIn ? completion : 1 - completion;

      if (!isFadeIn && completion === 1) {
        this[i].style.display = 'none';
      }
    };

    this.animateOverTime(dur, _animateFn, fin);
  }

  return this;
};

$.prototype.fadeIn = function (dur, display, fin) {
  return this.fade(dur, display, fin, true);
};

$.prototype.fadeOut = function (dur, fin) {
  return this.fade(dur, null, fin, false);
};

$.prototype.fadeToggle = function (dur) {
  for (let i = 0; i < this.length; i++) {

    if (window.getComputedStyle(this[i]).display === 'none') {
      $(this[i]).fadeIn(dur);
    } else {
      $(this[i]).fadeOut(dur);
    }
  }

  return this;
};