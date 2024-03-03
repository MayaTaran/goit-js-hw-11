import{i as n,S as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h({webformatURL:i,largeImageURL:r,tags:s,likes:o,views:e,comments:t,downloads:a}){return`
    <li class="card">
      <a href="${r}" data-caption="${s}">
        <img class="card-image" src="${i}" alt="${s}" title="${s}"/>
        <ul class="discription-list">
          <li>
            <h3 class="disc-name">Likes</h3>
            <p class="disc-value">${o}</p>
          </li>
          <li>
            <h3 class="disc-name">Views</h3>
            <p class="disc-value">${e}</p>
          </li>
          <li>
            <h3 class="disc-name">Comments</h3>
            <p class="disc-value">${t}</p>
          </li>
          <li>
            <h3 class="disc-name">Downloads</h3>
            <p class="disc-value">${a}</p>
          </li>
        </ul>
      </a>
    </li>`}const p="42649910-6a5238a097d86367028b0f975",m="https://pixabay.com/api/",g="image_type=photo&orientation=horizontal&safesearch=true";function y(i){const r=i.split(" ").join("+"),s=`${m}?key=${p}&q=${r}&${g}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(`${o.status}`);return o.json()}).then(o=>o.hits).catch(o=>{throw new Error(`Failed to fetch data: ${o.message}`)})}const l=document.querySelector("form");let c;const u=document.querySelector("ul#image-list"),f=document.querySelector(".loader");l.addEventListener("submit",i=>{i.preventDefault(),c=i.currentTarget.querySelector("input").value,c.trim()!==""&&(f.style.display="block",y(c).then(r=>{r.length===0?(n.show({title:"!",message:"Sorry, there are no images matching your search query. Please try again!",color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"}),u.innerHTML="",l.reset()):(u.innerHTML=r.map(h).join(""),new d(".card a",{captionsData:"title"}).refresh(),l.reset())}).catch(r=>{n.show({title:"!",message:`Error: ${r.message}`,color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"})}).finally(()=>{f.style.display="none"}))});
//# sourceMappingURL=commonHelpers.js.map
