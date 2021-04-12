$(document).ready(function() {


    $("html").css("opacity", "1");

    /////////// VALIDACION FORMULARIOS CONTACTO ///////////

    // $("#modalCuponEspecial").modal().show;

    // VALIDAR FORM HOME

    $('.botonera a').on("click", function (e) {

        // CHECKBOX
            if($(this).parents(".cajaSesion").find('.checkL').prop("checked") == false){
               $('.msjError').remove();
               $('.cajaL').append('<span class="msjError"> Debes aceptar los términos y condiciones. </span>');
               e.preventDefault();
            }
        
            else if($(this).parents(".cajaSesion").find('.checkE').prop("checked") == false){
                $('.msjError').remove();
                $('.cajaEdad').append('<span class="msjError"> Debes ser mayor de 18 años </span>');
                e.preventDefault();
            }
        
            else {
                $('.cajaL .msjError').remove();
                $('.cajaEdad .msjError').remove();
				document.cookie = "feria=1";
            }
        
           
           
           // VALIDATE ALL

           if ($('.cajaSesion .error-input').length == 0) {
               // window.location.href = "thankyoupage.html"
           }
       
   });


   $(".checkmark").on("click", function () {
        
       if($(this).siblings('input').prop("checked") == false){
           $('.msjError').remove();
           $(this).siblings('input').attr("checked","checked");
       }
       
       else {
            $(this).siblings('input').removeAttr("checked");
       }
   });

    
    //// GIRO
    
    var urlCupon;

    function randomCupon() {
        $("#ala").addClass("giroActivo");
		
        var x = Math.floor((Math.random() * 30) + 2);
		if(prm==true)
		{
			x=1;
		}
      //   var x = 1;

        console.log(x);
        $('#botonGirar').off();


        function initLogin() {
            if(window.jQuery){
                if($("#logout_btn").length==1){
					
                    if(getCookie("feria")==1){

                        $('.linkCupon').on("click", function () {
			                linkfinal= "/promoxxo/getcoupon/d79b2f692c44897e27b8f1a93fe7b10c";
                            window.location.href = linkfinal;
                            
                        });
                    }else{
						$('.linkCupon').on("click", function () {
                        $(".modal-felicidades").hide(1);
						$('.linkContinuar').show(1);
						$(".linkredfb").hide(1);
						$(".linkred").hide(1);
                        $(".modal-sesion").show(1);
                    });
					}
                }
                else{
                    $('.linkCupon').on("click", function () {
                        $(".modal-felicidades").hide(1);
						$('.linkContinuar').hide(1);
						$(".linkredfb").show(1);
						$(".linkred").show(1);
                        $(".modal-sesion").show(1);
                    });
                    
                }
            }
            else{
                setTimeout(function(){
                    initLogin();
                },2);
            }
        }

        var resp=initLogin();

        
        setTimeout(function () {
            switch (x) {

                /// CUPOON ESPECIAL
                case 1:
                    $("#ala").addClass("giro2");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/aa573d1a63edfa3eda0a62cd975bf62a.jpg");
                    urlCupon = "/1";

                    setTimeout(function () {
                        $("#modalCuponEspecial").modal("show");
                    }, 5500);

                    break;
                
                /// CUPON NORMAL
                case 2:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/cfb2c063828d29ab0e856db71c490846.jpg");
                    urlCuponFb = "/promoxxo/getcoupon/1e951a3dcc7fb5a3a14ab4a7db7815c6";
                    urlCuponGl= "/promoxxo/getcoupon/1e951a3dcc7fb5a3a14ab4a7db7815c6";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/d79b2f692c44897e27b8f1a93fe7b10c";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			          $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5500);

                    break;
					
				 case 3:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/b3f92710ad3f345f507ce017ad5111e3.jpg");
                    urlCuponFb = "/promoxxo/getcoupon/6aae7f06169d711d86d8a0d22660d9b4";
                    urlCuponGl= "/promoxxo/getcoupon/6aae7f06169d711d86d8a0d22660d9b4";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/fb34e238cfcf702b6380a43dd7cb308e";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			          $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                case 4:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/392d5194feb114dc903610035681bc5a.jpg");
                    urlCuponFb = "/promoxxo/getcoupon/d9f29f45e144cd0cd5f13e37bb17f8ca";
                    urlCuponGl= "/promoxxo/getcoupon/d9f29f45e144cd0cd5f13e37bb17f8ca";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/d9f29f45e144cd0cd5f13e37bb17f8ca";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			          $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                 case 5:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/3e7d6281de939745404e1c1c01c9cc24.jpg");
                    urlCuponFb = "/promoxxo/getcoupon/c708dfdc2d89bf37995deb3b6061cc7e";
                    urlCuponGl= "/promoxxo/getcoupon/c708dfdc2d89bf37995deb3b6061cc7e";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/c708dfdc2d89bf37995deb3b6061cc7e";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			          $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                 case 6:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/3f4a02177012ac7349f4b50f573f89e8.jpg");
                    urlCuponFb = "/promoxxo/getcoupon/c17fbe52357bedb7830eeee804b4dd4b";
                    urlCuponGl= "/promoxxo/getcoupon/c17fbe52357bedb7830eeee804b4dd4b";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/c17fbe52357bedb7830eeee804b4dd4b";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			          $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                 case 7:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/");
                    urlCuponFb = "/promoxxo/getcoupon/";
                    urlCuponGl= "/promoxxo/getcoupon/";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			          $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                 case 8:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/ec417b543e0bca2211d379d76e7fa606.jpg");
                    urlCuponFb = "/promoxxo/getcoupon/4eb952bdc5b7be49bb9e9cef8e547086";
                    urlCuponGl= "/promoxxo/getcoupon/4eb952bdc5b7be49bb9e9cef8e547086";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/4eb952bdc5b7be49bb9e9cef8e547086";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			          $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                 case 9:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/b3f92710ad3f345f507ce017ad5111e3.jpg");
                    urlCuponFb = "/promoxxo/getcoupon/6aae7f06169d711d86d8a0d22660d9b4";
                    urlCuponGl= "/promoxxo/getcoupon/6aae7f06169d711d86d8a0d22660d9b4";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/fb34e238cfcf702b6380a43dd7cb308e";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			          $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                 case 10:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/73d875ce3981ffbfd190d116f901f00e.jpg");
                    urlCuponFb = "/promoxxo/getcoupon/e8f990b1f0e8e4e84e80b8383ca211c8";
                    urlCuponGl= "/promoxxo/getcoupon/e8f990b1f0e8e4e84e80b8383ca211c8";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/e8f990b1f0e8e4e84e80b8383ca211c8";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			          $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                 case 11:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/b5fb91bed26a7151f7faeff07565d17d.jpg");
                    urlCuponFb = "/promoxxo/getcoupon/0eb7ec646d2b2bb89760732a69eb6020";
                    urlCuponGl= "/promoxxo/getcoupon/0eb7ec646d2b2bb89760732a69eb6020";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/0eb7ec646d2b2bb89760732a69eb6020";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			          $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                 case 12:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/8b31734354f3b86aec071c005144cbb4.jpg");
                    urlCuponFb = "/promoxxo/getcoupon/76b63971032dcfa0e44b38dd2755bc18";
                    urlCuponGl= "/promoxxo/getcoupon/76b63971032dcfa0e44b38dd2755bc18";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/76b63971032dcfa0e44b38dd2755bc18";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			          $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                 case 13:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/");
                    urlCuponFb = "/promoxxo/getcoupon/";
                    urlCuponGl= "/promoxxo/getcoupon/";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			           $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                case 14:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/");
                    urlCuponFb = "/promoxxo/getcoupon/";
                    urlCuponGl= "/promoxxo/getcoupon/";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/fb34e238cfcf702b6380a43dd7cb308e";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			           $(".linkContinuar").attr("href", urlCupon);
		            }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                case 15:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src","https://oxxo-com.s3.amazonaws.com/cupones/");
                    urlCuponFb = "/promoxxo/getcoupon/";
                    urlCuponGl= "/promoxxo/getcoupon/";
					console.log(urlCupon);
					$(".LinkCuponNormalFb").attr("href", urlCuponFb);
                     $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                if($("#logout_btn").length==1){
                    if(getCookie("feria")==1){
                       
					   
					   $('.linkCupon').on("click", function () {
							linkfinal= "/promoxxo/getcoupon/";
                            window.location.href = linkfinal;
                            
                        });
					   
                    }else{
			$(".linkContinuar").attr("href", urlCupon);
		 }
                   
					}
                    setTimeout(function () {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;					
            
                
                default:
                    $("#ala").addClass("giro1");
                    setTimeout(function () {
                        $("#modalDefault").modal("show");
                    }, 5500);

                    break;

            }
        }, 0);

        
    }

    $('#botonGirar').on("click", function () {
        randomCupon();
    });

    // $('.linkCupon').on("click", function () {
    //     // $("#ala").attr("class", "img-fluid");
    //     // window.open(urlCupon, '_blank');

    //     $(".modal-felicidades").hide(1);
    // });

    $('#modalDefault .btnOn, .closeModal').on("click", function () {
        $("#ala").attr("class", "img-fluid");
       $('#botonGirar').on("click", randomCupon);
    });
	$("#ObtCupon").click(function(){
    $("#mycupon").attr("value", 1);
  });

$("#formCupon").submit(function(){
  console.log("entro");
  });

});

        function getCookie(cname){
            var name=cname+"=";
            var decodedCookie=decodeURIComponent(document.cookie);
            var ca=decodedCookie.split(';');
            for(var i=0;i<ca.length;i++){
                var c=ca[i];
                while(c.charAt(0)==' '){
                c=c.substring(1);
                }
                if(c.indexOf(name)==0){
                return c.substring(name.length,c.length);
                }
            }
            return"";
        }

$(function(){
    dato();
});
var prm=false;
function dato(){
$.ajax({
     url: '/ws/PromocionCupon/getCoupons',
     type: 'GET',
     success: function(data){
         if(data.estatus==1)
         {
            var js=JSON.parse(data.data);
            if(js[0])
            {
				prm=true;
                $(".linkredfb").attr("href", "/cuponera/facebook/"+js[0].id_cupon);
			    $(".linkred").attr("href", "/cuponera/google/"+js[0].id_cupon);
                $(".cuponEsp").attr("src", js[0].imagen_cupon);
            }
			else{
				prm=false;
			}
         }
     }
});
}
                            