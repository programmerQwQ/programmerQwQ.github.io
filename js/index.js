function search(){
  searchOnBing(document.getElementById("text").value);
}

function searchOnBing(value) {
  window.location.href="https://cn.bing.com/search?q="+value;
}
