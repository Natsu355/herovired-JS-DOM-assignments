function getCountry() {
    
    var place=document.getElementById('loc').value;
    var request=new XMLHttpRequest();
    var url="https://restcountries.com/v3.1/name/"+place;
    request.open('GET',url,true);
    request.onload=function() {
        var div1=document.getElementById('div1');
    var data=JSON.parse(this.response);
      console.log(data);
    var ele=document.getElementById('country-details');
      ele.innerHTML="Country --> "+place;
      //area
      var para_area=document.createElement("p");
      var area=data[0]['area'];
      var node_area=document.createTextNode("Area is square km --> "+area);
      para_area.appendChild(node_area);
      console.log(area);
      //Capital
      var para_capital=document.createElement("p");
      var capital=data[0]['capital'][0];
      var node_capital=document.createTextNode("Capital --> "+capital);
      para_capital.appendChild(node_capital);
      console.log(capital);
      //population
      var para_population=document.createElement("p");
      var population=data[0]['population'];
      var node_population=document.createTextNode("Population --> "+population);
      para_population.appendChild(node_population);
      console.log(population);
      //currencies
    //   var currency_name=data[0]['currencies'];
    //   console.log(currency_name[0]);
    //Time zone
      var para_timezone=document.createElement("p");
      var timezone=data[0]['timezones'][0];
      var node_timezone=document.createTextNode("Time Zone --> "+timezone);
      para_timezone.appendChild(node_timezone);
    //appending data
     div1.appendChild(para_area);
     div1.appendChild(para_capital);
     div1.appendChild(para_population);
     div1.appendChild(para_timezone);
    };
      request.send();
  }