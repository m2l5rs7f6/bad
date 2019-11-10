var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop:true,
});

//新品首发
var oDiv1=document.getElementsByClassName("sy-d4-div4-1")[0]
var left1=document.getElementsByClassName("left1")[0]
var right1=document.getElementsByClassName(right1)[0]

ajax("../json/新品首发.json",function(str){
    var arr1=JSON.parse(str)
    // console.log(arr1)
    for(var i=0;i<arr1.length;i++){
      var li1=document.createElement("li")
      // console.log(1)
      li1.innerHTML +=`
      <div class="sy-d4-div2-d1">
          <a class="sy-d4-div1-a1">
              <div class="sy-d4-div2-d1-1">
                  <img class="img  img-lazyload img-lazyloaded"
                      src=${arr1[i].img1} data-reactid=".2.3.1.0.0.$0.0.0.0.0"
                      style="opacity: 1;z-index: 1;">
              </div>
              <div class="sy-d4-div2-d1-2">
                  <img src=${arr1[i].imgHover} class="img2">
              </div>
              <img class="promoLogo" style="width:48px;height:48px; z-index: 55;"
                  src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png"
                  data-reactid=".2.3.1.0.0.$0.0.0.2">
              <div class="promBanner promBanner-10"
                  style="background-image:url(https://yanxuan.nosdn.127.net/5e5ba7f9c3805cc8085368ed41aaff65.png);"
                  data-reactid=".2.3.1.0.0.$0.0.0.5">
                  <div class="promTitle"
                      style="background-image:url(https://yanxuan.nosdn.127.net/ced6f7cfbd566e260ea67ec486cb9b60.png);"
                      data-reactid=".2.3.1.0.0.$0.0.0.5.0">
                      <div class="title" data-reactid=".2.3.1.0.0.$0.0.0.5.0.0">
                          <span data-reactid=".2.3.1.0.0.$0.0.0.5.0.0.1">${arr1[i].span1}</span>
                      </div>
                      <div class="subTitle" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1">
                          <span style="vertical-align:middle;"
                              data-reactid=".2.3.1.0.0.$0.0.0.5.0.1.0">${arr1[i].span2}</span>
                          <span class="qi" data-reactid=".2.3.1.0.0.$0.0.0.5.0.1.1">起</span>
                      </div>
                  </div>
                  <div class="promContent" data-reactid=".2.3.1.0.0.$0.0.0.5.1">${arr1[i].promContent}</div>
              </div>
          </a>
          <div class="sy-d4-div2-d2" data-reactid=".2.3.1.0.0.$0.1">
              <div class="sy-d4-div2-d3">
                  <span class="sy-d4-div2-sp3">
                  ${arr1[i].span1}
                  </span>
              </div>
              <h4 class="sy-d4-div2-h4" style="padding:0 10px">
                  <span class="sy-d4-div2-sp5">${arr1[i].h4}</span>
              </h4>
              <p class="sy-d4-div2-p6" style="padding: 1px 0 9px;">
                  <span class="sy-d4-div2-sp7" data-reactid=".2.3.1.0.0.$0.1.2.0">
                      <span data-reactid=".2.3.1.0.0.$0.1.2.0.0">¥</span>
                      <span data-reactid=".2.3.1.0.0.$0.1.2.0.1">${arr1[i].price}</span>
                  </span>
                  <span class="sy-d4-div2-sp8" data-reactid=".2.3.1.0.0.$0.1.2.0">
                      <span data-reactid=".2.3.1.0.0.$0.1.2.0.0">¥</span>
                      <span data-reactid=".2.3.1.0.0.$0.1.2.0.1">${arr1[i].yuanjia}</span>
                  </span>
              </p>
          </div>
      </div>
      `
      oDiv1.appendChild(li1)
    }
})

//点击轮播
// var num=0
// console.log(left1)
// left1.onclick=function(){
//   if(num==0){

//   }
// }
var r1=document.getElementsByClassName("sy-d5-div2r")[0]

ajax("../json/人气推荐.json",function(str){
    var arr2=JSON.parse(str)
    console.log(arr2)
    for (var j=0;j<arr2.length;j++){
        var li2=document.createElement("li")
      // console.log(1)
      li2.innerHTML +=`
      <div class="sy-d5-div2r-1  q1">
            <div class="sy-d5-div2r-2">
                <div class="sy-d5-div2r-3 ">
                    
                    <img class="img q2 white img-lazyload j-lazyload img-lazyloaded"
                        src=${arr2[j].img}
                </div>
                <img class="promoLogo t4" style="width:48px;height:48px;"
                    src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png"
                    data-reactid=".2.4.0.1.$1.0.0.2">
                <div class="sy-d5-dr-4"
                    style="position: absolute;background-image:url(https://yanxuan.nosdn.127.net/5e5ba7f9c3805cc8085368ed41aaff65.png);"
                    data-reactid=".2.4.0.1.$0.0.0.5"">
                    <div class=" sy-d5-dr-5" style="background-image: url(https://yanxuan.nosdn.127.net/879ed370f7374379256c00673dab7835.png);">
                        <div class="title" data-reactid=".2.4.0.1.$1.0.0.5.0.0">
                            <span data-reactid=".2.4.0.1.$1.0.0.5.0.0.1">${arr2[j].span1}</span>
                        </div>
                        <div class="subTitle" data-reactid=".2.4.0.1.$1.0.0.5.0.1"><span
                            style="vertical-align:middle;"
                            data-reactid=".2.4.0.1.$1.0.0.5.0.1.0">${arr2[j].span2}</span><span class="qi"
                            data-reactid=".2.4.0.1.$1.0.0.5.0.1.1">起</span>
                        </div>
                </div>
                <div class="sy-d5-dr-6" data-reactid=".2.4.0.1.$1.0.0.5.1">${arr2[j].promContent}</div>
            </div>
            <div class="sy-d5-div2l-2 t5">
                <div class="sy-d5-div2l-2-1" style="margin-bottom: 10px;">
                    <span class="sy-d-1 " data-reactid=".2.4.0.1.$0.1.0.$0">${arr2[j].span3}</span>
                </div>
                <h4 class="sy-d5-h4 ">
                    <span class="sy-d-sp1 t3">${arr2[j].h4}</span>
                </h4>
                <p class="sy-d-p1">
                    <span class="sy-d-sp2">
                        <span data-reactid=".2.4.0.1.$0.1.2.0.0">${arr2[j].price}</span>
                    </span>
                    <span class="sy-d-sp3">
                        <span data-reactid=".2.4.0.1.$0.1.2.0.0">${arr2[j].price2}</span>
                    </span>
                </p>
            </div>
        </div>
      ` 
      r1.appendChild(li2)
    }
})
//限时购
var w_cd=document.getElementsByClassName("w-cd");
console.log(w_cd)

function test(num4) {
	if (num4 < 10) {
		return "0" + num4
	} else {
		return num4;
	}
}
var timer4 = setInterval(txt, 1000);

function txt() {
	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var second = date.getSeconds();
	var arr3 = [test(23 - hour), test(59 - min), test(60 - second)];
	for (let i = 0; i < arr3.length; i++) {
		w_cd[i].innerHTML = arr3[i];
	}
}

//限时购
var r2=document.getElementsByClassName("r2")[0]

ajax("../json/限时购.json",function(str){
    var arr4=JSON.parse(str)
    for (var q=0;q<arr4.length;q++){
        var li4=document.createElement("li")
      li4.innerHTML +=`
      <div class="r2-1 q1">
            <div class="r2-2 q2">
                <img src=${arr4[q].img}>
            </div>
            <div class="r2-3">
                <h4 class="r2-4">${arr4[q].title}</h4>
                <p class="r2-5">${arr4[q].txt}</p>
                <div class="r2-6">
                    <div class="r2-7">
                        <div class="r2-8"></div>
                    </div>
                    <div class="r2-9">
                        <span>${arr4[q].js}</span>
                    </div>
                </div>
                <div class="r2-10">
                    <span class="r2-11">
                        <span class="r2-12">${arr4[q].txts}</span>
                        <span class="r2-13">￥</span>
                        <span class="r2-14">${arr4[q].price}</span>
                    </span>
                    <span class="r2-15">
                        <span class="r2-16">
                            ${arr4[q].price1}
                        </span>
                    </span>
                </div>
                <div class="r2-18">
                    ${arr4[q].bg}
                </div>
            </div>
        </div>
      ` 
      r2.appendChild(li4)
    }
})

var swiper = new Swiper('.s2', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    loop:true,
});

var c1=document.getElementsByClassName("sy-div7-d2-3")[0];

ajax("../json/限时购.json",function(str){
    var arr5=JSON.parse(str)
    for (var w=0;w<arr5.length;w++){
        var li5=document.createElement("li")
      li5.innerHTML +=`
      <div class="sy-div7-d2-3-1">
        <div class="sy-div7-d2-3-2">
            <img src=${arr5[w].img}>
        </div>
        <div class="sy-div7-d2-3-4">
            <div class="sy-div7-d2-3-5">${arr5[w].title}</div>
            <div class="sy-div7-d2-3-6">
                <span class="sy-div7-d2-3-7">限时价</span>
                <span class="sy-div7-d2-3-8">￥</span>
                <span class="sy-div7-d2-3-9">${arr5[w].price}</span>
            </div>
            <div class="sy-div7-d2-3-10">
                <span class="sy-div7-d2-3-11">${arr5[w].price1}</span>
            </div>
            <div class="sy-div7-d2-3-12">立即抢购</div>
        </div>
        </div>
      ` 
      c1.appendChild(li5)
    }
})
var swiper = new Swiper('.e1', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    
  });
$(".head").load("../html/header.html")
$(".foot").load("../html/foot.html")