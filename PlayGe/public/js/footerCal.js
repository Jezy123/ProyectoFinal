$(document).ready(function(){
    if($("body").height()< screen.height){
        $("footer").css({
            position: 'absolute',
            bottom: '0px',
            width :'100%'

        });
    }
})