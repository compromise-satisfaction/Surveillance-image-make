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
        Texts("新" + Datas[I].変更箇所,10,550,30);
        Texts(Datas[I].カード名,10,10,60);
        Card_Text(Datas[I].旧,Datas[I].新,Datas[I].赤,Datas[I].青);
        break;
      };

      function A_B(a,b){
        var Cut = b;
        for(var I = 0; I < a.length; I++){
          if(Cut==a.slice(I,Cut.length+I)) break;
          else console.log(a.slice(I,Cut.length+I));
        };
        console.log(a.length);
        console.log(b.length);
        return;
      };

      function Card_Text(a,b,c,d){
        if(!c) c = {};
        if(!d) d = {};
        var New_text = [];
        var Old_text = [];

        /*

        if(a.length > b.length) A_B(a,b);
        else A_B(b,a);

        for(var I = 0; I < a.length; I++){
          for(var J = a.length; J > 0; J--){
            c = b.slice(I,J);
            c = a.match(c);
            if(c) d[c] = I;
          };
        };

        for(var I = 0; I < Object.keys(d).length; I++){
          if(!e[d[Object.keys(d)[I]]]) e[d[Object.keys(d)[I]]] = Object.keys(d)[I];
          else{
            if(e[d[Object.keys(d)[I]]].length < Object.keys(d)[I].length){
              e[d[Object.keys(d)[I]]] = Object.keys(d)[I];
            };
          };
        };

        d = [];
        f = null;

        for(var I = 0; I < Object.keys(e).length; I++){
          if(d.length == 0){
            d[d.length] = e[Object.keys(e)[I]];
            f = d[d.length-1];
          }
          else{
            if(f.slice(1)!=e[Object.keys(e)[I]]){
              d[d.length] = e[Object.keys(e)[I]];
              f = d[d.length-1];
            }
            else f = f.slice(1);
          };
        };

        var aa = a;
        var bb = b;
        var cc = null;

        for(var I = 0; I < d.length; I++){
          cc = "";
          for(var J = 0; J < d[I].length; J++) cc += "嬲";
          while(aa.match(d[I])) aa = aa.replace(d[I],cc);
          while(bb.match(d[I])) bb = bb.replace(d[I],cc);
        };

        for(var I = 0; I < a.length; I++){
          if(aa[I]=="嬲") New_text[I] = [a[I],"white"];
          else New_text[I] = [a[I],"coral"];
        };
        for(var I = 0; I < b.length; I++){
          if(bb[I]=="嬲") Old_text[I] = [b[I],"white"];
          else Old_text[I] = [b[I],"lightsteelblue"];
        };

        */

        for(var I = 0; I < a.length; I++){
          if(c[I+1]) New_text[I] = [a[I],"coral"];
          else New_text[I] = [a[I],"white"];
        };

        for(var I = 0; I < b.length; I++){
          if(d[I+1]) Old_text[I] = [b[I],"lightsteelblue"];
          else Old_text[I] = [b[I],"white"];
        };

        var X = 10;
        var Y = 200;
        X = 10;
        Y = 200;
        for(var I = 0; I < New_text.length; I++){
          Texts(New_text[I][0],X,Y,30,New_text[I][1]);
          X += 30;
          if(X==1540){
            X = 10;
            Y+= 40;
          };
        };
        X = 10;
        Y = 600;
        for(var I = 0; I < Old_text.length; I++){
          Texts(Old_text[I][0],X,Y,30,Old_text[I][1]);
          X += 30;
          if(X==1540){
            X = 10;
            Y+= 40;
          };
        };
      };

      function Texts(Datas,x,y,f,b){
        Text_length = Text.length;
        Text[Text_length] = new Sprite();
        Text[Text_length]._element = document.createElement("innerHTML");
        Text[Text_length]._style.font  = f + "px ゴシック";
        Text[Text_length]._element.textContent = Datas;
        Text[Text_length]._style.color = "black";
        Text[Text_length]._style.background = b;
        Text[Text_length].x = x;
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
