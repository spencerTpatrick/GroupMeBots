//This file pulls the latest stock price from alphavantage using the command !stock $$$ where the $$$ is replaced by your stock symbol

var groupMeBotId = "YOURBOTID";
var APIkey = "YOURAPIKEY"

function sendText(text){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + groupMeBotId + '","text":"' + text + '"}'});
}

function doPost(e){
  var post = JSON.parse(e.postData.getDataAsString());
  var text = post.text;
  var name = post.name
  
  if(text.toLowerCase().substring(0, 7) == "!stock "){
    var tick = text.replace("!stock ", "");
    if (tick == "")
      sendText("Error: No tick was given");
    
    sendText(stock(tick));
    
   }else if (text.toLowerCase() == "!stock") {
     sendText("Error: No tick was given");
   }
}

function stock(query) {
  // Replace 'demo' with your api key from http://www.alphavantage.co/support/#api-key
  var url = 'http://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + query + '&apikey=' + APIkey
  
  try {
    var response = UrlFetchApp.fetch(url);
    var json = response.getContentText();
    var data = JSON.parse(json);
    
    var price = data["Realtime Global Securities Quote"]["03. Latest Price"];
    var name = data["Realtime Global Securities Quote"]["02. Exchange Name"];
  }
  catch (Exception)
  {
    Logger.log(Exception);
    return ("Error occured");
  }
  return(name + "'s last price: " + price);
}
