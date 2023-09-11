function loadWeather() {
    var request=new XMLHttpRequest();
    var place=document.getElementById('place').value;
    console.log(place);
    var url='https://api.openweathermap.org/data/2.5/weather?q='+place+'&appid=a5d682caa365b86a5aa93b8809f7bb1d';
    request.open('GET',url,true);
    var div1=document.getElementById("div1");
    var loc=document.getElementById("loc");
    request.onload=function() {
     var data=JSON.parse(this.response);
     //Temperature node
     var para_temp=document.createElement("p");
      var curr_temp=Math.round(data['main']['temp']-273.15);
      var node_temp=document.createTextNode("Current Temparature --> "+curr_temp+" C");
      para_temp.appendChild(node_temp);
      //humidity
      var para_humidity=document.createElement("p");
      var humidity=data['main']['humidity'];
      var node_humidity=document.createTextNode("Humdity --> "+humidity);
      para_humidity.appendChild(node_humidity);
      //location
      var location=data['name'];
      loc.innerHTML="Location --> "+location;
      //weather
      var para_weather=document.createElement("p");
      var weather=data['weather'][0]['main'];
      var node_weather=document.createTextNode("Looks like --> "+weather);
      para_weather.appendChild(node_weather);
      //wind
      var para_wind=document.createElement("p");
      var wind=data['wind']['speed'];
      var node_wind=document.createTextNode("Wind speed --> "+wind+" Kmph");
      para_wind.appendChild(node_wind);
      //Current Time
      var para_time=document.createElement("p");
      var cur_time=new Date((data['dt'])*1000).toLocaleTimeString();
      var node_time=document.createTextNode("Last updated --> "+cur_time);
      para_time.appendChild(node_time);
      //sun rise
      var para_sunrise=document.createElement("p");
      var sunrise=new Date(data['sys']['sunrise']*1000).toLocaleTimeString();
      var node_sunrise=document.createTextNode("Sunrise at --> "+sunrise);
      para_sunrise.appendChild(node_sunrise);
      //sunset
      var para_sunset=document.createElement("p");
      var sunset=new Date(data['sys']['sunset']*1000).toLocaleTimeString();
      var node_sunset=document.createTextNode("Sunset at --> "+sunset);
      para_sunset.appendChild(node_sunset);
      //console.log(sunset);
      //appending data
      div1.appendChild(para_temp);
      div1.appendChild(para_time);
      div1.appendChild(para_humidity);
      div1.appendChild(para_weather);
      div1.appendChild(para_wind);
      div1.appendChild(para_sunrise);
      div1.appendChild(para_sunset);
    };
    
    request.send();
  }
  