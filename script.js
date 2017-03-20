// var highlighted_tiles = 0 , count = 0, first_selection, second_selection, id1 , id2;
var list = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
var correct = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];

var shuffle= function () {
    
    for (var i = list.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }

    for(var x = 1; x <= list.length; x++){
        $(".tile" + x).text(list[x-1]);
    }
    for(var k=1;k<=list.length;k++){
      if($('.tile'+k).text()%3==1)
      {
        // console.log(parseInt($('.tile'+k).text())%3);
        $('.tile'+k).css({
            'background-image': 'url(m1.png)',
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        });
      } 
      else if($('.tile'+k).text()%3==2)
      {
        // console.log(parseInt($('.tile'+k).text())%3);
        $('.tile'+k).css({
            'background-image': 'url(m2.png)',
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        });
      } 
      else
      {
        // console.log(parseInt($('.tile'+k).text())%3);
        $('.tile'+k).css({
            'background-image': 'url(m3.png)',
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        });
      } 
    }
    
};


$(document).ready(function() {
    //$('.puzzle').hide();
    // $('.swap').hide();
    // $('.scroll').hide();
    $('.end').hide();
    $('.end2').hide();
    $('.container').hide();
    $('.scroll').hide();
    //$('.scroll1').hide();
    $('#arrow1').click(function(){
        $('.scroll1').hide();
     $('.scroll').show(2000);
    $('#arrow').click(function(){
        $('.scroll').hide(1000);
        $('.container').show(2000);
        $('.puzzle').css('transform','scale(0.8)');
    shuffle();
    // console.log($('.one').css('top'));

    $('.reset').click(function(){
        shuffle();
        count=0;
        first.removeClass('selected');
        second.removeClass('selected');
        first=undefined;
        second=undefined;
        
        // first=undefined;
        // second=undefined;
        // count=0;
        // first.removeClass('selected');
        // second.removeClass('selected');

    });
    
    
    var count=0;
    $(".puzzle>div").click(function(){
        
        if(count==0 && !($(this).hasClass('selected'))){
            $(this).addClass('selected');
            count++;
            first=$(this);
            // console.log(count);
        }
        else if(count==1 && !($(this).hasClass('selected'))){
            $(this).addClass('selected');
            second=$(this);
            count++;
            // console.log(count);
        }
        else if($(this).hasClass('selected')){
            $(this).removeClass('selected');
            count--;
            // console.log(count);
        }
        else if(count==2 && !($(this).hasClass('selected'))){
            first.removeClass('selected');
            second.removeClass('selected');
            $(this).addClass('selected');
            first=$(this);
            second=undefined;
            count=1;
        }
    });
    $('.swap').click(function(){
       

        if(count==0){
            alert('Select two tiles first!');
            first=undefined;
            second=undefined;
        }
        if(count==1){
            alert('Select one more tile!');
            second=undefined;
        }
        var t_top = first.css('top');
        var t_left = first.css('left');
            first.css({
                'top' : second.css('top'),
                'left' : second.css('left')
            }).removeClass('selected');
            second.css({
                 'top': t_top,
                 'left': t_left
            }).removeClass('selected');

        
        count = 0;
        first=undefined;
        second=undefined;
               
        var one=['10px','125px','245px'];
        var two=['30px','265px','500px'];
        //    var top=function (i){
        //         console.log($('.tile'+i).css('top'));
        //     }
    var func=function(){
        var x=0;
        for(var i=1;i<=correct.length;i++){
            if($('.tile'+i).text()=='1' && $('.tile'+i).css('top')=='10px' && $('.tile'+i).css('left')=='30px'){
                x++;
            }
            if($('.tile'+i).text()=='2' && $('.tile'+i).css('top')=='10px' && $('.tile'+i).css('left')=='265px'){
                x++;
            }
            if($('.tile'+i).text()=='3' && $('.tile'+i).css('top')=='10px' && $('.tile'+i).css('left')=='500px'){
                x++;
            }
            if($('.tile'+i).text()=='4' && $('.tile'+i).css('top')=='125px' && $('.tile'+i).css('left')=='30px'){
                x++;
            }
            if($('.tile'+i).text()=='5' && $('.tile'+i).css('top')=='125px' && $('.tile'+i).css('left')=='265px'){
                x++;
            }
            if($('.tile'+i).text()=='6' && $('.tile'+i).css('top')=='125px' && $('.tile'+i).css('left')=='500px'){
                x++;
            }
            if($('.tile'+i).text()=='7' && $('.tile'+i).css('top')=='245px' && $('.tile'+i).css('left')=='30px'){
                x++;
            }
            if($('.tile'+i).text()=='8' && $('.tile'+i).css('top')=='245px' && $('.tile'+i).css('left')=='265px'){
                x++;
            }
            if($('.tile'+i).text()=='9' && $('.tile'+i).css('top')=='245px' && $('.tile'+i).css('left')=='500px'){
                x++;
            }
        }
         if(x==9){
            alert('Congratulations! You completed the puzzle.');
            $('.puzzle').css('transform','scale(0.3)');
            // $('.puzzle div').css('transform','scale(0.3)');
            $('.puzzle').hide("drop",{direction:"down"},1000);
            // $('.puzzle div').hide("drop",{direction:"down"},1000);
            $('.swap').hide("drop",{direction:"down"},1000);
            $('.reset').hide("drop",{direction:"down"},1000);
            $('.end').show(2000);

            
         };
        
    };
    setTimeout(func,500);
    $('#potion').click(function(){
        window.open('http://www.sameer21.esy.es/assignment2','_self');          
    });
    $('#exit').click(function(){
       $('.end').hide("drop",{direction:"down"},1000);
       $('.end2').show(1000);
    });
            
        //     setTimeout(top(i),2000);
        //     // setTimeout(function(i){console.log($('.tile'+i).css('left'));},2000);
        //     // setTimeout(function(i){console.log($('.tile'+i).text());},2000);

        // }
        // var boom = function(){
        //     for (var i = 1; i <= correct.length; i++) {
        //         console.log($('.tile'+i).css('top'));
        //     }
        // };
        // setTimeout(boom, 2000);

        // for(var j=1;j<=correct.length;j++){
        //     if(j%3==2){
        //        console.log($('.tile'+j).css('top'));
        //        console.log($('.tile'+j).css('left'));
        //        console.log($('.tile'+j).text());
        //        console.log($('.tile'+j).position());
        //     }            
        // }       


    });
    });
});
    
    // for(var k=1;k<=list.length;k++){
    //     if(k%3==1 && $('.tile'+k).text()=='k'){
    //         $('.tile'+k).css('background-color':'red');
    //     }     
    // }
    // for(var k=1;k<=list.length;k++){
    //   if($('.tile'+k).text()%3==1)
    //   {
    //     // console.log(parseInt($('.tile'+k).text())%3);
    //     $('.tile'+k).css('background-color','red');
    //   } 
    //   else if($('.tile'+k).text()%3==2)
    //   {
    //     // console.log(parseInt($('.tile'+k).text())%3);
    //     $('.tile'+k).css('background-color','green');
    //   } 
    //   else
    //   {
    //     // console.log(parseInt($('.tile'+k).text())%3);
    //     $('.tile'+k).css('background-color','blue');
    //   } 
    // }
    // $('.slide').click(function(){

    // });

});
