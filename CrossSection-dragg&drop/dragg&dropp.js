


  var x;
  var y;

  /***** ドラッグ開始時の処理 *****/
function f_dragstart(event){

       event.target.classList.add("drag");

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

   //ドロップ先にドラッグされた要素を追加
   event.currentTarget.appendChild(drag_elm);

    drag_elm.style.top = event.layerY  + "px";
    drag_elm.style.left = event.layerX + "px";


    var dropafter = $('#tab-body').find('.cm-rotate');


   $(dropafter).css('transform','none');

        $(dropafter).css('z-index','11');

    
   //エラー回避のため、ドロップ処理の最後にdropイベントをキャンセルしておく

  event.preventDefault();

}







