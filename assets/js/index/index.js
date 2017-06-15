//定义模块
//被index.html引入的接口     
//要读取cookie中的头像和用户名,并在页面上呈现
//由于cookie插件是把方法放到了$上,所以也要引入一下jquery
define(['cookie', 'jquery'], function(x, $) {
    //1.获取cookie中的用户头像和名字
    //如果$.cookie('userinfo')不存在,则传递给parse方法的参数是'{}'
    var cookieObj = JSON.parse($.cookie('userinfo') || '{}')
        // console.log(cookieObj)
    $('.profile img').attr('src', cookieObj.tc_avatar)
    $('.profile h4').text(cookieObj.tc_name)
})