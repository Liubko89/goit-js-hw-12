import{S as b,i as l,a as p}from"./assets/vendor-eacb4d5c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const h="/goit-js-hw-12/assets/octagon-fdf1437b.svg",$=document.querySelector(".form"),d=document.querySelector(".gallery"),u=document.querySelector(".loader"),a=document.querySelector("#next-btn");let c=0,m=null;const g=new b(".gallery a",{captionsData:"alt",captionDelay:250}),f="https://pixabay.com/api",y=new URLSearchParams({key:"41861239-c6b09579488337e808a164f07",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40});$.addEventListener("submit",x);a.addEventListener("click",w);function x(t){t.preventDefault();const r=t.currentTarget.elements.input.value;if(m=r,d.innerHTML="",!r.trim()){l.show({title:"❕",theme:"light",message:"Please, fill in the search field",messageSize:"20px",messageColor:"#808080",backgroundColor:"#e7fc44",position:"topRight",timeout:3e3});return}u.classList.remove("is-hidden"),C(r).then(i=>{if(i.hits.length===0){l.show({iconUrl:h,theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3});return}d.innerHTML=v(i.hits),g.refresh(),a.classList.remove("is-hidden")}).catch(L).finally(()=>u.classList.add("is-hidden")),t.currentTarget.reset(),c+=1}async function C(t){return(await p.get(`${f}/?${y}&q=${t}`)).data}function v(t){return t.map(({webformatURL:r,largeImageURL:i,tags:n,likes:e,views:s,comments:o,downloads:S})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
           <img
            class="gallery-image"
            src="${r}"
            alt="${n}"
          />
        </a>
        <div class="container-additional-info">
        <div class="container-descr-inner"><p class="description">Likes</p><span class="description-value">${e}</span></div>
        
        <div class="container-descr-inner"><p class="description">Views</p><span class="description-value">${s}</span></div>
        

        <div class="container-descr-inner"><p class="description">Comments</p><span class="description-value">${o}</span></div>
        

        <div class="container-descr-inner"><p class="description">Downloads</p><span class="description-value">${S}</span></div>
        
        </div>
      </li>`).join("")}function L(t){console.error(t),d.innerHTML="",l.show({iconUrl:h,theme:"dark",message:"Sorry, there is a problem with connection with the server.",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),a.removeEventListener("click",w),a.classList.add("is-hidden")}async function w(){c+=1,await p.get(`${f}/?${y}&q=${m}&page=${c}`).then(t=>{c*40>=t.data.totalHits&&(a.classList.add("is-hidden"),l.show({title:"❕",theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageColor:"white",backgroundColor:"#4e75ff",position:"topRight",timeout:5e3}));const r=t.data.hits;d.innerHTML+=v(r),g.refresh()}).catch(L)}
//# sourceMappingURL=commonHelpers.js.map
