setInterval(function () {
    $(".lunbo_txt").animate({
        "top": "-0.2px"
    }, function () {
        $(".lunbo_txt_main_A").first().appendTo($(".lunbo_txt"))
        $(".lunbo_txt").css("top", "1px")
    })
}, 3000)


var nav_ul = document.getElementsByClassName("nav_daohang")[0]
var content = document.getElementsByClassName("content")[0]
var b = -1
var c = -1
ajax("../json/头部分类 (1).json", function (str) {
    var arr = JSON.parse(str)
    for (let i = 0; i < arr.length; i++) {
        c++
        console.log(c)
        var olis = document.createElement("li")
        olis.className = "nav_daohangli"
        if (i == 0) {
            olis.innerHTML = `
            <a class="index_a" data= ${c}>${arr[i].title}</a> 
            `
            nav_ul.appendChild(olis)
        } else {
            olis.innerHTML = `
            <a class="index_b" data= ${c}>${arr[i].title}</a> 
            `
            nav_ul.appendChild(olis)
        }
        nav_ul.onclick = function (ev) {
            var target = ev.target || ev.srcElement;
            if (target.nodeName.toLowerCase() == "a") {
                var data = target.getAttribute("data")
            window.open((js[data])+".html?" + data) 
            }
        }            
        var js = ["index","居家生活","服饰","meishi","grhu","muyin","yundong","shuma","tese","为你严选","众筹"]

        if (i > 0 && i < 9) {
            var odiv = document.createElement("ul")
            odiv.className = "content_ul"
            content.appendChild(odiv)
            for (let j = 0; j < arr[i].fenlei.length; j++) {
                b++
                var olia = document.createElement("li")
                olia.className = "content_ul_li"
                olia.innerHTML = `
                <div class="content_ul_li_tit">${arr[i].fenlei[j].fenlei1}</div>
            `
                odiv.appendChild(olia)
                for (let w = 0; w < arr[i].fenlei[j].fenlei2.length; w++) {
                    var odiv1 = document.createElement("div")
                    odiv1.className = "content_pic"
                    odiv1.innerHTML = `
                    <div class="main_oic">
            <a>
            <img class="yx-cp-subCate-icon"src=${ arr[i].fenlei[j].image[w]}>
            <span>${ arr[i].fenlei[j].fenlei2[w]}</span>
        </a>
        </div>
            `
                    olia.appendChild(odiv1)
                }
            }
        }
        olis.onmouseover = function () {
            $(".olis").addClass("index_a").siblings("li").removeClass("index_a");
            $(".content_ul").eq($(this).index()).show().siblings(".content_ul").hide()
        }
        olis.onmouseout = function () {
    
            $(".content_ul").css("display","none")
        }
        $(".content_ul").mouseover(function(){
            $(this).css("display","block")
        })
        $(".content_ul").mouseout(function(){
            $(this).css("display","none")
        })

    

    }

   
      
    $(".nav_daohangli a").removeClass("index_a")
    $(".nav_daohangli a").eq(oUrl).addClass("index_a").siblings(".nav_daohangli a").removeClass("index_a")


 
})


$(window).scroll(function () {
    if ($("html,body").scrollTop() >= 800) {
        $(".nav").addClass("nav1")
        $(".nav_daohang").addClass("nav_daohang1")
        $(".a1").css("display", "none")
        $(".a2").css("display", "block")
        $(".gren").css("display", "block")
        $(".gren").css("position", "absolute")
        $(".gren").css("right", "57px")
        $(".gren").css("top", "3px")
        $(" .serch").css("display", "none")
        $(" .gouwu_i").css("display", "none")
        $(" .red").css("display", "none")
        $(" .gouwu_text").css("display", "none")
        $(".goouwu1").css("bottom", "23px")
        $(".goouwu1").css("left", "103px")
        $(".goouwu1").css("display", "block")
        $(".red1").css("display", "block")
        $(".red1").css("left", "110px")
        $(".red1").css("top", "-14px")
        $(".index_a").css("padding-bottom", "20px")
        $(".gouwu_main ").css("border", "none")
        $(".gouwu_main ").css("width", "149px")
        $(".lunbo_txt").css("display", "none")
        $(".nav_daohang li").eq(10).css("display", "none")
        $(".nav_daohang li").eq(9).css("display", "none")
        $(".content ").css("top", "56px")
        
    } else {
        $(".content ").css("top", "140px")
        $(".nav").removeClass("nav1")
        $(".index_a").css("padding-bottom", "7px")
        $(".nav_daohang").removeClass("nav_daohang1")
        $(" .serch").css("display", "block")
        $(".a1").css("display", "block")
        $(".a2").css("display", "none")
        $(".gren").css("display", "none")
        $(" .gouwu_i").css("display", "block")
        $(" .red").css("display", "block")
        $(" .red").css("margin-left", "96px")
        $(" .red").css("margin-top", "-19px")
        $(" .gouwu_text").css("margin-left", "44px")
        $(" .gouwu_text").css("margin-top", "-18px")
        $(" .gouwu_text").css("display", "block")
        $(".goouwu1").css("display", "none")
        $(".red1").css("display", "none")
        $(".gouwu_main ").css("border", "1px solid #CC9756")
        $(".gouwu_main ").css("width", "134px")
        $(".gouwu_main ").css("height", "20px")
        $(".lunbo_txt").css("display", "block")
        $(".nav_daohang li").eq(10).css("display", "block")
        $(".nav_daohang li").eq(9).css("display", "block")
     
    }

})
var oUrl = window.location.search.substring(1);
console.log($(".nav_daohangli a"))
