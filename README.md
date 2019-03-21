# small-function
小程序常用小功能

>添加了sass，使用gulp编译；使用教程：https://www.jianshu.com/p/9330fc55c745  

# 使用方式  
>先编译scss文件，使用方式如下  

1.cnpm install   
2.gulp watch  


## 折叠收缩  
>使用transition: all 0.3s ease-out 0s;css3中的，但是由于不能用js点击触发，只能使用hover，所以这里需要动态设置高度；包括添加none类；  

    style="height:{{item.childList.length%3==0?item.childList.length*100/3:item.childList.length%3==1?(item.childList.length+2)*100/3:(item.childList.length+1)*100/3}}rpx"
    
>出现了展开时，后面的背景透明，child设置overflow:hidden即可；  
