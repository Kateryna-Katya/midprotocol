/* empty css                      */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelectorAll(".faq-acc-el-trigger").forEach(i=>{i.addEventListener("click",()=>{const o=i.closest(".faq-acc-el"),s=o.querySelector(".faq-acc-el-descr-frame"),r=i.querySelector("svg"),e=o.classList.contains("open"),t=`
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 6V22" stroke="#00FFFF" stroke-width="1.6" />
  <path d="M22 14L6 14" stroke="#00FFFF" stroke-width="1.6" />
</svg>`,c=`
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 14L6 14" stroke="#00FFFF" stroke-width="1.6" />
</svg>`;e?(o.classList.remove("open"),s.style.maxHeight="0",r.outerHTML=t):(o.classList.add("open"),s.style.maxHeight=s.scrollHeight+"px",r.outerHTML=c)})});
//# sourceMappingURL=index.js.map
