(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const S of r.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&m(S)}).observe(document,{childList:!0,subtree:!0});function p(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(o){if(o.ep)return;o.ep=!0;const r=p(o);fetch(o.href,r)}})();const s=document.querySelector(".dataEntry"),u=document.querySelector(".colorSelect"),F=document.querySelector(".A"),q=document.querySelector(".B"),N=document.querySelector(".C"),T=document.querySelector(".D"),E=document.querySelector(".E"),P=document.querySelector(".F"),w=document.querySelector(".G"),c=document.querySelector(":root"),a=document.querySelector(".animate"),d=document.querySelector(".countDown"),f=document.querySelector(".display"),g=document.querySelector(".color");let i="Ambar";const n=[F,q,N,T,E,P,w],y=["--colorA","--colorB","--colorC","--colorD","--colorE","--colorF","--colorG"],h=[0,1,2,3,4,5],A=[1,2],L=[0,1,6,3,4],D=[0,1,2,3,6],B=[1,2,5,6],G=[0,2,3,5,6],O=[0,2,3,4,5,6],$=[0,1,2],M=[0,1,2,3,4,5,6],v=[0,1,2,5,6],x=[h,A,L,D,B,G,O,$,M,v];s.addEventListener("change",k);u.addEventListener("change",()=>{u.value=="Ambar"?(s.value="-",l(),i="Ambar",f.style.backgroundColor="rgba(68, 35, 15, 0.322)",g.style.color="goldenrod"):u.value=="Green"?(s.value="-",l(),i="Green",f.style.backgroundColor="#002000",g.style.color="rgb(81, 188, 5)"):u.value=="Blue"?(s.value="-",l(),i="Blue",f.style.backgroundColor="#00FFFF",g.style.color="#00FFFF"):(s.value="-",l(),i="Red",f.style.backgroundColor="#200000",g.style.color="red")});document.addEventListener("keydown",k);a.addEventListener("click",j);d.addEventListener("click",I);function k(){l(),R()}function l(){for(let e=0;e<y.length;e++)c.style.setProperty(`${y[e]}`,"rgba(218, 165, 32, 0.13)");for(let e=0;e<n.length;e++)n[e].style.backgroundColor="initial",n[e].style.boxShadow="initial"}function R(){for(let e=0;e<=9;e++)s.value==e.toString()&&b(x[e])}function b(e){for(let t=0;t<e.length;t++)i=="Ambar"?(c==null||c.style.setProperty(`${y[e[t]]}`,"goldenrod"),n[e[t]].style.backgroundColor="goldenrod",n[e[t]].style.boxShadow="0px 0px 50px #ffe60085"):i=="Green"?(c.style.setProperty(`${y[e[t]]}`,"#00FF00"),n[e[t]].style.backgroundColor="#00FF00",n[e[t]].style.boxShadow="0px 0px 50px #73ff0085"):i=="Blue"?(c.style.setProperty(`${y[e[t]]}`,"#0000FF"),n[e[t]].style.backgroundColor="#0000FF",n[e[t]].style.boxShadow="0px 0px 50px #4c00ff85"):(c.style.setProperty(`${y[e[t]]}`,"#FF0000"),n[e[t]].style.backgroundColor="#FF0000",n[e[t]].style.boxShadow="0px 0px 50px #ff330085")}function C(e){return e[Math.floor(Math.random()*e.length)]}function j(){l(),s.value="-";let e=400,t=["green","purple","blue","salmon","pink","red","white"],p=[0,1,2,3,4,5,6];setTimeout(()=>{a.disabled=!0,d.disabled=!0,s.disabled=!0,u.disabled=!0,a.style.backgroundColor="rgba(255, 0, 0, 0.555)",c.style.setProperty("--colorA","green"),F.style.backgroundColor="green"},e);for(let m=1;m<35;m++){setTimeout(()=>l(),e+=100);let o=C(t),r=C(p);setTimeout(()=>{c.style.setProperty(y[r],o),n[r].style.backgroundColor=o},e+=5)}setTimeout(()=>l(),e+=100),setTimeout(()=>{a.disabled=!1,d.disabled=!1,s.disabled=!1,u.disabled=!1,a.style.backgroundColor="initial",c.style.setProperty("--colorA","green"),F.style.backgroundColor="green"},e),setTimeout(()=>l(),e+=100)}function I(){l(),s.value="-";let e=1e3;setTimeout(()=>{d.disabled=!0,a.disabled=!0,s.disabled=!0,u.disabled=!0,d.style.backgroundColor="rgba(255, 0, 0, 0.555)",b(v)},e+=50);for(let t=8;t>0;t--)setTimeout(()=>l(),e+=1e3),setTimeout(()=>{b(x[t])},e+=50);setTimeout(()=>l(),e+=1e3),setTimeout(()=>{d.disabled=!1,a.disabled=!1,s.disabled=!1,u.disabled=!1,d.style.backgroundColor="initial",b(h)},e+=50),setTimeout(()=>l(),e+=1e3)}
