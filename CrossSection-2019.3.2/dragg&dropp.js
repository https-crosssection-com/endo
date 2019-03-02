


  var x;
  var y;
  /*****カードのドラッグ＆ドロップ *****/
  /***** ドラッグ開始時の処理 *****/
function f_dragstart(event){

        x = event.pageX - event.target.offsetLeft;
        y = event.pageY - event.target.offsetTop;

        

  //ドラッグするデータのid名をDataTransferオブジェクトにセット
  event.dataTransfer.setData("text", event.target.id);


}

/***** ドラッグ要素がドロップ要素に重なっている間の処理 *****/
function f_dragover(event){
  //dragoverイベントをキャンセルして、ドロップ先の要素がドロップを受け付けるようにする
  event.preventDefault();
}

/***** ドロップ時の処理 *****/
function f_drop(event){
  //ドラッグされたデータのid名をDataTransferオブジェクトから取得
  var id_name = event.dataTransfer.getData("text");
  //id名からドラッグされた要素を取得
  var drag_elm =document.getElementById(id_name);

  console.log(drag_elm.className);

  var drag_elm_class = drag_elm.className;

  if(drag_elm_class == "cm-rotate"){
        drag_elm.insertAdjacentHTML('afterbegin', '<textarea class="text"></textarea>');
  }

    drag_elm.style.top = event.layerY  + "px";
    drag_elm.style.left = event.layerX + "px";

    $(drag_elm).resizable();

    drag_elm.classList.add("drag");

    //ドロップ先にドラッグされた要素を追加
   event.currentTarget.appendChild(drag_elm);
    
   //エラー回避のため、ドロップ処理の最後にdropイベントをキャンセルしておく

  event.preventDefault();

}
















