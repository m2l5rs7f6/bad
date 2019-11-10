var a= -1
var oul = document.getElementsByClassName("head1-ul1")[0]
var cen1=document.getElementsByClassName("content1")[0]
ajax("../json/头部分类 (1).json",function(str){
    var arr = JSON.parse(str)
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        var oli = document.createElement("li")
        if(i==0){
            oli.innerHTML=`
            <a class="h-u-a1 h-u-li2">${arr[i].title}</a>
            `
            oul.appendChild(oli)

        }else{
            oli.innerHTML=`
            <a class="h-u-li2">${arr[i].title}</a>
            `
            oul.appendChild(oli)
        }
        if(i>0 && i<9){
            var odiv=document.createElement('ul')
            odiv.className="c-ul1"
            cen1.appendChild(odiv)
            for(let j=0;j<arr[i].fenlei.length;j++){
                a++
                var olia=document.createElement("li")
                olia.className="c-div1"
                olia.innerHTML=`
                <div class="c-div2">
                    ${arr[i].fenlei[j].fenlei1}
                </div>
                `
                odiv.appendChild(olia)
                for(let w=0;w<arr[i].fenlei[j].fenlei2.length;w++){
                    var odiv1=document.createElement("div")
                    odiv1.className="c-div3"
                    odiv1.innerHTML=`
                    <div class="c-div5">
                                <a>
                                    <img src=${arr[i].fenlei[j].image[w]}>
                                    <span class="c-sp1">${arr[i].fenlei[j].fenlei2[w]}</span>
                                </a>
                            </div>
                    `
                    olia.appendChild(odiv1)
                }
            }
        }
        $(".h-u-li2").click=function(){
            $(".c-ul1").html("")
			var dataName=$(this).attr("data_name")
			console.log(dataName)

        }
    }

})