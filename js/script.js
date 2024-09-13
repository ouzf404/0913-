let filter=$()

$(".btns>li").click(function(){
 $(this).addClass("on")
 $(this).siblings().removeClass("on")

 
 /* 속성을 변경할 때. 필터링이 잘 되는지 확인하기.
 '' , "" 으로 묶으면 문자나 값으로 인식한다.
 속성변경시 ---> $(this).attr('속성명','속성값');
 속성값 호출시 (변수안에 넣어줌) ---> $(this).attr('속성명'); */
 let a=$(this).attr('data-filter');
 $(".contents").isotope({filter:a});
})

$(".contents").isotope();

$(".fancybox").fancybox()