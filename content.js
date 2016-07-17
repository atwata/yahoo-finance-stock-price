$(function(){
  // ページから株価の値を取得
  var array = $('.stoksPrice');
  var price = 0;
  $.each(array, function (i, element) {
    val = $(element).text();
    if(val){
      price = val;
    }
  });
  // ,は除外
  sendmessage(price.replace(/,/g, ''));
});

//background.jsにメッセージ送信
function sendmessage(price){
  chrome.extension.sendMessage({
      textprice: price
  },
      function(response){
          console.debug(response.message);
      }
  );
}
