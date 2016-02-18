window.onload=function(){
// 鼠标放上去的轮播效果
    var bannerbigbox=getClass("bannerbigbox")[0];
    var bannerbox=getClass("bannerbox")[0];
    var img=bannerbox.getElementsByTagName("a")
    var buts=bannerbox.getElementsByTagName("li")
    var color=["#fc0150","#ff9923","#f51f5f","#ef0029","#fe3e00","#e7111d","#42d8d7","#f6131e","#fe673a","#410e6d","#ffd801"]
    for (var i = 0; i < buts.length; i++) {
    	buts[i].index=i;
    	buts[i].onmouseover=function(){
    		for (var j = 0; j < buts.length; j++) {
    			buts[j].style.background="rgba(174,27,28,0.5)"
    			img[j].style.display="none"
    		};
    		this.style.background="rgba(88,5,24,0.5)"
    		img[this.index].style.display="block"
    		bannerbigbox.style.background=color[this.index]
    		img[this.index].style.background=color[this.index]
    	}
    	buts[i].onmouseout=function(){
    		num=this.index
    	}
    };
// 自动轮播效果
    var t=setInterval(move,3000)
    var num=0
    function move(){
        num++;
        if(num==11){
        	num=0;
        }
        for (var i = 0; i < buts.length; i++) {
        	buts[i].style.background="rgba(174,27,28,0.5)"
    	    img[i].style.display="none"
        };
        buts[num].style.background="rgba(88,5,24,0.5)"
    	img[num].style.display="block"
    	bannerbigbox.style.background=color[num]
    	img[num].style.background=color[num]
    }

    bannerbox.onmouseover=function(){
        clearInterval(t)
    }
    bannerbox.onmouseout=function(){
    	t=setInterval(move,3000)
    }
// 商品分类选项卡效果
    var smallbox=getClass("smallbox")[0]
    var blList=getClass("b-l-list")
    var bannerLeft=getClass("banner-left")[0]
    var li=bannerLeft.getElementsByTagName("li")
    for (var i = 0; i < li.length; i++) {
    	li[i].index=i
    	li[i].onmouseover=function(){
    		this.style.background="#fff"
    		blList[this.index].style.zIndex=3
    	}
    	li[i].onmouseout=function(){
    		for (var j = 0; j < li.length; j++) {
    			blList[j].style.zIndex=1
                this.style.background="#2b2b2b"
    		};
    	}
       
    };

    for (var i = 0; i < blList.length; i++) {
        blList[i].index=i;
        blList[i].onmouseover=function(){
            this.style.zIndex=3;
            li[this.index].style.background="#fff"
        }
        blList[i].onmouseout=function(){
            this.style.zIndex=1;
            li[this.index].style.background="#2b2b2b"
        }
    };
// 右侧固定定位
    var box35=$(".aaa")
    var flybutton=$("p",$(".gd-position")[0])
    var first=getFirst($(".gd-position")[0])
    var box100=$(".box100")[0]
    for (var i = 0; i < box35.length; i++) {
        box35[i].index=i;
        box35[i].onmouseover=function(){
            this.style.backgroundColor="red"
            flybutton[this.index].style.backgroundColor="red"
            animate(flybutton[this.index],{left:-70},500,Tween.Linear)
        }
        box35[i].onmouseout=function(){
            this.style.backgroundColor="#000"
            flybutton[this.index].style.backgroundColor="#000"
            animate(flybutton[this.index],{left:0},500,Tween.Linear)
        }
    };
    first.onmouseover=function(){
        this.style.backgroundColor="red"
    }
    first.onmouseout=function(){
        this.style.backgroundColor="#000"
    }
    box100.onmouseover=function(){
        this.style.backgroundColor="red"
    }
    box100.onmouseout=function(){
        this.style.backgroundColor="#000"
    }
    // 返回顶部按钮
        var toTop=$("div",$(".box35")[6])[0]
        toTop.onclick=function(){
            var obj=document.documentElement.scrollTop==0?document.body:document.documentElement
            animate(obj,{scrollTop:0},400)
        }
// 鼠标滚轮事件
    var fushibox=$(".fushi-box") 
    var flag=true   
    window.onscroll=function(){  
        var top=$(".scroll")[0]
        var obj=document.documentElement.scrollTop==0?document.body:document.documentElement
    // 鼠标滚动出现顶部搜索栏
        if(obj.scrollTop>=774){
            top.style.display="block"
        }
        if(obj.scrollTop<774){
            top.style.display="none"
        } 

    // 鼠标滚动出现左侧固定栏
        if(obj.scrollTop>1000){
            ul.style.display="block"
        }
        if(obj.scrollTop<=1000){
            ul.style.display="none"
        }
    // 
    if(flag==true){
    for (var i = 0; i < fushibox.length-1; i++) {
            if(obj.scrollTop>=fushibox[i].offsetTop-52&&obj.scrollTop<fushibox[i+1].offsetTop-52){
                for (var j = 0; j < fushibox.length; j++) {
                    ulDiv[j].style.zIndex=1
                };
                ulDiv[i].style.zIndex=3
            }else if(obj.scrollTop>=fushibox[fushibox.length-1].offsetTop-52){
                for (var j = 0; j < fushibox.length; j++) {
                    ulDiv[j].style.zIndex=1
                };
                ulDiv[fushibox.length-1].style.zIndex=3
            }
        };    
    }     
    }

// 搜索栏获取焦点和失去焦点
    var input=$(".input")[0]
    input.onfocus=function(){
        if(input.value==" 震JingDe价 烦恼疯抢24小时 iPad air 2465元"){
            input.value=""
        }
    }
    input.onblur=function(){
        if(input.value==""){
            input.value=" 震JingDe价 烦恼疯抢24小时 iPad air 2465元"
        }
    } 
// 左侧楼层跳转
    var ul=$(".ul")[0]
    var floorbut=$("li",ul)
    var ulDiv=$("div",ul)
    var fushibox=$(".fushi-box")
    for (var i = 0; i < floorbut.length; i++) {
        floorbut[i].index=i
        floorbut[i].onclick=function(){
            flag=false
            var top=fushibox[this.index].offsetTop-52
            var obj=document.documentElement.scrollTop==0?document.body:document.documentElement
            animate(obj,{scrollTop:top},500,Tween.Linear,function(){
                flag=true
            })
        }
    };
    
}