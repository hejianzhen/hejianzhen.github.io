var curIndex = 0;
//时间间隔(单位毫秒)，每秒钟显示一张，数组共有3张图片放在img文件夹下。
var timeInterval = 5000;  //定义一个存放照片位置的数组，可以放任意个，在这里放3个
var arr = new Array();
arr[0] = "images/tu1.jpg";
arr[1] = "images/tu2.jpg";
arr[2] = "images/tu3.jpg";
arr[3] = "images/tu4.jpg";
arr[4] = "images/tu5.jpg";
setInterval(function(){
    changeImg()
}, timeInterval);

    function changeImg() {   //获得id名为d1的对象
        var obj =$('#t');
    if (curIndex == arr.length - 1) {
    curIndex = 0;
    } else {
    curIndex += 1;
    }
                            //设置d1的背景图片
    obj.style.backgroundImage= "url("+arr[curIndex]+")"; 
    }

    
    
    
    
    
    
    
    