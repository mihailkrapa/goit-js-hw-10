import"./assets/styles-666cf17f.js";import{i as t}from"./assets/vendor-77e16229.js";const i="/goit-js-hw-10/assets/success-ab58799c.svg",c="/goit-js-hw-10/assets/error-47e8fc40.svg",n=document.querySelector(".form");n.addEventListener("submit",a);function a(s){s.preventDefault();const e=+s.currentTarget.elements.delay.value,r=s.currentTarget.elements.state.value;m(r,e).then(o=>{t.success({message:`OK Fulfilled promise in ${e}ms`,iconUrl:i,messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight"})}).catch(o=>{t.error({message:`ERROR Rejected promise in ${e}ms`,iconUrl:c,messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"})}),s.currentTarget.reset()}function m(s,e){return new Promise((r,o)=>{setTimeout(()=>{s==="fulfilled"?r({delay:e}):o({delay:e})},e)})}
//# sourceMappingURL=commonHelpers2.js.map
