(function($){
     console.clear();
    window.scrollTo(0, 0);
	
    setTimeout(function() { 
        $('body').addClass('is-visible');
        // window.scrollTo(0, 0);
    }, 1000);



    
    var config = {
      "async": true,
      "scrossDomain": true,
      "url": "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=maker%2Cbancor%2Calgorand%2Cenjincoin%2Ccompound-governance-token%2Cyearn-finance%2Cstellar%2Csolana%2Cripple%2Caave%2Cfilecoin%2Chedera-hashgraph%2C0x%2Cethereum-classic%2Cethereum%2Cmatic-network%2Cchiliz%2Cbitcoin-cash%2Clitecoin%2Ccardano%2Caxie-infinity%2Cavalanche-2%2Cdecentraland%2Cthe-sandbox%2Ceos%2Cuniswap%2Cpolkadot%2Ctezos%2Ccosmos%2Caudius%2Cchainlink%2Capecoin%2Cbitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en",
      "method": "GET",
      "headers": {} 
  }

  $.ajax(config).done(function (response2){
      
      // Sort the data based on 'market_cap_change_percentage_24h' in descending order
      response2.sort(function(a, b) {
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
      });
      console.log(response2);

      buildList(response2);
      function buildList(data){
          var source   = $("#item-template").html();
          var template = Handlebars.compile(source);
          var html = template({'item':data});
          $(".yuh-list").prepend(html); 
      }
  })

  Handlebars.registerHelper('roundDecimal', function(value) {
    // Convert the value to a floating-point number
    var floatValue = parseFloat(value);
  
    // Round the floating-point number to two decimal places
    var roundedValue = floatValue.toFixed(2);
  
    // Return the rounded value as a string
    return roundedValue;
  });

  Handlebars.registerHelper('isPositiveChange', function(value) {
    return value > 0;
  });







   

    








  

	
    
     


  
})(jQuery);