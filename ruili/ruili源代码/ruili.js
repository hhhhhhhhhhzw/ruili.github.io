window.onload=function(){
    function hotChange()
    {
        var current_index=0;
        var timer=window.setInterval(autoChange,3000);
        var button_li=document.getElementById("button").getElementsByTagName("li");
        var pic_li=document.getElementById("topleft_pic").getElementsByTagName("li");
        for(var i=0;i<button_li.length;i++)
        {
            button_li[i].onmouseover=function()
            {
                if(timer){clearInterval(timer);}
                for(var j=0;j<pic_li.length;j++)
                {
                    if(button_li[j]==this)
                    {
                        current_index=j;
                        button_li[j].className="current";
                        pic_li[j].className="current";
                    }
                    else
                    {
                        button_li[j].className="but";
                        pic_li[j].className="pic";
                    }
                }
            }
            button_li[i].onmouseout=function()
            {
                timer=setInterval(autoChange,3000);
            }
        }
        function autoChange()
        {
            ++current_index;
            if(current_index==button_li.length){current_index=0}
            for(var i=0;i<button_li.length;i++)
            {
                if(i==current_index)
                {
                    button_li[i].className="current";
                    pic_li[i].className="current";
                }
                else
                {
                    button_li[i].className="but";
                    pic_li[i].className="pic";
                }
            }
        }
    }
    hotChange();

    function school()
    {
        var speed=25;
        var imgbox=document.getElementById("imgbox");
        imgbox.innerHTML+=imgbox.innerHTML;
        var span=imgbox.getElementsByClassName("imgs");
        var timer1=window.setInterval(marquee,speed);
        imgbox.onmouseover=function(){clearInterval(timer1);}
        imgbox.onmouseout=function(){timer1=setInterval(marquee,speed);};
        function marquee()
        {
            if(imgbox.scrollLeft>span[0].offsetWidth)
            {
                imgbox.scrollLeft=0;
            }
            else
            {
                ++imgbox.scrollLeft;
            }
        }
    }
    school();
    function Switchul()
    {
        var top1=document.getElementById("menu1");
        var top2=document.getElementById("menu2");
        var lis1=document.getElementById("secul1");
        var lis2=document.getElementById("secul2");
        top1.onmouseover=function(){
            lis1.style.display="block";
            lis2.style.display="none";
            top1.className="menu11"
            top2.className="menu"
        }
        top2.onmouseover=function(){
            lis1.style.display="none";
            lis2.style.display="block";
            top1.className="menu"
            top2.className="menu22"
        }

    }
    Switchul();
// 下面的图片切换
    function hotChange2()
    {
        var current_index=0;
        var timer=window.setInterval(autoChange,3000);
        var button_li=document.getElementById("button2").getElementsByTagName("li");
        var pic_li=document.getElementById("topleft_pic2").getElementsByTagName("li");
        for(var i=0;i<button_li.length;i++)
        {
            button_li[i].onmouseover=function()
            {
                if(timer){clearInterval(timer);}
                for(var j=0;j<pic_li.length;j++)
                {
                    if(button_li[j]==this)
                    {
                        current_index=j;
                        button_li[j].className="current";
                        pic_li[j].className="current";
                    }
                    else
                    {
                        button_li[j].className="but";
                        pic_li[j].className="pic";
                    }
                }
            }
            button_li[i].onmouseout=function()
            {
                timer=setInterval(autoChange,3000);
            }
        }
        function autoChange()
        {
            ++current_index;
            if(current_index==button_li.length){current_index=0}
            for(var i=0;i<button_li.length;i++)
            {
                if(i==current_index)
                {
                    button_li[i].className="current";
                    pic_li[i].className="current";
                }
                else
                {
                    button_li[i].className="but";
                    pic_li[i].className="pic";
                }
            }
        }
    }
    hotChange2();
}

function $class(obj,className){
    return obj.getElementsByClassName(className)[0];
}
// axios.defaults.baseURL="http://localhost:8888";
//扩展二-----引入json
var ojson_test=$class(document,"json_test");
console.log(ojson_test);
var mtopmid_mid2=$class(document,"topmid_mid2");
mtopmid_mid2.parentNode.removeChild(mtopmid_mid2);
axios.get("ruili.json")
    .then(res=>{
        console.log(res.data);
        for(var i=0;i<res.data.length;i++){
            var otopmid_mid2=mtopmid_mid2.cloneNode(true);
            // console.log(otopmid_mid2);
            var ohead0=$class(otopmid_mid2,"head0");
            var oimg2=$class(otopmid_mid2,"img2");
            var otitle0=$class(otopmid_mid2,"title0");
            var oa1=$class(otopmid_mid2,"a1");
            var oa2=$class(otopmid_mid2,"a2");
            var oa3=$class(otopmid_mid2,"a3");
            ohead0.textContent=res.data[i].head;
            oimg2.src=res.data[i].img;
            otitle0.textContent=res.data[i].title;
            oa1.textContent=res.data[i].array[0].title;
            oa2.textContent=res.data[i].array[1].title;
            oa3.textContent=res.data[i].array[2].title;
            ojson_test.appendChild(otopmid_mid2);
        }
    }).catch(err=>{
        console.log(err);
    })