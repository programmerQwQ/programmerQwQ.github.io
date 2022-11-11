function search(){
  if (document.getElementById("select").value=="百度") {
    searchOnBaiDu(document.getElementById("text").value);
  }
  if (document.getElementById("select").value=="必应") {
    searchOnBing(document.getElementById("text").value);
  }
}

function searchOnBaiDu(value) {
  window.location.href="https://www.baidu.com/s?wd="+value;
}

function searchOnBing(value) {
  window.location.href="https://cn.bing.com/search?q="+value;
}
