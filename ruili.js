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

function $(id){
    return document.getElementById(id);
}

function $class(obj,className){
    return obj.getElementsByClassName(className)[0];
}
// TOP10悬停动作
var top10=document.getElementsByClassName("top10_li");
console.log(top10);
for(var i=0;i<top10.length;i++){
    top10[i].onmouseover=function(){
        for(var j=0;j<10;j++){
            if(this==top10[j])$class(this,"detail").style.display="block";
            else $class(top10[j],"detail").style.display="none";
        }
    }
}


// 我要试用悬停动作
var images=document.getElementsByClassName("trypic");
var try_details=document.getElementsByClassName("try_detail");
for(var i=0;i<images.length;i++){
    images[i].onmouseover=function(){
        for(var j=0;j<images.length;j++){
            if(this==images[j]){
                images[j].style.width="63px";
                images[j].style.height="63px";
                try_details[j].style.display="block";
            }
            else{
                images[j].style.width="56px";
                images[j].style.height="56px";
                try_details[j].style.display="none";
            } 
        }
    }
}







//扩展二-----引入json
axios.get("ruili.json")
    .then(res=>{
        console.log(res.data);
        var ojson_test=$class(document,"json_test");
        console.log(ojson_test);
        var mtopmid_mid2;
        for(var i=0;i<4;i++){
            mtopmid_mid2=$class(document,"topmid_mid2");
            mtopmid_mid2.parentNode.removeChild(mtopmid_mid2);
        }
        var mclear=$class(document,"clear");
        console.log(mclear);
        for(var i=0;i<res.data.length;i++){
            var otopmid_mid2=mtopmid_mid2.cloneNode(true);
            var oclear=mclear.cloneNode(true);
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
            ojson_test.appendChild(oclear);
        }
    }).catch(err=>{
        console.log(err);
    })


// 天气预报
// 获取weather元素
var oweather=$class(document,"weather");
var mtoday=$class(oweather,"today");
var mmoreCasts_ul=$class(oweather,"moreCasts_ul");
var mmoreCasts=$class(oweather,"moreCasts");
mmoreCasts.parentNode.removeChild(mmoreCasts);
mmoreCasts_ul.parentNode.removeChild(mmoreCasts_ul);
mtoday.parentNode.removeChild(mtoday);

//获取天气预报
axios.get("https://restapi.amap.com/v3/weather/weatherInfo?city=350100&extensions=all&key=4af24d89dc0ae4c84738067be979226b")
.then(res=>{
    console.log(res.data.forecasts[0].casts);
    var weather=res.data.forecasts[0].casts;
    var city=res.data.forecasts[0].city;
    var otoday=mtoday.cloneNode(true);
    var ocity=$class(otoday,"city");
    ocity.textContent=city+":";
    var otodayDate=$class(otoday,"date");
    otodayDate.textContent="今天("+weather[0].date+")";
    var otodayDayWeatherIcon=$class(otoday,"dayWeatherIcon");
    otodayDayWeatherIcon.src="icon/"+weather[0].dayweather+".png";
    var otodayDayWeather=$class(otoday,"dayWeather");
    otodayDayWeather.textContent="  "+weather[0].dayweather;
    var otodayDayTemp=$class(otoday,"dayTemp");
    otodayDayTemp.textContent=weather[0].daytemp+"℃";
    var otodayNightWeatherIcon=$class(otoday,"nightWeatherIcon");
    otodayNightWeatherIcon.src="icon/"+weather[0].nightweather+".png";
    var otodayNightWeather=$class(otoday,"nightWeather");
    otodayNightWeather.textContent="  "+weather[0].nightweather;
    var otodayNightTemp=$class(otoday,"nightTemp");
    otodayNightTemp.textContent=weather[0].nighttemp+"℃";
    oweather.appendChild(otoday);
    for(var i=1;i<weather.length;i++){
        var omoreCasts=mmoreCasts.cloneNode(true);
        var omoreCastsDayWeatherIcon=$class(omoreCasts,"dayWeatherIcon");
        omoreCastsDayWeatherIcon.src="icon/"+weather[i].dayweather+".png";
        var omoreCastsDayWeather=$class(omoreCasts,"dayWeather");
        omoreCastsDayWeather.textContent="  "+weather[i].dayweather;
        var omoreCastsDayTemp=$class(omoreCasts,"dayTemp");
        omoreCastsDayTemp.textContent=weather[i].daytemp+"℃";
        var omoreCastsNightWeatherIcon=$class(omoreCasts,"nightWeatherIcon");
        omoreCastsNightWeatherIcon.src="icon/"+weather[i].nightweather+".png";
        var omoreCastsNightWeather=$class(omoreCasts,"nightWeather");
        omoreCastsNightWeather.textContent="  "+weather[i].nightweather;
        var omoreCastsNightTemp=$class(omoreCasts,"nightTemp");
        omoreCastsNightTemp.textContent=weather[i].nighttemp+"℃";

        var omoreCastsDate=$class(omoreCasts,"date");
        //判断日期是周几
        var daystring="";
        if(i==1){
            daystring="明天";
        }
        else if(weather[i].week==1)daystring="周一";
        else if(weather[i].week==2)daystring="周二";
        else if(weather[i].week==3)daystring="周三";
        else if(weather[i].week==4)daystring="周四";
        else if(weather[i].week==5)daystring="周五";
        else if(weather[i].week==6)daystring="周六";
        else if(weather[i].week==7)daystring="周日";
        omoreCastsDate.textContent=daystring+"("+weather[i].date+")";

        mmoreCasts_ul.appendChild(omoreCasts);
    }
    oweather.appendChild(mmoreCasts_ul);
}).catch(err=>{
    console.log(err);
})