`use strict`;
//获得秒杀导航栏li对象数组
var tabs = document.getElementById('tabs').getElementsByTagName('li');

var lists = document.getElementById('goods').getElementsByTagName('ul');
//把每个li绑定一个函数
for(let i = 0;i <tabs.length;i++){
    tabs[i].onclick = showlist;
}
//每次点击判断，将自己的class设置成active，其他则清空
function showlist(){
    for (let i = 0; i < tabs.length; i++) {
        if(tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }else{
            tabs[i].className = "";
            lists[i].className = "clearfix";
        }
    }
}
var nav = document.getElementById('seckill-nav');
window.onscroll = function (){

    let height = document.documentElement.scrollTop;
    if(height>=260){
        nav.className="seckill-nav seckill-navfixed";
    }else{
        nav.className="seckill-nav";
    }
}

//倒计时功能：
var timer = document.getElementById('timer');
var hh = timer.textContent[0]+timer.textContent[1];
var mm = timer.textContent[3]+timer.textContent[4];
var ss = timer.textContent[6]+timer.textContent[7];

setInterval (function () {
    timer.innerText = showtime();
    }, 1000);  //反复执行函数本身
function showtime(){
    ss--;
    if(ss==-1){
        ss = 59;
        mm--;
    }
    if(mm==-1){
        mm=59;
        hh--;
    }
    if(hh<0) hh=0;
    return hh+':'+mm+':'+ss;
}


