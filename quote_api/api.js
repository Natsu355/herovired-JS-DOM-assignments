function getQuote() {
    var request= new XMLHttpRequest();
    request.open('GET','https://type.fit/api/quotes',true);
    request.onload=function() {
      var data=JSON.parse(this.response);
      console.log(data);
      var ele=document.getElementById('quote');
      var num=Math.floor(Math.random()*16);
      var author=data[num]['author'];
      ele.innerHTML=data[num]['text']+" ----> "+author.split(",")[0];
    };
    request.send();
  }