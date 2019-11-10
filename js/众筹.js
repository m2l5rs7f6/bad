

 var oul = document.getElementsByClassName("reasise_main_ul")[0]
 ajax("../json/众筹.json",function(str){
    var arr = JSON.parse(str)
     for (let i = 0; i < arr.length; i++) {
        var oli = document.createElement("li")
        oli.className="reasise_main_ulli"
        oli.innerHTML=`
        <div class="reasise_left">
        <img src="${arr[i].img}" alt="">
    </div>
    <div class="reasise_rig">
        <p class="uname">${arr[i].title}</p>
        <p class="iname">${arr[i].txts}</p>
        <div class="name_con">
            <div class="name_con_A">
                <div class="name_con_a_main">
                    <div class="data"></div>

                </div>
            </div>
            <span class="zongti">
                <span class="zongtia">${arr[i].txt}</span>
                <span class="zongtib">%</span>
            </span>
            <ul class="data_ul">
                <li>
                    <p class="data_ul_p">
                        <span>¥</span>
                        <span>${arr[i].price}</span>
                    </p>
                    <p class="yiraise">${arr[i].price2}</p>
                </li>
                <li class="xian">
                    <p class="data_ul_p">
                        
                        <span>${arr[i].txt1}</span>
                    </p>
                    <p class="yiraise">${arr[i].tx}</p>
                </li>
                <li class="xian">
                    <p class="data_ul_p">
                
                        <span>${arr[i].price1}</span>
                    </p>
                    <p class="yiraise">${arr[i].bg}</p>
                </li>
            </ul>
        </div>
    </div>
        
        `
        oul.appendChild(oli)
         
     }
 },function(){
    alert(1)
 })
 var oul1 = document.getElementsByClassName("reasise_main_ulA")[0]
 ajax("../json/结束zc.json",function(str){
     var arr = JSON.parse(str)
     for (let i = 0; i < arr.length; i++) {
        var oli = document.createElement("li")
        oli.className="reasise_main_ulliA"
        oli.innerHTML=`
        <div class="reasise_left">
        <img src=${arr[i].img} alt="">
    </div>
    <div class="reasise_rig">
        <p class="uname">${arr[i].title}</p>
        <p class="iname">${arr[i].txts}</p>
        <div class="name_con">
            <div class="name_con_A">
                <div class="name_con_a_main">
                    <div class="data"></div>

                </div>
            </div>
            <span class="zongti">
                <span class="zongtia">${arr[i].txt}</span>
                <span class="zongtib">%</span>
            </span>
            <div class="sussec">
                <span class="yiraiseA"> ${arr[i].tx}</span>
                <span class="success_A">
                    <span>已筹金额</span>
                    <span class="price">
                        <span class="price1">¥</span>
                        <span class="price1">${arr[i].price}</span>
                    </span>
                </span>
            </div>
        </div>
    </div>
        
        
        `
        oul1.appendChild(oli)
     }

 })