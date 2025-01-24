import{a as L,i as l,S as v}from"./assets/vendor-B0DN4ojb.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=async({query:s,page:a})=>{const r={params:{key:"19040716-d2ab54626dacf9b7f6f91612a",q:s,page:a,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}};return L.get("https://pixabay.com/api/",r)},y=s=>s.map(({webformatURL:a,largeImageURL:r,tags:d,likes:e,views:t,comments:n,downloads:g})=>`   <li class="gallery-item">
            <a
              class="gallery-link"
              href=${r}
            >
              <img
                class="gallery-image"
                src=${a}
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
                    Comments<span class="descr-span">${n}</span>
                  </p>
                </li>
                <li class="descr-item">
                  <p class="descr-text">
                    Downloads<span class="descr-span">${g}</span>
                  </p>
                </li>
              </ul>
            </a>
          </li>`).join(""),b={captionsData:"alt",captionDelay:250,overlayOpacity:.85,animationSpeed:350,preloading:!1,widthRatio:.9,heightRatio:.8,fadeSpeed:400};l.settings({position:"topCenter",timeout:4500,transitionIn:"bounceInDown"});const h=new v(".gallery .gallery-link",b),u=document.querySelector(".js-search-form"),f=document.querySelector(".js-loader"),c=document.querySelector(".js-gallery"),p=document.querySelector(".js-load-more-btn"),i={};u.addEventListener("submit",S);p.addEventListener("click",q);async function S(s){s.preventDefault(),c.innerHTML="";const a=s.currentTarget.elements.userQuery.value.trim();if(a.length===0){l.error({message:"Please, enter your search query!"}),u.reset();return}o(!0,!1,!1);try{i.query=a,i.page=1;const{data:r}=await m(i);if(r.total===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),u.reset(),o();return}if(c.innerHTML=y(r.hits),h.refresh(),u.reset(),r.total<=15){o(!1,!1,!0);return}o(!1,!0,!0)}catch(r){console.error(r),l.error({message:"Please, try again later"}),o()}}async function q(){o(!0,!1,!0),i.page++;try{const{data:s}=await m(i);if(c.insertAdjacentHTML("beforeend",y(s.hits)),h.refresh(),scrollBy({top:document.querySelector(".gallery-item:last-child").getBoundingClientRect().height*2,behavior:"smooth"}),s.total<=i.page*15){l.info({message:"We're sorry, but you've reached the end of search results."}),o(!1,!1,!0);return}}catch(s){console.error(s),l.error({message:"Please, try again later"}),o()}o(!1,!0,!0)}function o(s=!1,a=!1,r=!1){s?f.classList.remove("visually-hidden"):f.classList.add("visually-hidden"),a?p.classList.remove("visually-hidden"):p.classList.add("visually-hidden"),r?c.classList.remove("visually-hidden"):c.classList.add("visually-hidden")}
//# sourceMappingURL=index.js.map
