function renderHistory(){
  history.innerHTML=getHistory().slice(-10).reverse()
    .map(b=>`<div>${b.units.toFixed(2)} E – ${new Date(b.time).toLocaleString()}</div>`)
    .join("") || "Nincs adat";
}

document.querySelectorAll(".tab").forEach(t=>{
  t.onclick=()=>{
    document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
    document.querySelectorAll("section").forEach(s=>s.style.display="none");
    t.classList.add("active");
    document.getElementById(t.dataset.tab).style.display="block";
  };
});
