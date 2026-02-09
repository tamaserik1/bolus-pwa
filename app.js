function saveSettings(){
  localStorage.setItem("settings",JSON.stringify({
    cr:+cr.value,
    target:+target.value,
    isf:+isf.value,
    dark:darkToggle.checked
  }));
  document.body.classList.toggle("dark",darkToggle.checked);
}

function resetAll(){
  if(confirm("Biztos?")){
    localStorage.clear();
    location.reload();
  }
}

window.onload=()=>{
  const s=JSON.parse(localStorage.getItem("settings")||"{}");
  if(s.cr) cr.value=s.cr;
  if(s.target) target.value=s.target;
  if(s.isf) isf.value=s.isf;
  if(s.dark) document.body.classList.add("dark");
  darkToggle.checked=!!s.dark;

  splash.style.display="none";
  document.querySelector("main").style.display="block";
  tabBar.style.display="flex";
  renderHistory();
};

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("/bolus-pwa/sw.js");
}
