function search(){
  if (document.getElementById("select").value=="必应") {
    searchOnBing(document.getElementById("text").value);
  }
  console.log(document.getElementById("select").value);
}

function searchOnBing(value) {
  window.location.href="https://cn.bing.com/search?q="+value;
}
