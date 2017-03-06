function toggleInfo(){
    if($('#information').is(':visible') === true){
        $('#information').slideUp();
        $('#infoButton').html('Show info');
    }else{
        $('#information').slideDown();
        $('#infoButton').html('Hide info');
    }
}