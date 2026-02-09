function getHistory(){
  return JSON.parse(localStorage.getItem("boluses")||"[]");
}
function saveBolus(b){
  const h=getHistory();
  h.push(b);
  localStorage.setItem("boluses",JSON.stringify(h));
}
