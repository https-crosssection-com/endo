


	$(function () {

    $('#lbl_btn_new').click(function () {

        $('#site-map').hide();
        $('#tab-body').show();
        $('.main-display').show();
        $('.main-sheet').resizable();

    });

});
	$(function () {

    $('input[id^="add_card_"]').click(function () {
        var a = $(this);
        console.log(a);

        $('#rotate-div').show();

    });

});

    $(function () {


    $('#lbl_btn_docs').click(function () {

        $('#docs-sheet').show();

        
    });

});




    