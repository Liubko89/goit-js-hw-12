import{S as $,i as d,a as m}from"./assets/vendor-eacb4d5c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g="/goit-js-hw-12/assets/octagon-fdf1437b.svg",b=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader"),a=document.querySelector("#next-btn");let o=0,f=null;const p=new $(".gallery a",{captionsData:"alt",captionDelay:250}),y="https://pixabay.com/api",L=new URLSearchParams({key:"41861239-c6b09579488337e808a164f07",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40});b.addEventListener("submit",x);a.addEventListener("click",w);async function x(s){s.preventDefault();const t=s.currentTarget.elements.input.value;if(f=t,o=1,a.classList.add("is-hidden"),c.innerHTML="",!t.trim()){d.show({title:"❕",theme:"light",message:"Please, fill in the search field",messageSize:"20px",messageColor:"#808080",backgroundColor:"#e7fc44",position:"topRight",timeout:3e3});return}u.classList.remove("is-hidden"),s.currentTarget.reset();try{const i=await k(t);if(i.hits.length===0){d.show({iconUrl:g,theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3});return}c.innerHTML=h(i.hits),p.refresh(),a.classList.remove("is-hidden")}catch(i){v(i)}finally{u.classList.add("is-hidden")}}async function k(s){return(await m.get(`${y}/?${L}&q=${s}&page=${o}`)).data}function h(s){return s.map(({webformatURL:t,largeImageURL:i,tags:l,likes:e,views:r,comments:n,downloads:S})=>`<li class="gallery-item">
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
        

        <div class="container-descr-inner"><p class="description">Comments</p><span class="description-value">${n}</span></div>
        

        <div class="container-descr-inner"><p class="description">Downloads</p><span class="description-value">${S}</span></div>
        
        </div>
      </li>`).join("")}function v(s){console.error(s),c.innerHTML="",d.show({iconUrl:g,theme:"dark",message:s.stack,messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),a.removeEventListener("click",w),a.classList.add("is-hidden")}async function w(){u.classList.remove("is-hidden"),a.classList.add("is-hidden"),o+=1;try{const t=(await m.get(`${y}/?${L}&q=${f}&page=${o}`)).data;if(o*40>=t.totalHits){d.show({title:"❕",theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageColor:"white",backgroundColor:"#4e75ff",position:"topRight",timeout:5e3}),c.innerHTML+=h(t.hits),p.refresh(),a.classList.add("is-hidden");return}c.innerHTML+=h(t.hits),p.refresh(),a.classList.remove("is-hidden")}catch(s){v(s)}finally{u.classList.add("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map
