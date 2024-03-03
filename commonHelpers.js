import{i as h}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const l=document.querySelector("form"),g="42649910-6a5238a097d86367028b0f975",y="https://pixabay.com/api/",L="image_type=photo&orientation=horizontal&safesearch=true";let a;const $=document.querySelector("ul#image-list");l.addEventListener("submit",o=>{o.preventDefault(),a=o.currentTarget.querySelector("input").value;const r=a.split(" ").join("+");if(r.trim()!==""){const i=`${y}?key=${g}&q=${r}&${L}`;new Promise((c,t)=>{fetch(i).then(e=>{if(!e.ok)throw new Error(`${e.status}`);return e.json()}).then(e=>{if(e.hits.length===0)h.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!",color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"}),l.reset();else{const s=e.hits;console.log(s),$.innerHTML=s.map(({webformatURL:n,largeImageURL:v,tags:u,likes:m,views:f,comments:d,downloads:p})=>`<li class="card">
          <img  class="card-image" src="${n}" alt="${u}" />
            <ul class="discription-list">
              <li>
                <h3 class="disc-name">Likes</h3>
                <p class="disc-value">${m}</p>
              </li>
              <li>
                <h3  class="disc-name">Views</h3>
                <p class="disc-value">${f}</p>
              </li>
              <li>
                <h3  class="disc-name">Comments</h3>
                <p class="disc-value">${d}</p>
              </li>
              <li>
                <h3  class="disc-name">Downloads</h3>
                <p class="disc-value">${p}</p>
              </li>
            </ul>

        </li>`).join(""),l.reset()}}).catch(e=>{console.error(e),alert("Sorry, there are no images matching your search query. Please try again!")})})}});
//# sourceMappingURL=commonHelpers.js.map
