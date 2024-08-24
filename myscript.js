//alert('hello!');
function play_se(){
  var warning = new Audio('ここからがマグマなんです.mp3');
  warning.play();
  navigator.vibrate([200,100,200,100,200,100,200]);
}





$(function(){
  //ページ読み込みが完了すると実行
  //$('#test').click(play_se);
//htmlではボタンタグの下に下記を追加
//          <button id="test" class="btn">TEST</button>


//ブラウザバック禁止
history.pushState(null, null, null);
$(window).on('popstate', function(e){
  if (!e.orininalEvent.state){
    play_se();
    history.pushState(null, null, null);
    return;
  }
});

//モーダル表示
  $('.modal').modal({dismissible: false});
  $('#alert').modal('open');
  $('#close').click(function(){
    $('#alert').modal('close');
    play_se();
  })

//端末情報取得
var device = navigator.platform;
if (/android/i.test(device)) {
  device = 'Android端末';
} else if (/iPhone|iPad|iPod/i.test(device)) {
  device = 'iPhone端末';
} else {
  device = '端末';
}

$('#device').text(device);

//カウントダウン処理
  var time = 300;
  setInterval(function(){
    time--;
      $('#timer').text(time);
  }, 1000);
});
