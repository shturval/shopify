const body = document.querySelector('body');
body.setAttribute('style',`
  background-color: #ccc;
  font: 400 14px/20px sans-serif;`);

const collapsible = document.querySelector('.collapsible');
collapsible.setAttribute('style',`
  padding: 20px;
  position: relative;`);

const btn = document.querySelector('.collapsible__button');
btn.setAttribute('style',`
  background-color: #eee;
  border: solid 1px #ccc;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  box-shadow: 0px 3px 6px -1px rgba(0, 0, 0, 0.2);
  font: 700 14px/20px sans-serif;
  padding: 10px 15px;
  cursor: pointer;
  width: 200px;`);

btn.onmouseover = function(e) {
  btn.style.backgroundColor = '#f5f5f5';
};
btn.onmouseout = function(e) {
  btn.style.backgroundColor = '#eee';
};

const btnV = document.querySelector('.collapsible__action--visible');
btnV.setAttribute('style',`
  color: #FF6347;
  display: none;`);

const btnH = document.querySelector('.collapsible__action--hidden');
btnH.setAttribute('style',`
  color: #0ec268;`);

const content = document.querySelector('.collapsible__content');
content.setAttribute('style',`
  background-color: #fff;
  margin-top: 10px;
  overflow: hidden;
  position: absolute;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;`);

const cp = document.querySelector('p');
cp.setAttribute('style',`
  padding: 10px 15px;`);


const anim = document
  .querySelector('.collapsible__content')
  .animate(
    {
      opacity: ["0", "1"]
    },
    {
      duration: 300, fill: "both", easing: "ease-out"
    }
  );

anim.pause();

document.querySelector("button").addEventListener("click", () => {
  if (anim.playState === "paused") {
    anim.play();
    const btnV = document.querySelector('.collapsible__action--visible');
    btnV.setAttribute('style',`color: #FF6347;`);
    const btnH = document.querySelector('.collapsible__action--hidden');
    btnH.setAttribute('style',`display: none`);
  } else {
    anim.reverse();
    const btnH = document.querySelector('.collapsible__action--hidden');
    btnH.setAttribute('style',`color: #0ec268;`);
    const btnV = document.querySelector('.collapsible__action--visible');
    btnV.setAttribute('style',`display: none`);
    anim.reverse();
    anim.pause();
  }
});