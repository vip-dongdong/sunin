//1. 兼容IE和现代浏览器获取对象
function getClass(select,obj){
    var obj=obj||document;
    if(obj.getElementsByClass){
       return obj.getElementsByClassName(select)
       
    }else{
    	var newa=[]
    	var b=obj.getElementsByTagName('*')
    	
    	for (var i = 0; i < b.length; i++) {
    		if(b[i].className==select){
    			newa.push(b[i])
    		}
    	};return newa

    }

}


//2. 行内和外部样式通用的属性获取方法   getComputedStyle是现代浏览器window的一个属性
function getStyle(obj,shuxing){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[shuxing]
    }else{
        return obj.currentStyle[shuxing]
    }
}
//3.兼容IE和现代浏览器获取对象中的文本
function getText(obj,val){
    if(val==undefined){
        if(obj.textContent!=undefined){
        return obj.textContent
        }else{
        return obj.innerText;
        }
    }else{
        if(obj.textContent!=undefined){
            obj.textContent=val
        }else{
            obj.innerText=val
        }
    }
    
}

/*4. $函数       传人".one"就根据getClass获取
                 传人"#aa"就根据getElementById获取
                 传入"div"就根据getElementsByTagName获取*/

function $(select,obj){
    var obj=obj||document
    if(typeof select=="string"){
        if(select.slice(0,1)=="."){
            return getClass(select.slice(1),obj)
        }else if(select.slice(0,1)=="#"){
            return obj.getElementById(select.slice(1))
            
        }
        else if(/^[a-z|a-z1-10]{1,10}$/g.test(select)){
            return obj.getElementsByTagName(select)
        }
    }else if(typeof select=="function"){
        window.onload=function(){
            select()
        }
    }
}


/*5. 获取元素子节点     obj传父元素      type传"a"的时候只获取元素节点，传"b"的时候获取元素节点和非空文本*/
function getChilds(obj,type){
    var sons=obj.childNodes
    var arr=[]
    var type=type||"a"
    if(type=="a"){
        for (var i = 0; i < sons.length; i++) {
            if(sons[i].nodeType==1){
                arr.push(sons[i])
            }
        };
    }else if(type=="b"){
        for (var i = 0; i < sons.length; i++) {
            if(sons[i].nodeType==1||(sons[i].nodeType==3&&trim(sons[i].nodeValue)!="")){
                arr.push(sons[i])
            }
        };
    }
    return arr
}
 /*6.去除字符串两端空格的函数               传"l"去除字符串左边的空格;传"r"去除字符串右边的空格;传"b"去除两边空格;传"a"去除两边以及字符串中间的空格*/   
function trim(str,type){
    var type=type||"b"
    if(type=="b"){
        return str.replace(/^\s*|\s*$/g,"")
    }else if(type=="l"){
        return str.replace(/^\s*/g,"")
    }else if(type=="r"){
        return str.replace(/\*$/g,"")
    }else if(type=="a"){
        return str.replace(/\s*/g,"")
    }
}

//7. 获取父元素中的第一个元素节点
function getFirst(obj){
    return getChilds(obj)[0]
}
//8. 获取父元素的最后一个元素节点
function getLast(obj){
    var childs=getChilds(obj)
    return childs[childs.length-1]
}
//9. 获取下一个兄弟元素节点
// 方法一  
function getNext(obj){
    var next=obj.nextSibling;
    if(next==null){
        return
    }else{
        while(next.nodeType!=1){
            next=next.nextSibling;
            if(next=null){
                return
            }
            // next=getNext(next)   递归函数可以替换while里面的执行的步骤
        }
    }
    
    return next
}
// 方法二
/*function getNext(obj){
    var childs=getChilds(obj.parentNode)
    if(childs[childs.length-1]==obj){
        return "这是最后一个元素节点"
    }else{
        for (var i = 0; i < childs.length; i++) {
            if(childs[i]==obj){
              return obj=childs[i+1]
            }
        };
    }
}*/

//10. 获取上一个兄弟元素节点
// 方法一
function getPrevious(obj){
    var previous=obj.previousSibling
    if(previous==null){
        return
    }
    while(previous.nodeType!=1){
        previous=previous.previousSibling;
        if(previous==null){
            return
        }
    }
    return previous
}
// 方法二和9的方法二相同


//11. obj1 插入到 obj2 的后面
// 方法一
function insertAfter(obj1,obj2){
    var father=obj.parentNode;
    var next=getNext(obj2)
    if(next){
        father.insertBefore(obj1,next)
    }else{
        father.appendChild(obj1)
    }
}









// 方法二
/*function insertAfter(obj1,obj2){
    var father=obj2.parentNode;
    var sons=getChilds(father)
    for (var i = 0; i < sons.length; i++) {
        if(sons[i]==obj2){
            father.insertBefore(obj1,sons[i+1])
        }
    };
}*/