import{a as h,i as n,S as L}from"./assets/vendor-B0DN4ojb.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y=async({query:a,page:s})=>{const r={params:{key:"19040716-d2ab54626dacf9b7f6f91612a",q:a,page:s,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}};return h.get("https://pixabay.com/api/",r)},f=a=>a.map(({webformatURL:s,largeImageURL:r,tags:d,likes:e,views:t,comments:i,downloads:g})=>`   <li class="gallery-item">
            <a
              class="gallery-link"
              href=${r}
            >
              <img
                class="gallery-image"
                src=${s}
                data-source=${r}
                alt='${d}'
              />
                 
              <ul class="description">
                <li class="descr-item">
                  <p class="descr-text">
                    Likes<span class="descr-span">${e}</span>
                  </p>
                </li>
                <li class="descr-item">
                  <p class="descr-text">
                    Views<span class="descr-span">${t}</span>
                  </p>
                </li>
                <li class="descr-item">
                  <p class="descr-text">
                    Comments<span class="descr-span">${i}</span>
                  </p>
                </li>
                <li class="descr-item">
                  <p class="descr-text">
                    Downloads<span class="descr-span">${g}</span>
                  </p>
                </li>
              </ul>
            </a>
          </li>`).join(""),v={captionsData:"alt",captionDelay:250,overlayOpacity:.85,animationSpeed:350,preloading:!1,widthRatio:.9,heightRatio:.8,fadeSpeed:400};n.settings({position:"topCenter",timeout:3500,transitionIn:"bounceInDown"});new L(".gallery .gallery-link",v);const u=document.querySelector(".js-search-form"),m=document.querySelector(".js-loader"),c=document.querySelector(".js-gallery"),p=document.querySelector(".js-load-more-btn"),l={};u.addEventListener("submit",b);p.addEventListener("click",S);async function b(a){a.preventDefault(),c.innerHTML="";const s=a.currentTarget.elements.userQuery.value.trim();if(s.length===0){n.error({message:"Please, enter your search query!"}),u.reset();return}o(!0,!1,!1);try{l.quary=s,l.page=1;const{data:r}=await y(l);if(r.total===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),o();return}c.innerHTML=f(r.hits),u.reset(),o(!1,!0,!0)}catch(r){console.error(r),n.error({message:"Please, try again later"}),o()}}async function S(a){o(!0,!1,!0),l.page++;try{const{data:s}=await y(l);c.insertAdjacentHTML("beforeend",f(s.hits))}catch(s){console.error(s),n.error({message:"Please, try again later"}),o()}o(!1,!0,!0)}function o(a=!0,s=!0,r=!0){a?m.classList.remove("visually-hidden"):m.classList.add("visually-hidden"),s?p.classList.remove("visually-hidden"):p.classList.add("visually-hidden"),r?c.classList.remove("visually-hidden"):c.classList.add("visually-hidden")}
//# sourceMappingURL=index.js.map
