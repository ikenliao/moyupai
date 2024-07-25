if(aidaori()){
    $("html").css({
        "filter":"gray !important",
        "filter":"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
        "filter":"grayscale(100%)",
        "-webkit-filter":"grayscale(100%)",
        "-moz-filter":"grayscale(100%)",
        "-ms-filter":"grayscale(100%)",
        "-o-filter":"grayscale(100%)" 
    });
}

function aidaori(){
    var aidaoriarr=new Array("0404","0512","0707","0909","0918","1213");
    //2020年4月4日 新冠肺炎哀悼日，清明节
    //2010年4月14日，青海玉树地震
    //2008年5月12日，四川汶川地震
    //2010年8月7日，甘肃舟曲特大泥石流
    //1976年9月9日，毛泽东逝世
    //1937年12月13日，南京大屠杀
    var mydate = new Date();
    var str = "";// + mydate.getFullYear();
    var mm = mydate.getMonth()+1;
    if(mydate.getMonth()>9){
      str += mm;
    }else{
      str += "0" + mm;
    }
    if(mydate.getDate()>9){
      str += mydate.getDate();
    }else{
      str += "0" + mydate.getDate();
    }
    if(aidaoriarr.indexOf(str)>-1){
        return 1;
    }else{
        return 0;
    }
}


//加载完成后执行
window.addEventListener('load', function () {
    //载入动画
    $('#loading-box').attr('class', 'loaded');
    $('#bg').css("cssText", "transform: scale(1);filter: blur(0px);transition: ease 1.5s;");
    $('#section').css("cssText", "opacity: 1;transition: ease 1.5s;");
    $('.cover').css("cssText", "opacity: 1;transition: ease 1.5s;");

    //用户欢迎
    iziToast.settings({
        timeout: 3000,
        backgroundColor: '#ffffff40',
        titleColor: '#efefef',
        messageColor: '#efefef',
        progressBar: false,
        close: false,
        closeOnEscape: true,
        position: 'topCenter',
        transitionIn: 'bounceInDown',
        transitionOut: 'flipOutX',
        displayMode: 'replace',
        layout: '1'
    });
    setTimeout(function () {
        iziToast.show({
            title: hello,
            message: '欢迎来到 墨鱼派'
        });
    }, 800);

    //中文字体缓加载-此处写入字体源文件
    //先行加载简体中文子集，后续补全字集
    //由于压缩过后的中文字体仍旧过大，可转移至对象存储或 CDN 加载
    const font = new FontFace(
        "MiSans",
        "url(" + "./font/MiSans-Regular.woff2" + ")"
    );
    document.fonts.add(font);

}, false)

//进入问候
now = new Date(), hour = now.getHours()
if (hour < 6) {
    var hello = "凌晨好";
} else if (hour < 9) {
    var hello = "早上好";
} else if (hour < 12) {
    var hello = "上午好";
} else if (hour < 14) {
    var hello = "中午好";
} else if (hour < 17) {
    var hello = "下午好";
} else if (hour < 19) {
    var hello = "傍晚好";
} else if (hour < 22) {
    var hello = "晚上好";
} else {
    var hello = "夜深了";
}

//获取时间
var t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    dt = new Date();
    var mm = dt.getMonth() + 1;
    var d = dt.getDate();
    var weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    var day = dt.getDay();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    $("#time_text").html(h + ":" + m + ":" + s);
    $("#day").html(mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + weekday[day]);
    t = setTimeout(time, 1000);
}

//获取天气
//每日限量 100 次
//请前往 https://www.tianqiapi.com/index/doc?version=v6 申请（免费）
fetch('https://yiketianqi.com/api?unescape=1&version=v6&appid=94859534&appsecret=wb4Bzpu5')
    .then(response => response.json())
    .then(data => {
        //$('#wea_text').html(data.wea + '&nbsp;' + data.tem_night + '℃' + '&nbsp;~&nbsp;' + data.tem_day + '℃')
        $('#wea_text').text(data.wea)
        $('#tem1').text(data.tem1)
        $('#tem2').text(data.tem2)
    })
    .catch(console.error)
    
//Tab书签页
$(function () {
    $(".mark .tab .tab-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".products .mainCont").eq($(this).index()).css("display", "flex").siblings().css("display", "none");
    })
})

//设置
$(function () {
    $(".set .tabs .tab-items").click(function () {
        $(this).addClass("actives").siblings().removeClass("actives");
        $(".productss .mainConts").eq($(this).index()).css("display", "flex").siblings().css("display", "none");
    })
})

//输入框为空时阻止跳转
$(window).keydown(function (e) {
    var key = window.event ? e.keyCode : e.which;
    if (key.toString() == "13") {
        if ($(".wd").val() == "") {
            return false;
        }
    }
});

//点击搜索按钮
$(".sou-button").click(function () {
    if ($("body").attr("class") === "onsearch") {
        if ($(".wd").val() != "") {
            $("#search-submit").click();
        }
    }
});

//鼠标中键点击事件
$(window).mousedown(function (event) {
    if (event.button == 1) {
        $("#time_text").click();
    }
});

//控制台输出
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-size:12px;
color: rgb(244,167,89);
`
var styleContent = `
color: rgb(30,152,255);
`
var title1 = 'Snavigation'
var title2 = `
 _____ __  __  _______     ____     __
|_   _|  \\/  |/ ____\\ \\   / /\\ \\   / /
  | | | \\  / | (___  \\ \\_/ /  \\ \\_/ / 
  | | | |\\/| |\\___ \\  \\   /    \\   /  
 _| |_| |  | |____) |  | |      | |   
|_____|_|  |_|_____/   |_|      |_|                                                     
`
var content = `
版 本 号：1.1
更新日期：2022-07-12

Github:  https://github.com/imsyy/Snavigation
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)