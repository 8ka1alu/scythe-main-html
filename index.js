(function(){
  'use strict';
  
  var show = document.getElementById('show');
  //#showを取得
  var hide = document.getElementById('hide');
  //#hideを取得

  show.addEventListener('click',function(){
    //showをクリックした時、、
    document.body.className = 'menu-open';
    //bodyに.menu-openをつける
  });

    hide.addEventListener('click',function(){
    //hideをクリックした時、、
    document.body.className = '';
    //bodyのクラスを外す
  });

})();
