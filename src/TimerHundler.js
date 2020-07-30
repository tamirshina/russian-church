
let myFunc;
export function timer(homeBtnLogic) {

  myFunc = window.setInterval(() => {
    homeBtnLogic();
  }, 3180000);
  console.log("on");
}
export function removeTimer() {

  window.clearInterval(myFunc);
  console.log("off");
}