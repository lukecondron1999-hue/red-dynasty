const fixtures = [
  {date:"22 NOV 2026 • 16:30", comp:"PREMIER LEAGUE", home:"LIVERPOOL", away:"MAN UTD", venue:"Anfield • AWAY"},
  {date:"25 NOV 2026 • 20:00", comp:"UEFA CHAMPIONS LEAGUE", home:"SPORTING", away:"MAN UTD", venue:"Estádio José Alvalade • AWAY"},
  {date:"28 NOV 2026 • 15:00", comp:"PREMIER LEAGUE", home:"MAN UTD", away:"BRENTFORD", venue:"Old Trafford • HOME"},
  {date:"2 DEC 2026 • 20:00", comp:"PREMIER LEAGUE", home:"NEWCASTLE", away:"MAN UTD", venue:"St James' Park • AWAY"},
  {date:"5 DEC 2026 • 15:00", comp:"PREMIER LEAGUE", home:"MAN UTD", away:"COVENTRY", venue:"Old Trafford • HOME"},
  {date:"12 DEC 2026 • 15:00", comp:"PREMIER LEAGUE", home:"CRYSTAL PALACE", away:"MAN UTD", venue:"Selhurst Park • AWAY"},
  {date:"19 DEC 2026 • TBC", comp:"PREMIER LEAGUE", home:"ARSENAL", away:"MAN UTD", venue:"Emirates Stadium • AWAY"},
  {date:"26 DEC 2026 • TBC", comp:"PREMIER LEAGUE", home:"MAN UTD", away:"NOTTINGHAM FOREST", venue:"Old Trafford • HOME"},
  {date:"30 DEC 2026 • 20:00", comp:"PREMIER LEAGUE", home:"MAN UTD", away:"SUNDERLAND", venue:"Old Trafford • HOME"}
];

const table = [
 ["1","ARSENAL","11","8","2","1","+14","26"],
 ["2","MAN UTD","11","7","3","1","+10","24"],
 ["3","LIVERPOOL","11","7","2","2","+9","23"],
 ["4","MAN CITY","11","6","3","2","+8","21"],
 ["5","CHELSEA","11","6","2","3","+6","20"],
 ["6","NEWCASTLE","11","5","3","3","+5","18"],
 ["7","ASTON VILLA","11","5","2","4","+2","17"],
 ["8","SPURS","11","4","3","4","+3","15"]
];

function renderFixtures(){
 const grid=document.getElementById("fixturesGrid");
 grid.innerHTML=fixtures.map(f=>`<article class="fixture reveal-up">
   <div class="date">${f.date}</div><div class="comp">${f.comp}</div>
   <div class="match"><span>${f.home}</span><span class="vs">V</span><span>${f.away}</span></div>
   <div class="venue">${f.venue}</div>
 </article>`).join("");
 observeReveals();
}
function renderTable(){
 document.getElementById("tableBody").innerHTML=table.map(r=>`<tr>${r.map((x,i)=>`<td>${x}</td>`).join("")}</tr>`).join("");
}
function observeReveals(){
 const els=document.querySelectorAll(".reveal-left,.reveal-right,.reveal-up");
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12});
 els.forEach(el=>io.observe(el));
}
window.addEventListener("scroll",()=>{
 const h=document.documentElement.scrollHeight-window.innerHeight;
 document.getElementById("progressBar").style.width=(window.scrollY/h*100)+"%";
});
document.getElementById("filterBtn").addEventListener("click",()=>{
 const btn=document.getElementById("filterBtn");
 btn.textContent=btn.textContent.includes("ALL")?"PREMIER LEAGUE ▾":"ALL COMPETITIONS ▾";
});
document.getElementById("menuBtn").addEventListener("click",()=>{
 document.querySelector(".topbar nav").style.display="flex";
 document.querySelector(".topbar nav").style.position="absolute";
 document.querySelector(".topbar nav").style.top="76px";
 document.querySelector(".topbar nav").style.left="0";
 document.querySelector(".topbar nav").style.right="0";
 document.querySelector(".topbar nav").style.padding="25px";
 document.querySelector(".topbar nav").style.background="#080808";
 document.querySelector(".topbar nav").style.flexDirection="column";
});
document.getElementById("year").textContent=new Date().getFullYear();
renderFixtures(); renderTable(); observeReveals();
setTimeout(()=>document.getElementById("toast").classList.add("show"),500);
setTimeout(()=>document.getElementById("toast").classList.remove("show"),3000);
