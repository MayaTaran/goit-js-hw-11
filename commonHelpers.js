import{i as n,S as L}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const c=document.querySelector("form"),b="42649910-6a5238a097d86367028b0f975",v="https://pixabay.com/api/",w="image_type=photo&orientation=horizontal&safesearch=true";let u;const f=document.querySelector("ul#image-list"),d=document.querySelector(".loader");c.addEventListener("submit",r=>{r.preventDefault(),u=r.currentTarget.querySelector("input").value;const s=u.split(" ").join("+");if(s.trim()!==""){const i=`${v}?key=${b}&q=${s}&${w}`;d.style.display="block",new Promise((l,t)=>{fetch(i).then(e=>{if(!e.ok)throw new Error(`${e.status}`);return e.json()}).then(e=>{if(e.hits.length===0)n.show({title:"!",message:"Sorry, there are no images matching your search query. Please try again!",color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"}),f.innerHTML="",c.reset();else{const o=e.hits;console.log(o),f.innerHTML=o.map(({webformatURL:m,largeImageURL:p,tags:a,likes:h,views:g,comments:y,downloads:$})=>`<li class="card">
                                <a href="${p}" data-caption="${a}">
                                    <img class="card-image" src="${m}" alt="${a}" />
                                    <ul class="discription-list">
                                        <li>
                                            <h3 class="disc-name">Likes</h3>
                                            <p class="disc-value">${h}</p>
                                        </li>
                                        <li>
                                            <h3 class="disc-name">Views</h3>
                                            <p class="disc-value">${g}</p>
                                        </li>
                                        <li>
                                            <h3 class="disc-name">Comments</h3>
                                            <p class="disc-value">${y}</p>
                                        </li>
                                        <li>
                                            <h3 class="disc-name">Downloads</h3>
                                            <p class="disc-value">${$}</p>
                                        </li>
                                    </ul>
                                </a>
                            </li>`).join(""),new L(".card a",{captionsData:"title"}).refresh(),c.reset()}}).catch(e=>{n.show({title:"!",message:`Error ${e.message}`,color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"})}).finally(()=>{d.style.display="none"})})}});
//# sourceMappingURL=commonHelpers.js.map
