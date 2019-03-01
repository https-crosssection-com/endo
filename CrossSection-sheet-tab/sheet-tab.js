/***  シートタブのドラッグ　 ****/

var tabs1 = document.getElementById('tab-body').getElementsByTagName('a')[0]
var tabs2 = document.getElementById('tab-body').getElementsByTagName('a')[1]
var tabs3 = document.getElementById('tab-body').getElementsByTagName('a')[2]

   console.log(tabs1);
   console.log(tabs2);
   console.log(tabs3);


   


(function (){

    //要素の取得
    var elements1 = tabs1;
    var elements2 = tabs2;
    var elements3 = tabs3;

    var elements = [elements1, elements2, elements3];


    //要素内のクリックされた位置を取得するグローバル（のような）変数
    var xs;
    var ys;

    //マウスが要素内で押されたとき、又はタッチされたとき発火
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }


    //マウスが押された際の関数
    function mdown(e) {


      var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);
      var draggsheet = document.getElementById(targetid);

      var dragglink = this;

        //クラス名に .drag を追加
        draggsheet.classList.add("draggsheet");
        dragglink.classList.add("draggtab");

        console.log(dragglink);

        //タッチデイベントとマウスのイベントの差異を吸収
        if(e.type === "mousedown") {
            var event = e;

        } else {
            var event = e.changedTouches[0];

            }

        //要素内の相対座標を取得
        xs = event.pageX - dragglink.offsetLeft;
        ys = event.pageY - dragglink.offsetTop;

        console.log(xs);
        console.log(ys);


        //ムーブイベントにコールバック
        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }

    //マウスカーソルが動いたときに発火
    function mmove(e) {

        //ドラッグしている要素を取得
        var draggtab = document.getElementsByClassName("draggtab")[0];
        var draggsheet = document.getElementsByClassName("draggsheet")[0];

        console.log(draggtab);
        console.log(draggsheet);

        //同様にマウスとタッチの差異を吸収
        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        e.preventDefault();

        //マウスが動いた場所に要素を動かす
        draggtab.style.top = event.pageY - ys + "px";
        draggtab.style.left = event.pageX - xs + "px";


        draggsheet.style.top = event.pageY - ys + 20 +"px";

        var draggsheet_id = draggsheet.id;
        console.log(draggsheet_id);
        draggsheet_id_number = draggsheet_id.replace(/[^0-9]/g, "");
        console.log(draggsheet_id_number);

        if(draggsheet_id_number == 1){
         draggsheet.style.left = event.pageX - xs + "px";
        }
        else if(draggsheet_id_number == 2){
         draggsheet.style.left = event.pageX - xs - 75 + "px";
        }else{
         draggsheet.style.left = event.pageX - xs -145 + "px";
        }

        

        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        draggtab.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        draggtab.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);

    }

    //マウスボタンが上がったら発火
    function mup(e) {
        var draggtab = document.getElementsByClassName("draggtab")[0];
        var draggsheet = document.getElementsByClassName("draggsheet")[0];

        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mmove, false);
        draggtab.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        draggtab.removeEventListener("touchend", mup, false);

        //クラス名 .drag も消す
        draggtab.classList.remove("draggtab");
        draggsheet.classList.remove("draggsheet");
    }

})()

var tabs = document.getElementById('tab-body').getElementsByTagName('a');
var pages = document.getElementById('tab-body').getElementsByClassName('main-sheet');

// ---------------------------
// ▼B：タブの切り替え処理
// ---------------------------
function changeTab() {
   // ▼B-1. href属性値から対象のid名を抜き出す
   var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);

   var targetsheet = document.getElementById(targetid);
   console.log(targetsheet);

   // ▼B-2. 指定のタブページだけを表示する 機能がいらないので削除しました


   // ▼B-3. クリックされたタブを前面に表示する
   for(var i=0; i<tabs.length; i++) {
      tabs[i].style.zIndex = "2";
      pages[i].style.zIndex = "2";
   }
   this.style.zIndex = "10";
   targetsheet.style.zIndex = "10";

   console.log(this);

   // ▼B-4. ページ遷移しないようにfalseを返す
   return false;
}

// ---------------------------
// ▼C：すべてのタブに対して、クリック時にchangeTab関数が実行されるよう指定する
// ---------------------------
for(var i=0; i<tabs.length; i++) {
   tabs[i].addEventListener('mousedown', changeTab, false);
}

// ---------------------------
// ▼D：最初は先頭のタブを選択しておく
// ---------------------------