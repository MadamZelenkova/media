(()=>{"use strict";function e(e){const n=document.querySelector(".messages"),o=document.createElement("div");o.classList.add("message");const a=document.createElement("span");a.classList.add("textMesage"),a.textContent=e;const s=document.createElement("button");return s.classList.add("remove"),s.textContent="✕",s.addEventListener("click",t),o.appendChild(a),o.appendChild(s),n.appendChild(o),o}function t(e){e.preventDefault();const t=e.target.closest(".message"),n=t.querySelector(".textMesage");console.log(n),n&&function(e){let t=JSON.parse(localStorage.getItem("messages"))||[];t=t.filter((t=>t.text!==e)),localStorage.setItem("messages",JSON.stringify(t))}(n.textContent),t&&t.remove()}function n(){document.querySelector(".notification").remove()}function o(e){e.preventDefault();const t=document.querySelector(".textCoord"),o=t.value;""!==o.trim()&&(!function(e){const t=document.querySelector(".messages").lastChild,n=document.createElement("span");n.textContent=e,n.classList.add("geo"),t.appendChild(n)}(function(e){e=e.replace(/[[]/g,"").trim();const[t,n]=e.split(",").map((e=>e.trim())),o=parseFloat(t),a=parseFloat(n);if(!(isNaN(o)||isNaN(a)||o<-90||o>90||a<-180||a>180))return`${o}, ${a}`;alert("Невалидный формат")}(o)),t.value="",n())}document.addEventListener("DOMContentLoaded",(()=>{(JSON.parse(localStorage.getItem("messages"))||[]).forEach((({text:t,location:n})=>{const o=e(t),a=document.createElement("span");a.classList.add("geo"),a.textContent=n,o.appendChild(a)})),document.querySelector(".btn").addEventListener("click",(t=>{t.preventDefault();const a=document.querySelector(".text"),s=a.value;""!==s.trim()&&(async function(t){const a=document.createElement("span");a.classList.add("geo");try{const e=await new Promise(((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){const{latitude:n,longitude:o}=t.coords;e(`${n}, ${o}`)}),(function(e){console.log(e),function(){const e=document.getElementsByTagName("body")[0],t=document.createElement("div");t.classList.add("notification"),t.style.display="flex";const a=document.createElement("span");a.classList.add("textMesage"),a.innerHTML="Что-то пошло не так.<br>К сожалению, нам не удалось определить ваше местоположение. Дайте разрешение на использование геолокации, либо введите координаты вручную.<br> Широта и долгота через запятую.";const s=document.createElement("button");s.classList.add("removeBtn"),s.textContent="✕",s.addEventListener("click",n);const c=document.createElement("form");c.classList.add("form");const d=document.createElement("textarea");d.classList.add("textCoord"),d.placeholder="51.50851, -0.12572";const l=document.createElement("button");l.classList.add("btnOk"),l.textContent="OK",l.addEventListener("click",o),c.appendChild(d),c.appendChild(l),t.appendChild(a),t.appendChild(s),t.appendChild(c),e.appendChild(t)}(),t(e)})):t(new Error("Геолокация не поддерживается браузером"))}));a.textContent=e}catch(e){a.textContent=""}e(t).appendChild(a),function(e,t){const n=JSON.parse(localStorage.getItem("messages"))||[];n.push({text:e,location:t}),localStorage.setItem("messages",JSON.stringify(n))}(t,a.textContent)}(s),a.value="")}))}))})();