enchant();
function Game_load(width,height){
  var game = new Game(width,height);
  game.fps = 20;
  game.onload = function(){
    var View_Scene = function(Datas){
      var scene = new Scene();

      for(var I = 0; I < Datas.length; I++){
        Datas[I] = JSON.parse(Datas[I].データ);
        Texts("旧" + Datas[I].変更箇所,10,150,30);
        Texts(Datas[I].旧,10,200,30);
        Texts("新" + Datas[I].変更箇所,10,550,30);
        Texts(Datas[I].新,10,600,30);
        Texts(Datas[I].カード名,10,10,50);
        break;
      };

      function Texts(Datas,x,y,f){
        Text_length = I;
        console.log(Datas);
        Text[Text_length] = new Sprite();
        Text[Text_length]._element = document.createElement("innerHTML");
        Text[Text_length]._style.font  = f + "px ゴシック";
        Text[Text_length]._element.textContent = Datas;
        Text[Text_length]._style.color = "black";
        Text[Text_length].y = y;
        scene.addChild(Text[Text_length]);
      };

      return scene;
    };
    var URL = "https://script.google.com/macros/s/AKfycbwi6ekqJT9R4EB4hcX5bJ-UwZ_1SMYVVwRCsA6VAZxhVGmx--cV/exec";
    var Options = {
      method: "post",
      body:JSON.stringify({タイプ:"スプレッドシート",ID:"1pwVkckXJIevaj2M3bQ7_uwOr_WBep2UDs2K89IdXWqE",名前:"データ"})
    };
    fetch(URL,Options).then(res => res.json()).then(result => {
      game.replaceScene(View_Scene(result));
      return;
    },);
    return;
  };
  game.start();
};
