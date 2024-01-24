import{S as $,i as d,a as g}from"./assets/vendor-eacb4d5c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f="/goit-js-hw-12/assets/octagon-fdf1437b.svg",x=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader"),a=document.querySelector("#next-btn");let n=0,y=null;const p=new $(".gallery a",{captionsData:"alt",captionDelay:250}),L="https://pixabay.com/api",v=new URLSearchParams({key:"41861239-c6b09579488337e808a164f07",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40});x.addEventListener("submit",k);a.addEventListener("click",S);async function k(s){s.preventDefault();const t=s.currentTarget.elements.input.value;if(y=t,n=1,a.classList.add("is-hidden"),c.innerHTML="",!t.trim()){d.show({title:"❕",theme:"light",message:"Please, fill in the search field",messageSize:"20px",messageColor:"#808080",backgroundColor:"#e7fc44",position:"topRight",timeout:3e3});return}u.classList.remove("is-hidden"),s.currentTarget.reset();try{const i=await C(t);if(i.hits.length===0){d.show({iconUrl:f,theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3});return}c.innerHTML=h(i.hits),p.refresh(),a.classList.remove("is-hidden"),m()}catch(i){w(i)}finally{u.classList.add("is-hidden")}}async function C(s){return(await g.get(`${L}/?${v}&q=${s}&page=${n}`)).data}function h(s){return s.map(({webformatURL:t,largeImageURL:i,tags:l,likes:e,views:r,comments:o,downloads:b})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
           <img
            class="gallery-image"
            src="${t}"
            alt="${l}"
          />
        </a>
        <div class="container-additional-info">
        <div class="container-descr-inner"><p class="description">Likes</p><span class="description-value">${e}</span></div>
        
        <div class="container-descr-inner"><p class="description">Views</p><span class="description-value">${r}</span></div>
        

        <div class="container-descr-inner"><p class="description">Comments</p><span class="description-value">${o}</span></div>
        

        <div class="container-descr-inner"><p class="description">Downloads</p><span class="description-value">${b}</span></div>
        
        </div>
      </li>`).join("")}function w(s){console.error(s),c.innerHTML="",d.show({iconUrl:f,theme:"dark",message:s.stack,messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),a.removeEventListener("click",S),a.classList.add("is-hidden")}async function S(){u.classList.remove("is-hidden"),a.classList.add("is-hidden"),n+=1;try{const t=(await g.get(`${L}/?${v}&q=${y}&page=${n}`)).data;if(n*40>=t.totalHits){d.show({title:"❕",theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageColor:"white",backgroundColor:"#4e75ff",position:"topRight",timeout:5e3}),c.innerHTML+=h(t.hits),p.refresh(),a.classList.add("is-hidden"),m();return}c.innerHTML+=h(t.hits),p.refresh(),m(),a.classList.remove("is-hidden")}catch(s){w(s)}finally{u.classList.add("is-hidden")}}function m(){window.scrollBy({top:640,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
