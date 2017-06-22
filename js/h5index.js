FastClick.attach(document.body);

/*rem 动态计算html的字体 大小*/
function refreshRem(){
    var desW = 750 ;
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW *100 +'px';
}
refreshRem();
window.addEventListener('resize',refreshRem);

/*swiper*/
var mySwiper = new Swiper('.swiper-container',{
    //参数配置
    direction:'vertical',
    loop:true,
    onTransitionEnd:function(swiper){
        var slides = swiper.slides,//获取的是一个对象数组 滑块的长度
            curIndex = swiper.activeIndex,//获取的是滑块当前的索引值
            total = slides.length,
            targetId = 'page0';
        switch(curIndex){
            case 0:
                targetId+=(total-2);
                break;
            case (total-1):
                targetId+=1;
                break;
            default:
                targetId+=curIndex;
        }

        [].forEach.call(slides,function(item,index){
            if(curIndex==index){
                item.id = targetId;
            }else{
                item.id=null;
            }
        });
    }
});

/*music*/
var oMusic = document.getElementById('music'),
    audioMusic = document.getElementById('audioMusic');
setTimeout(function(){
    audioMusic.play();
    audioMusic.addEventListener('canplay',function(){
        oMusic.className = 'music rotate';
    })
},1000);
oMusic.onclick = function(){
    if(audioMusic.paused){
        audioMusic.play();
        oMusic.className = 'music rotate';
        oMusic.style.backgroundImage = 'url("images/music1.png")';
    }else{
        audioMusic.pause();
        oMusic.className = 'music';
        oMusic.style.backgroundImage = 'url("images/music2.png")';
    }
};










