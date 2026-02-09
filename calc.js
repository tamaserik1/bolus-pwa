let lastBolus=null;

function calculate(){
  const carbs=+carbs.value, bg=+bg.value;
  const s=JSON.parse(localStorage.getItem("settings")||"{}");
  if(!carbs||!bg||!s.cr||!s.target||!s.isf){alert("Hiányzó adat");return;}
  const meal=carbs/s.cr;
  const corr=Math.max(0,(bg-s.target)/s.isf);
  lastBolus=meal+corr;
  result.innerHTML=`Javasolt: <b>${lastBolus.toFixed(2)} E</b>`;
  injectBtn.style.display=cancelBtn.style.display="block";
}

function inject(){
  saveBolus({units:lastBolus,time:Date.now()});
  cancel(); renderHistory();
}
function cancel(){
  result.innerHTML="";
  injectBtn.style.display=cancelBtn.style.display="none";
}
