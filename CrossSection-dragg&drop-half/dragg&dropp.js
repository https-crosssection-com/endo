  /***** ドラッグ開始時の処理 *****/
function f_dragstart(event){


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
    $(event.currentTarget).append(drag_elm);

  var dropafter = $('#tab-body').find(drag_elm);

    console.log(dropafter);

  $(dropafter).css('transform','none');

  var dropt = $(dropafter).offset().top;
  
  var dropl = $(dropafter).offset().left;
  
  $(dropafter).css('top', dropt);
  
  $(dropafter).css('left', dropl);

  $(dropafter).css('z-index', '11');

  $(dropafter).css('position', 'relative');

   //エラー回避のため、ドロップ処理の最後にdropイベントをキャンセルしておく

  event.preventDefault();

}








