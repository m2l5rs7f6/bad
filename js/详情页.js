$(".head").load("../html/header.html")
$(".foot").load("../html/foot.html")

var span1=document.getElementsByClassName("span1")[0]


ajax("../json/详情页.json",function(str){
	var arr1=JSON.parse(str)
	for(var i=0;i<arr1.length;i++){
		var li1=document.createElement("li")
		li1.innerHTML =`
            <span>${arr1[i].title}</span>
		`
		span1.appendChild(li1)
	}
})