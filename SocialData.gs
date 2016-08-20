//Works with the Social Share Data Google Spreadsheet found at https://docs.google.com/spreadsheets/d/1-3L5xANIssztHUmE3UMsJvukuFTwAgx_r4tQ-O768KM/edit?usp=sharing
//Gets social share data from a URL input for various social networks

function Plusones(url)
{
  var options =
    {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : '{"method":"pos.plusones.get","id":"p","params":{"nolog":true,"id":"'+url+'","source":"widget","userId":"@viewer","groupId":"@self"},"jsonrpc":"2.0","key":"p","apiVersion":"v1"}'
    };
  
  var response = UrlFetchApp.fetch("https://clients6.google.com/rpc?key=AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ", options);
 
  var results = JSON.parse(response.getContentText());
  Utilities.sleep(1000);
 
  if (results.result != undefined)
    return results.result.metadata.globalCounts.count;
  
  return "Error";
}


function StumbleUpon(url) {
  var jsondata = UrlFetchApp.fetch("http://www.stumbleupon.com/services/1.01/badge.getinfo?url="+url);

  
  try {
    var object = Utilities.jsonParse(jsondata.getContentText());
    Utilities.sleep(1000);
    return object.result.views;
  } 
  catch (e) {
    return "Error";
  }
  
}

function LinkedIn(url) {
  var jsondata = UrlFetchApp.fetch("http://www.linkedin.com/countserv/count/share?url="+url+"&format=json");
  
  try {
    var object = Utilities.jsonParse(jsondata.getContentText());
    Utilities.sleep(1000);
    return object.count;
  } 
  catch (e) {
    return "Error";
  }
  
}

function Pinterest(url) {
  var data = UrlFetchApp.fetch("http://api.pinterest.com/v1/urls/count.json?callback=receiveCount&url="+url);
  var jsondata = data.toString().replace("receiveCount(", "").replace(")","");
  
  try {
    var object = JSON.parse(jsondata);
    Utilities.sleep(1000);
    return object.count;
  } 
  catch (e) {
    return "Error";
  }
  
}


function Facebook(url) {
  
  var jsondata = UrlFetchApp.fetch("https://graph.facebook.com/"+url);
  try {
    var object = JSON.parse(jsondata.getContentText());
    Utilities.sleep(1000);
    return object.share.share_count;
  } 
  catch (e) {
    return "Error";
  }
}
