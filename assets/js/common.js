'use strict';
{
  document.head.insertAdjacentHTML('afterbegin' ,`
  <meta charset=”utf-8″>
  <meta name = "viewport" content = "width = device-width, initial-scale=1, user-scalable=yes">
  <meta name="description" content="保護猫カフェとワークスペースが融合した保護猫と大人のための「癒し猫仕事空間」です。">
  <!--<meta property="og:url" content="http://www.mySite.com/">-->

  <meta property="og:title" content="Meow Work"/>
  <meta property="og:site_name" content="Meow Work">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="ja-JP">
  <meta property="og:image" content="assets/images/common/ogp.jpg">
  <meta property="og:description" content="保護猫カフェとワークスペースが融合した保護猫と大人のための「癒し猫仕事空間」です。"/>
  <meta name="twitter:card" content="summary"/>

  <title>Meow Work</title>
  <link rel="stylesheet" href="assets/css/reset.css">
  <link rel="stylesheet" href="assets/css/common.css">
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
  />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kosugi&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://use.typekit.net/sbl1zjs.css">
  
  <link href="assets/images/common/favicon.ico" rel="icon" type="image/x-icon" />
  <link rel="apple-touch-icon" href="assets/images/common/apple-touch-icon.png">
  `);
}

window.onload = function () {
  var nav = document.getElementById('nav-wrapper');
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
  });
  blackBg.addEventListener('click', function () {
      nav.classList.remove('open');
  });
};

//topボタン↓↓
// セレクタ名（.pagetop）に一致する要素を取得
const pagetop_btn = document.querySelector(".pagetop");

// .pagetopをクリックしたら
pagetop_btn.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// スクロールされたら表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}

// const fadeIn = function(){

//   const target = document.getElementsByClassName('fade-in');
//   const position = Math.floor(window.innerHeight * .75);

//   for (let i = 0; i < target.length; i++) {

//       let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
//       let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom);

//       if (offsetTop < position) {
//           target[i].classList.add('scroll-in');
//       }
      
//       if(offsetBottom < 0){
//           target[i].classList.remove('scroll-in');
//       }
//   }
// }
// window.addEventListener('scroll', fadeIn, false);


function load_effect() {
  var element = document.getElementsByClassName('load-fade');
  if(!element) return; // 要素がない場合は終了
  
  for(var i = 0; i < element.length; i++) { 
    element[i].classList.add('is-show');
  }
}
setTimeout(load_effect, 900); // 900ミリ秒経過後に実行


function scroll_effect() {
  var element = document.getElementsByClassName('scroll-up');
  if(!element) return;
                      
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;
  var showTiming = 200; // 要素を表示するタイミング
  for(var i = 0; i < element.length; i++) { 
    var elemClientRect = element[i].getBoundingClientRect(); 
    var elemY = scrollY + elemClientRect.top; 
    if(scrollY > elemY - windowH + showTiming) {
      element[i].classList.add('is-show');
    }
  }
}
window.addEventListener('scroll', scroll_effect); // 