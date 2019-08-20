
var sound=1;
//url中的sound值
urlinfo=window.location.href; //获取当前页面的url
len=urlinfo.length;//获取url的长度
offset=urlinfo.indexOf("?");//设置参数字符串开始的位置
newssoundinfo=urlinfo.substr(offset,len)//取出参数字符串 这里会获得类似“id=1”这样的字符串
newssounds=newssoundinfo.split("=");//对获得的参数字符串按照“=”进行分割
sound=newssounds[1];//得到参数值// JavaScript Document