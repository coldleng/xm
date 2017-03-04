/**
 * Created by SAMSUNG on 2017/1/27.
 */
window.onload=function(){
    var picindex = 0;
    var dianindex =0;
    var picbox =document.querySelector(".slider_photo")
    //var box =document.querySelector(".xm_slider")
    var imgwidth =picbox.offsetWidth;
    console.log(imgwidth);
    var picul =picbox.children[0]
    var piclis=picul.children;
    var firstimg =piclis[0].cloneNode(true);
    picul.appendChild(firstimg);
    //console.log(picul);
    //console.log(piclis);
    var left =document.querySelector(".arrow_left");
    var right =document.querySelector(".arrow_right");
    console.log(left);
    //×Ô¶¯ÂÖ²¥
    setInterval(function(){
        right.onclick();
    },2000)

    left.onclick =function(){
        if(picindex===0){
            picul.style.transition ="";
            picindex =piclis.length-1;
            picul.style.transform ='translateX('+-picindex*imgwidth+'px)';
            //return;
        }
        setTimeout(function(){
            picindex--;
            picul.style.transition ="all 1s"
            picul.style.transform ='translateX('+-picindex*imgwidth+'px)'
        },50)
    }

    right.onclick =function(){
        if(picindex===piclis.length-1){
            picul.style.transition ="";
            picul.style.transform ='translateX(0)';
            picindex =0;
        }
        setTimeout(function(){
            picindex++;
            picul.style.transition ="all 1s";
            picul.style.transform ='translateX('+-picindex*imgwidth+'px)'
        },50)
    }
}

