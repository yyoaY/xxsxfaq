// JavaScript Document 
winWidth = 0;
winHeight = 0;
function findDimensions() //函数：获取尺寸
{
//获取窗口宽度
if (window.innerWidth)
winWidth = window.innerWidth;
else if ((document.body) && (document.body.clientWidth))
winWidth = document.body.clientWidth;
//获取窗口高度
if (window.innerHeight)
winHeight = window.innerHeight;
else if ((document.body) && (document.body.clientHeight))
winHeight = document.body.clientHeight;
//通过深入Document内部对body进行检测，获取窗口大小
if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)
{
winHeight = document.documentElement.clientHeight;
winWidth = document.documentElement.clientWidth;
}
//DIV高度为浏览器窗口高度
document.getElementById("bg").style.height= window.winHeight +"px";
//DIV高度为浏览器窗口宽度
document.getElementById("bg").style.width= window.winWidth +"px";
}
findDimensions();
//改变窗口大小时执行，调用函数，获取数值
window.onresize=findDimensions;
