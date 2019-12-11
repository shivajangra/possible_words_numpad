$(function () {
	$(".hover-dot").click(function () {
		var value = $(this).find("h1").text();
		if (value == "#") {
		    var text = $(".entered-numbers").text();
			   $.get("/getsuperhero?text="+text, function(data, status){
					 console.log(data);
			    $('.output-numbers span').text(data.data);
			   });
		} else if($(this).find("i").length > 0){
				$(".entered-numbers").each(function () {
						var a = $(this).text();
							$(this).text(a.substring(0, a.length - 1));
							// $(this).addClass("nocircle");
							return false;
					});
		} else {
				$(".entered-numbers").each(function () {
						var a = $(this).text();
							$(this).text(a+''+value);
							// $(this).addClass("nocircle");
							return false;
					});
		}
	});
});
// $(function () {
// 	$(".content").click(function () {
//
// 		var value = $(this).find(".number").text();
//     console.log(value);
// 		if (value !== "<") {
// 			$(".numberinput").each(function () {
// 				var a = $(this).text();
// 				if (!a) {
// 					$(this).text(value);
// 					$(this).addClass("nocircle");
// 					return false;
// 				}
// 			});
// 		} else {
// 			$($(".numberinput").get().reverse()).each(function () {
// 				var a = $(this).text();
// 				if (a) {
// 					$(this).text("");
// 					$(this).removeClass("nocircle");
// 					return false;
// 				}
// 			});
// 		}
// 	});
// });
