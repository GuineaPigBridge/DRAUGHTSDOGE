"use strict";let zzfx,zzfxV,zzfxX,zzfxR;zzfxV=.3,zzfx=((z=1,t=.05,f=220,x=0,a=0,e=.1,n=0,h=1,M=0,R=0,i=0,r=0,s=0,o=0,u=0,c=0,d=0,X=1,b=0,w=0)=>{let l,m,C=2*Math.PI,V=M*=500*C/zzfxR**2,A=(0<u?1:-1)*C/4,B=f*=(1+2*t*Math.random()-t)*C/zzfxR,I=[],P=0,g=0,k=0,D=1,S=0,j=0,p=0;for(R*=500*C/zzfxR**3,u*=C/zzfxR,i*=C/zzfxR,r*=zzfxR,s=zzfxR*s|0,m=(x=99+zzfxR*x)+(b*=zzfxR)+(a*=zzfxR)+(e*=zzfxR)+(d*=zzfxR)|0;k<m;I[k++]=p)++j%(100*c|0)||(p=n?1<n?2<n?3<n?Math.sin((P%C)**3):Math.max(Math.min(Math.tan(P),1),-1):1-(2*P/C%2+2)%2:1-4*Math.abs(Math.round(P/C)-P/C):Math.sin(P),p=(s?1-w+w*Math.sin(2*Math.PI*k/s):1)*(0<p?1:-1)*Math.abs(p)**h*z*zzfxV*(k<x?k/x:k<x+b?1-(k-x)/b*(1-X):k<x+b+a?X:k<m-d?(m-k-d)/e*X:0),p=d?p/2+(d>k?0:(k<m-d?1:(m-k)/d)*I[k-d|0]/2):p),P+=(l=(f+=M+=R)*Math.sin(g*u-A))-l*o*(1-1e9*(Math.sin(k)+1)%2),g+=l-l*o*(1-1e9*(Math.sin(k)**2+1)%2),D&&++D>r&&(f+=i,B+=i,D=0),!s||++S%s||(f=B,M=V,D=D||1);return(z=zzfxX.createBuffer(1,m,zzfxR)).getChannelData(0).set(I),(f=zzfxX.createBufferSource()).buffer=z,f.connect(zzfxX.destination),f.start(),f}),zzfxX=new(window.AudioContext||webkitAudioContext),zzfxR=44100;(()=>{const e=document.querySelector.bind(document),t=document.querySelectorAll.bind(document),o=(t="#000")=>{const o=e("meta[name=theme-color]");o&&o.setAttribute("content",t)},n=(e,t,o,n={})=>{e&&e.addEventListener(t,o,n)},c=(e,t)=>{if(e)for(let o in t)e.style[o]=t[o]},r=e=>{e&&e.parentNode.removeChild(e)},i=(e,t)=>{e.innerHTML=t},a=(e,t)=>e.classList.contains(t),s=(e,t)=>{e&&t.split(" ").forEach(t=>{e.classList.add(t)})},l=(e,t)=>{e&&t.split(" ").forEach(t=>{e.classList.remove(t)})},d=(e,t)=>{var o;return function(){clearTimeout(o),o=setTimeout(e,t)}},u=(e,t,o)=>{let n=0;const c=setInterval(()=>{n++,n>t&&clearInterval(c),e(n)},o);return c},m=[412,732],b=["😃","🤔","😴","😱","😭","😡","💀","🔥","🎊","💪","👏","👍"],p={blue:"#28c",red:"#a55"},h=guid(),v="share"in navigator;let f,g=0,y=!1,k="",w=!0;const T=e=>{w&&zzfx(...{click:[,,1675,,.06,.24,1,1.82,,,837,.06],interval:[,,1090,,.01,.13,,1.4,,,513,.08,,,,,,.65,.05],endGame:[,,20,.04,,.6,,1.31,,,-990,.06,.17,,,.04,.07],tokenMove:[,,150,.05,,.05,,1.3,,,,,,3],removeToken:[,,925,.04,.3,.6,1,.3,,6.27,-184,.09,.17],emoji:[,.5,847,.02,.3,.9,1,1.67,,,-294,.04,.13,,,,.1],king:[,,80,.3,.4,.7,2,.1,-.73,3.42,-430,.09,.17,,,,.19]}[e])},$=(e,t)=>`rgb(${{red:[150+10*t,85,85],blue:[34,136,180+10*t]}[e].join(" ")})`,E=()=>{const c=()=>{[...t(".se")].forEach(e=>l(e,"so")),i(e("#se-1"),""),e(".frm input").value=""},r=(t="",o=!1,n=!1)=>{C({type:4===g?2:3,localRoom:String(t),table:o,createRoom:n}),c(),s(e("#se-1"),"so"),i(e("#se-1"),`<h1>CODE: ${t}</h1><p>🔍 Waiting for friend to connect 🔎</p>`),f&&!o&&5===g&&f.on("dT",()=>{alert("The board has been disconnected so the game cannot be started :("),s(e(".bc"),"hi"),A()})};i(e(".s"),`<div class='lo wh ce'>\n        <div class='bc wh ce hi'>\n    <div class='mo ce'>\n      <button class='btn blue clm'>X</button>\n      <h2></h2>\n      <div class='se ce so' id=se-1></div>\n      <div class='se ce' id=se-2>\n        <button class='btn blue cta'></button>\n        <form class='ce frm'>\n          <input type='number' placeholder='Table code'/>\n          <button type='submit' class='btn red'>Join</button>\n        </form>\n      </div>\n      </div></div>\n        <div class='ti ce'><span>🔗</span>Draughts\n        <div class='ti-bt ce'>\n          ${v?"<button id=shr title=Share>📮</button>":""}\n          <button id=sou title=Sounds>${w?"🔊":"🔇"}</button>\n        </div></div>\n        <div class='cb ce'>\n          ${["<span>📴</span> PLAY OFFLINE","<span>🕹️</span> VS BOT","<span>🤖</span> BOT VS BOT","<span>🌎</span> PLAY ONLINE","<span>🤝</span> PLAY WITH A FRIEND","<span>🎉</span> PARTY MODE"].map((e,t)=>`<button class='btn ${t<3?"red":"blue"} ce'>${e}</button>`).join("")}\n        </div>\n        <h3>Developed by: <span target='_blank' rel='noopener noreferrer'>Haruki Andrews</h3>\n      </div>`),[...t(".lo .cb button")].forEach((t,o)=>n(t,"click",()=>{T("click"),g=o,o<=2?P(o):navigator.onLine?(c(),l(e(".bc"),"hi"),s(e("#se-"+(3===o?1:2)),"so"),e(".mo h2").textContent=["Play online!","Play with a friend!","Party mode!"][g-3],3===o?(C({type:1}),i(e("#se-1"),"<p>🔍 Looking for an opponent 🔎</p><p>This may take a few seconds, if you can't find an opponent you can create a room and play with a friend</p>")):e(".cta").textContent=4===o?"CREATE ROOM":"CREATE TABLE"):alert("Sorry, you must have an internet connection for this option")})),v&&n(e("#shr"),"click",e=>{e.preventDefault(),T("click"),navigator.share({title:"The last link",text:"Play Draughts 2020 edition by Haruki Andrews",url:location.href}).then(()=>{alert("Thanks for sharing")}).catch(e=>{alert(e)})}),n(e("#sou"),"click",()=>{w=!w,e("#sou").textContent=w?"🔊":"🔇",T("click")}),n(e(".clm"),"click",()=>{T("click"),s(e(".bc"),"hi"),A()}),n(e(".frm"),"submit",t=>{T("click"),t.preventDefault();const o=e(".frm input").value;isNaN(o)||5!==o.length?(alert("The code is not valid"),e(".frm input").focus()):r(o)}),n(e(".cta"),"click",()=>{T("click"),r(randomNumber(1e4,99999),5===g,!0)}),o()},x=(t,o,n="b")=>{const c=guid(),i=document.createElement("div");i.className="fof ce",i.id="f-"+c,i.style.left=t,i.style.top=o,i.innerHTML="404".split("").map(e=>`<span>${e}</span>`).join(""),n&&(e("."+n).appendChild(i),setTimeout(()=>{e("#f-"+c)&&r(e("#f-"+c))},4e3))},M=(r,d)=>{const m=Object.keys(p)[r];let b=!1,v=!1;const g=r===d;let y=[];const w=e=>({row:e<4?e:e<8?e-4:e-8,col:e<4?0:e<8?1:2}),$=()=>{[...t(".t-e")].forEach(e=>{e.disabled=!0,s(e,"di"),l(e,"r bl")})};i(e(".s"),`<div class='bw wh ce ${m}'>\n        <button class=cl>EXIT</button>\n        <div class='bc wh ce'><span></span><button class=cl>EXIT</button></div>\n        <div class='tu bo ce ${m}'>Your turn</div>\n        <div class='co ce'>\n          <div class='tp ce ${g?"tpr":""}'>${[...new Array(4)].map((e,t)=>`<button class=t-p id=tg-${t}></button>`).join("")}</div>\n          ${[...new Array(12)].map((e,t)=>`<button color=${m} disabled class='t-e cc-${t} ${m} di'id=o-${t}></button>`).join("")}\n        </div>\n      </div>`),["t-p","t-e"].forEach(o=>{[...t("."+o)].forEach(o=>{n(o,"click",o=>{const n=o.target.id.split("-");if(!b)if(T("click"),"o"===n[0]){[...t(".t-p")].forEach(e=>{l(e,"v")});const o=+n[1],{row:r,col:i}=w(o);let a=v?y.filter(e=>e[0].counter===o)[0]:y.filter(e=>e.counter===o)[0];v&&(a={...a[0],availableMoves:a[1]}),a&&(s(e(".tp"),"sht"),c(e(".tp"),{left:100*r+3*r+"px",top:100*i+8*i+"px"}),b=!0,f.emit("mV",{type:3,user:h,color:m,removeToken:v,id:a.id,room:k,data:a}))}else{const[t,n,c,r]=o.target.getAttribute("p").split("-");b=!0,f.emit("mV",{type:1,user:h,color:m,room:k,movement:[+t,+n,+c,""===r?-1:+r]}),$(),l(e(".tp"),"sht")}})})});const M=u(t=>{T("interval");const o=3-t-2+3;e(".bc span").textContent=o,o||s(e(".bc"),"hi")},3,500);n(e(".cl"),"click",()=>{T("click"),M&&clearInterval(M),f&&A(),E()}),o(p[m]),f&&(f.on("aC",t=>{if(b=!1,$(),l(e(".tp"),"sht"),l(e(".tu."+m),"sh"),y=t.data,v=t.removeToken||!1,t.color===m?(s(e(".tu."+m),"sh"),v?y.forEach(t=>{e("#o-"+t[0].counter).disabled=!1,l(e("#o-"+t[0].counter),"di"),s(e("#o-"+t[0].counter),"r")}):y.forEach(t=>{e("#o-"+t.counter).disabled=!1,l(e("#o-"+t.counter),"di"),t.isKing&&!a(e("#o-"+t.counter),"c")&&(s(e("#o-"+t.counter),"c"),T("king"))})):v&&y.forEach(t=>{t[1].forEach(t=>{s(e("#o-"+t.counter),"bl"),l(e("#o-"+t.counter),"di")})}),t&&t.tokenRemove&&Object.keys(t.tokenRemove)&&t.tokenRemove.c===m&&e("#o-"+t.tokenRemove.counter)){T("removeToken"),s(e("#o-"+t.tokenRemove.counter),"re");const{row:o,col:n}=w(t.tokenRemove.counter);x(100*o+3*o+"px",100*n+8*n+"px","co"),"vibrate"in navigator&&navigator.vibrate(500)}}),f.on("sT",t=>{b=!1,t.color===m&&t.data.availableMoves.forEach(({target:o,col:n,row:c,id:r=""})=>{e("#tg-"+o).setAttribute("p",`${n}-${c}-${t.data.id}-${r}`),s(e("#tg-"+o),"v")})}),f.on("gT",t=>{""!==t.scoreText&&s(e(".bc"),t.scoreText),l(e(".bc"),"hi"),e(".bc span").textContent=t.scoreText?t.scoreText+" win":"Tied game",T("endGame"),o(""!==t.scoreText?p[t.scoreText]:"#000")}),f.on("gD",e=>{const t=e&&e.roomData&&e.roomData.table&&e.roomData.table.id||"";e.userDisconnected===t&&(alert("Sorry the board has been disconnected :("),A(),E())}))},P=(v=0,g={baseColor:0,initialTurn:0,isPartyMode:!1})=>{const y=v>2,w=Math.round(m[0]/8-3),$=Object.keys(p);let M=!1;const P=y?+!g.baseColor:randomNumber(0,1),j=$[P],C=$[+!P],R={[j]:{score:12,human:!0,local:!y,counter:11},[C]:{score:12,human:!0,local:!0,counter:0}};2===v&&(R[C].human=!1),1!==v&&2!==v||(R[j].human=!1);let I,O=[],L=!1,N=y?g.initialTurn:randomNumber(0,1),D=0;const V=u(t=>{const o=3-t-2+3;T("interval"),e(".bc span").textContent=o,o||(s(e(".bc"),"hi"),H(Z($[N]).map(e=>e.id)),B(),R[$[N]].human||X())},3,500),S=[...new Array(8)].map((e,t)=>[...new Array(8)].map((e,o)=>t<3||t>4?t%2?o%2?{}:{c:t<3?j:C,id:D++,d:t<3?1:-1,col:t,row:o,counter:t<3?R[j].counter--:R[C].counter++,arrival:t<3?7:0}:o%2?{c:t<3?j:C,id:D++,d:t<3?1:-1,col:t,row:o,counter:t<3?R[j].counter--:R[C].counter++,arrival:t<3?7:0}:{}:{})),Y=()=>{const t=Object.keys(R),o=R[t[0]].score===R[t[1]].score?"":R[t[0]].score>R[t[1]].score?t[0]:t[1];""!==o&&s(e(".bc"),o),T("endGame"),l(e(".bc"),"hi"),e(".bc span").textContent=o?o+" win":"Tied game",g.isPartyMode&&f.emit("mV",{type:4,room:k,scoreText:o})},z=t=>{const o=U(t);if(o.c===$[N]){const n=a(e("#o-"+o.id),"r")?O.filter(e=>e[0].id===t)[0][1]:Q(o);n.length&&n.forEach(({col:t,row:n,id:r=""},i)=>{const a=e("#tg-"+i);a.setAttribute("p",`${t}-${n}-${o.id}-${r}`),s(a,"v"),c(a,{left:n*w+"px",top:t*w+"px"})})}},G=(t,o,i,d=-1)=>{const u=U(i),{hasListener:m=!1}=S[u.col][u.row];W(),l(e("#o-"+i),"sel"),T("tokenMove");let b={};d>=0&&(b=U(d),S[b.col][b.row]={},s(e("#o-"+d),"re"),x(b.row*w+"px",b.col*w+"px"),(!g.isPartyMode&&b.c===C&&2!==v||0===v)&&"vibrate"in navigator&&navigator.vibrate(500),T("removeToken")),S[t][o]={...S[u.col][u.row],row:o,col:t,hasListener:m,counterTransition:0,removedToken:d>=0,tokenRemove:b},S[u.col][u.row]={},L=!0,c(e("#o-"+i),{left:o*w+"px",top:t*w+"px"}),m||n(e("#o-"+i),"transitionend",t=>{const{propertyName:o}=t;if("transform"===o)r(e("#"+t.target.id));else if("left"===o||"top"===o){const o=U(+t.target.id.split("-")[1]);if(2==++S[o.col][o.row].counterTransition){o.arrival!==o.col||a(e("#"+t.target.id),"c")||(S[o.col][o.row].isKing=!0,s(e("#"+t.target.id),"c"),T("king")),L=!1,S[o.col][o.row].removedToken&&(R[$[+!N]].score--,e(".sc-"+$[+!N]).textContent=(R[$[+!N]].score<=9?"0":"")+R[$[+!N]].score);!!S[o.col][o.row].removedToken&&0!==_().length||(N=+!N),O=_();const n=O.length?O:Z($[N]);H(n.map(e=>O.length?e[0].id:e.id)),O.forEach(t=>{s(e("#o-"+t[0].id),"r"),t[1].forEach(t=>{s(e("#o-"+t.id),"bl")})}),B(n.length||O.length),n.length||O.length?(R[$[N]].human||X(),g.isPartyMode&&(f.emit("mV",{type:2,user:h,room:k,color:$[N],tokenRemove:S[o.col][o.row].tokenRemove,removeToken:!!O.length,data:O.length?O:n.map(e=>({...e,availableMoves:Q(e)}))}),j===$[N]?s(e(".b"),"ro"):l(e(".b"),"ro"))):Y()}}})},X=d(()=>{let e=0,t={};if(O.length){const o=randomNumber(0,O.length-1);e=O[o][0];const n=O[o][1];t=n[randomNumber(0,n.length-1)]}else{const o=Z($[N]);e=o[randomNumber(0,o.length-1)];const n=Q(e);t=n[randomNumber(0,n.length-1)]}const o=null===t.id||void 0===t.id?-1:t.id;y?(M=!0,f.emit("mV",{type:1,user:h,room:k,movement:[t.col,t.row,e.id,o]})):G(t.col,t.row,e.id,o)},y?0:500),B=(t=!0)=>{l(e(".bw"),$[+!N]),l(e(".tu."+$[+!N]),"sh"),t&&(s(e(".bw"),$[N]),g.isPartyMode||(s(e(".tu."+$[N]),"sh"),e(".tu."+$[N]).textContent=y&&!g.isPartyMode?"10":"Your turn"),o(p[$[N]]),y&&!g.isPartyMode&&(I=u(t=>{const o=9-t+1;o<=3&&T("interval"),o>=0&&(e(".tu."+$[N]).textContent=(o<=9?"0":"")+o,0===o&&R[$[N]].local&&X())},10,1e3)))},H=(t=[])=>{let o=!1;const n=$[N],c=$[+!N];[J(c),J(n)].forEach((c,r)=>{c.forEach(({id:c})=>{const i="#o-"+c;e(i).disabled=r?!(R[n].human&&R[n].local||g.isPartyMode)||(t.length?!t.includes(c):!r):!r,l(e(i),"r bl di"),!r||e(i).disabled||o||g.isPartyMode||(e(i).focus(),o=!0),r&&(R[n].human&&R[n].local||g.isPartyMode)&&e(i).disabled&&s(e(i),"di")})})},J=e=>S.map(t=>t.filter(t=>Object.keys(t).length&&t.c===e)).filter(e=>e.length).reduce((e,t)=>[...e,...t],[]),F=e=>e>=0&&e<8,K=(e,t)=>0===Object.keys(S[e][t]).length,W=()=>{[...t(".t-p")].forEach(e=>{l(e,"v")})},q=(e=!0)=>{[...t(".ems")].forEach(t=>{t.disabled=e})},U=e=>{for(let t=0;t<8;t++)for(let o=0;o<8;o++)if(Object.keys(S[t][o]).length&&S[t][o].id===e)return S[t][o]},_=()=>J($[N]).map(e=>{const t=Q(e,!0).filter(e=>F(e.col+e.direction)&&F(e.row+e.position)&&K(e.col+e.direction,e.row+e.position)).map(e=>({...e,col:e.col+e.direction,row:e.row+e.position}));return t.length?[e,t]:[]}).filter(e=>e.length&&e[1].length),Q=({isKing:e=!1,col:t,row:o,d:n,c:c},r=!1)=>[1,-1].map((i,a)=>[1,-1].map((s,l)=>!(!e&&i!==n||!F(t+i)||!F(o+s)||!(!r&&K(t+i,o+s)||r&&!K(t+i,o+s)&&S[t+i][o+s].c!==c))&&{col:t+i,row:o+s,direction:i,position:s,id:S[t+i][o+s].id,counter:S[t+i][o+s].counter,target:a+l+a}).filter(e=>e)).reduce((e,t)=>[...e,...t],[]),Z=e=>J(e).filter(e=>Q(e).length);i(e(".s"),`<div class='bw wh ce'>\n        <button class=cl>EXIT</button>\n        ${["to","bo"].map((e,t)=>`<div class='tu ${e} ce ${t?C:j}'></div>`).join("")}\n        <div class='sc ce'>${[j,C].map(e=>`<span class=sc-${e}>${R[e].score}</span>`).join("")}</div>\n        <div class=b style='height : ${8*w+20}px'>\n          ${S.map(e=>e.map(e=>Object.keys(e).length?`<button color=${e.c} disabled class='t-e ${g.isPartyMode?"cc-"+e.counter:""} ${e.c}' style='left : ${e.row*w}px; top : ${e.col*w}px;' id=o-${e.id}></button>`:"").join("")).join("")}${[...new Array(4)].map((e,t)=>`<button class=t-p id=tg-${t}></button>`).join("")}${y&&!g.isPartyMode?`<div class='ch-s'></div><div class='ch'><div class='ch-w'>${b.map((e,t)=>`<button id=em-${t} class='ems'>${e}</button>`).join("")}</div></div>`:""}\n        </div>\n        <div class='bc wh ce'><span></span><button class=cl>EXIT</button></div>\n      </div>`),["t-p","t-e"].forEach(e=>{[...t("."+e)].forEach(t=>{("t-e"!==e||R[t.getAttribute("color")].human&&R[t.getAttribute("color")].local&&!g.isPartyMode)&&n(t,"click",e=>{if(!L&&!M){y&&I&&clearInterval(I),g.isPartyMode||W();const t=e.target.id.split("-");if("o"===t[0])T("click"),z(+t[1]);else if(!g.isPartyMode){const[t,o,n,c]=e.target.getAttribute("p").split("-"),r=""===c?-1:+c;y?(M=!0,f.emit("mV",{type:1,user:h,room:k,movement:[+t,+o,+n,r]})):G(+t,+o,+n,r)}}})})}),y&&!g.isPartyMode&&[...t(".ems")].forEach(t=>{n(t,"click",t=>{T("emoji"),q();const o=t.target.id.split("-");s(e("#em-"+ +o[1]),"seb"),f.emit("mV",{type:5,user:h,room:k,emoji:+o[1]}),setTimeout(()=>{q(!1),l(e("#em-"+ +o[1]),"seb")},4e3)})}),n(e(".cl"),"click",()=>{T("click"),V&&clearInterval(V),I&&clearInterval(I),y&&f&&A(),E()}),y&&f&&(f.on("rV",e=>{y&&I&&clearInterval(I),M=!1;const t=e.user===h||g.isPartyMode;let[o,n,c,r]=e.movement;t||(c=23-c,o=7-o,n=7-n,r=r>=0?23-r:r),G(o,n,c,r)}),f.on("gD",()=>{V&&clearInterval(V),I&&clearInterval(I),Y(),y&&f&&A()}),f.on("sT",o=>{W(),[...t(".t-e")].forEach(e=>{l(e,"sel")}),s(e("#o-"+o.id),"sel"),z(o.id)}),f.on("rE",t=>{h!==t.user&&(T("emoji"),e(".ch-s").textContent=b[t.emoji],s(e(".ch-s"),"an"),setTimeout(()=>{e(".ch-s")&&l(e(".ch-s"),"an")},4e3))}),g.isPartyMode&&f.emit("mV",{type:2,user:h,room:k,color:$[N],data:Z($[N]).map(e=>({...e,availableMoves:Q(e)}))}))},j=d(()=>{const{w:t,h:o}={w:window.innerWidth,h:window.innerHeight},n=Math.min(t/m[0],o/m[1]),r=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);c(e("body"),{zoom:(t<m[0]?Math.round(t/m[0]*100):100)+"%",transform:n>=1||r?`scale(${r?1:n})`:void 0})},100),A=()=>{y&&f&&(y=!1,k="",f.disconnect())},C=(t={})=>{f=io(),y=!0,f.on("connect",()=>{f.emit("nU",{...t,user:h},t=>{t&&(alert(t),e(".clm")?s(e(".bc"),"hi"):E(),A())})}),f.on("sG",e=>{k=e.room;const{color:t}=e.p1.user===h?e.p1:e.p2;3!==e.type?P(g,{baseColor:t,initialTurn:e.turn}):e.table&&e.table.user===h?P(g,{baseColor:e.turn,initialTurn:e.turn,isPartyMode:!0}):M(t,e.turn)})};n(document,"contextmenu",e=>e.preventDefault()),console.log("%cGame Developed by Haruki Andrews","color:red; font-size:20px; font-weight: bold; background-color: black;"),n(window,"load",()=>{const t=document.createElement("style");let o="";for(let e in p)document.documentElement.style.setProperty("--c-"+e,p[e]),o+=[...new Array(12)].map((t,o)=>`.cc-${o}.${e}:after{background:${$(e,o)}}`).join("");i(t,o),e("head").appendChild(t),c(e(".s"),{width:m[0]+"px",height:m[1]+"px"}),E(),n(window,"resize",j),j()})})()</script><script>"serviceWorker"in navigator?navigator.serviceWorker.register("serviceworker.js").then(function(){console.log("[Event] Service Worker registered successfully")}).catch(function(){console.log("[Warning] Service worker registration failed")}):console.log("[Warning] ServiceWorker not found in navigator");
