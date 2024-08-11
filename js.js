// const debounce = (callback, wait) => {
//     let timer = null;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(
//         () => callback.apply(null, args),
//         wait
//       );
//     };
//   };
  
//   const $mask = document.querySelector('.mask');
//   const $uncensor = document.querySelector('.uncensor');
//   const { clientWidth, clientHeight } = $uncensor;
  
// const handleMouseMove = debounce(
//     (event) => {
//       $mask.style.top = `${event.clientY - clientHeight / 2}px`;
//       $mask.style.left = `${event.clientX - clientWidth / 2}px`;
//     },
//     10
// );
// document.addEventListener(
//     'mousemove',
//     handleMouseMove
// );
// const $mouseCursor = document.querySelector('.mouse-cursor');
const debounce = (callback, wait) => {
  let timer = null;
  return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(
          () => callback.apply(null, args),
          wait
      );
  };
};

const $mask = document.querySelector('.mask');
const $uncensor = document.querySelector('.uncensor');
const { clientWidth, clientHeight } = $uncensor;

let isMouseDown = false;

const handleMouseMove = debounce(
  (event) => {
      if (isMouseDown) {
          const clientX = event.clientX || event.touches[0].clientX;
          const clientY = event.clientY || event.touches[0].clientY;
          $mask.style.top = `${clientY - clientHeight / 2}px`;
          $mask.style.left = `${clientX - clientWidth / 2}px`;
      }
  },
  10
);

document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mousedown', () => { isMouseDown = true; });
document.addEventListener('mouseup', () => { isMouseDown = false; });

document.addEventListener('touchmove', handleMouseMove);
document.addEventListener('touchstart', () => { isMouseDown = true; });
document.addEventListener('touchend', () => { isMouseDown = false; });

const $mouseCursor = document.querySelector('.mouse-cursor');
