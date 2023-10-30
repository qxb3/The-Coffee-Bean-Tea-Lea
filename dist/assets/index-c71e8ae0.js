(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=document.querySelector(".items"),s=[{text:"Mocha",price:120,img:"/images/coffees/mocha.png"},{text:"Caramel",price:220,img:"/images/coffees/caramel.png"},{text:"Americano",price:100,img:"/images/coffees/americano.png"},{text:"Mocha",price:120,img:"/images/coffees/mocha.png"},{text:"Caramel",price:220,img:"/images/coffees/caramel.png"},{text:"Americano",price:100,img:"/images/coffees/americano.png"}].sort(()=>Math.random()<.5?1:0);for(let o=0;o<s.length;o++){const r=s[o];a.innerHTML+=`
    <div class="item">
      <div class="pic">
        <img src="${r.img}" style="width: 6rem;" />
      </div>
      <div class="info">
        <h2 class="price">₱120</h2>
        <p>Moca</p>
        <button>Add To Cart</button>
      </div>
    </div>
`}
