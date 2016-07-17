chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse){
    // 色の指定
    chrome.browserAction.setBadgeBackgroundColor({color:[36, 161, 211, 230]});
    // 数値を受け取ってバッジテキストに表示する
    chrome.browserAction.setBadgeText({"text":String(request.textprice)});
    sendResponse({message: "kanryou"});
  }
);
