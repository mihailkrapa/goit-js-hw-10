import"./assets/styles-666cf17f.js";import{i as t}from"./assets/vendor-77e16229.js";const a="/vanilla-app-template/assets/success-ab58799c.svg",i="/vanilla-app-template/assets/error-47e8fc40.svg",n=document.querySelector(".form");n.addEventListener("submit",c);function c(r){r.preventDefault();const e=+r.currentTarget.elements.delay.value,s=r.currentTarget.elements.state.value;l(s,e).then(o=>{t.success({message:`OK Fulfilled promise in ${e}ms`,iconUrl:a,messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight"})}).catch(o=>{t.error({message:`ERROR Rejected promise in ${e}ms`,iconUrl:i,messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"})}),r.currentTarget.reset()}function l(r,e){return new Promise((s,o)=>{setTimeout(()=>{r==="fulfilled"?s({delay:e}):o({delay:e})},e)})}
//# sourceMappingURL=commonHelpers2.js.map