/**
 * Created by wcs on 2016/9/25.
 */

//调用全屏的方法
$(function(){
    $('#dowebok').fullpage({
        //设置每一屏幕的颜色
        sectionsColor:
            ['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],      
        afterLoad:function(link,index){           
            $('.section').removeClass('current');
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');    
            },100) 
        }
    });
});