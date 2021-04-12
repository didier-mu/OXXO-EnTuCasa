$(document).ready(function() {

    $("html").css("opacity", "1");

    /////////// VALIDACION FORMULARIOS CONTACTO ///////////


    // VALIDAR FORM HOME

    $('.botonera a').on("click", function(e) {

        // CHECKBOX
        if ($(this).parents(".cajaSesion").find('.checkL').prop("checked") == false) {
            $('.msjError').remove();
            $('.cajaL').append('<span class="msjError"> Debes aceptar los términos y condiciones. </span>');
            e.preventDefault();
        } else if ($(this).parents(".cajaSesion").find('.checkE').prop("checked") == false) {
            $('.msjError').remove();
            $('.cajaEdad').append('<span class="msjError"> Debes ser mayor de 18 años </span>');
            e.preventDefault();
        } else {
            $('.cajaL .msjError').remove();
            $('.cajaEdad .msjError').remove();
            document.cookie = "feria=1";
        }



        // VALIDATE ALL

        if ($('.cajaSesion .error-input').length == 0) {
            // window.location.href = "thankyoupage.html"
        }

    });


    $(".checkmark").on("click", function() {

        if ($(this).siblings('input').prop("checked") == false) {
            $('.msjError').remove();
            $(this).siblings('input').attr("checked", "checked");
        } else {
            $(this).siblings('input').removeAttr("checked");
        }
    });


        function initLogin() {
            if (window.jQuery) {
                if ($("#logout_btn").length == 1) {

                    if (getCookie("feria") == 1) {

                        $('.linkCupon').on("click", function() {
                            linkfinal = "/promoxxo/getcoupon/" + prm2;
                            window.location.href = linkfinal;

                        });
                    } else {
                        $('.linkCupon').on("click", function() {
                            $(".modal-felicidades").hide(1);
                            $('.linkContinuar').show(1);
                            $(".linkredfb").hide(1);
                            $(".linkred").hide(1);
                            $(".modal-sesion").show(1);
                        });
                    }
                } else {
                    $('.linkCupon').on("click", function() {
                        $(".modal-felicidades").hide(1);
                        $('.linkContinuar').hide(1);
                        $(".linkredfb").show(1);
                        $(".linkred").show(1);
                        $(".modal-sesion").show(1);
                    });

                }
            } else {
                setTimeout(function() {
                    initLogin();
                }, 2);
            }
        }
		
    //// GIRO

    var urlCupon;

    function randomCupon() {
        $("#ala").addClass("giroActivo");

         var x = Math.floor((Math.random() * 7) + 2);
       // var x = Math.floor((Math.random() * (30 - 1)) + 1);
       //  var x =10 ;


        if (prm == true) {
            x = 3;
        }
        //   var x = 1;

        console.log(x);
        $('#botonGirar').off();

        var resp = initLogin();


        setTimeout(function() {
            switch (x) {

                /// CUPOON ESPECIAL
                case 1:
                    $("#ala").addClass("giro4");

                    $(".linkredfb").attr("href", "/cuponera/facebook/67a34dcd64c8eaa77dcab5a9c16cbeba");
                    $(".linkred").attr("href", "/cuponera/google/67a34dcd64c8eaa77dcab5a9c16cbeba");
                    if ($("#logout_btn").length == 1) {
                        if (getCookie("feria") == 1) {
                            $('.linkCupon').on("click", function() {
                                linkfinal = "/promoxxo/getcoupon/67a34dcd64c8eaa77dcab5a9c16cbeba";
                                window.location.href = linkfinal;
                            });
                        } else {
                            $(".linkContinuar").attr("href", "/promoxxo/getcoupon/67a34dcd64c8eaa77dcab5a9c16cbeba");
                        }
                    }
                    prm = false;
                    setTimeout(function() {
                        $("#modalCuponEspecial").modal("show");
                    }, 5500);

                    break;

                    /// CUPON NORMAL

                case 2:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src", "https://oxxo-com-dev.s3.amazonaws.com/cupones/f3208c5de35728d600773aec34424a6c.jpg");
                    urlCuponFb = "/cuponera/facebook/20419f9deba87278a7292be962d8684b";
                    urlCuponGl = "/cuponera/google/20419f9deba87278a7292be962d8684b";
                    console.log(urlCupon);
                    $(".LinkCuponNormalFb").attr("href", urlCuponFb);
                    $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                    if ($("#logout_btn").length == 1) {
                        if (getCookie("feria") == 1) {


                            $('.linkCupon').on("click", function() {
                                linkfinal = "/promoxxo/getcoupon/20419f9deba87278a7292be962d8684b";
                                window.location.href = linkfinal;

                            });

                        } else {
                            $(".linkContinuar").attr("href", urlCupon);
                        }

                    }
                    setTimeout(function() {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                case 3:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src", "https://oxxo-com-dev.s3.amazonaws.com/cupones/76e8636e65c27acb9f880cbe8c5232e8.jpg");
                    urlCuponFb = "/cuponera/facebook/aaa36669f884d18d8ca3f7e59fa1c507";
                    urlCuponGl = "/cuponera/google/aaa36669f884d18d8ca3f7e59fa1c507";
                    console.log(urlCupon);
                    $(".LinkCuponNormalFb").attr("href", urlCuponFb);
                    $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                    if ($("#logout_btn").length == 1) {
                        if (getCookie("feria") == 1) {


                            $('.linkCupon').on("click", function() {
                                linkfinal = "/promoxxo/getcoupon/aaa36669f884d18d8ca3f7e59fa1c507";
                                window.location.href = linkfinal;

                            });

                        } else {
                            $(".linkContinuar").attr("href", urlCupon);
                        }

                    }
                    setTimeout(function() {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                case 4:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src", "https://oxxo-com-dev.s3.amazonaws.com/cupones/35ca7b3a3d408457b6256b450a27d5db.jpg");
                    urlCuponFb = "/cuponera/facebook/2e63946b83ac23ab5903ce0815a214fa";
                    urlCuponGl = "/cuponera/google/2e63946b83ac23ab5903ce0815a214fa";
                    console.log(urlCupon);
                    $(".LinkCuponNormalFb").attr("href", urlCuponFb);
                    $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                    if ($("#logout_btn").length == 1) {
                        if (getCookie("feria") == 1) {


                            $('.linkCupon').on("click", function() {
                                linkfinal = "/promoxxo/getcoupon/2e63946b83ac23ab5903ce0815a214fa";
                                window.location.href = linkfinal;

                            });

                        } else {
                            $(".linkContinuar").attr("href", urlCupon);
                        }

                    }
                    setTimeout(function() {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                case 5:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src", "https://oxxo-com-dev.s3.amazonaws.com/cupones/8227a82a2a4a191b39b207c8e2e07f99.jpg");
                    urlCuponFb = "/cuponera/facebook/5482d4691e07d192146379554e91a35c";
                    urlCuponGl = "/cuponera/google/5482d4691e07d192146379554e91a35c";
                    console.log(urlCupon);
                    $(".LinkCuponNormalFb").attr("href", urlCuponFb);
                    $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                    if ($("#logout_btn").length == 1) {
                        if (getCookie("feria") == 1) {


                            $('.linkCupon').on("click", function() {
                                linkfinal = "/promoxxo/getcoupon/5482d4691e07d192146379554e91a35c";
                                window.location.href = linkfinal;

                            });

                        } else {
                            $(".linkContinuar").attr("href", urlCupon);
                        }

                    }
                    setTimeout(function() {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;

                case 6:
                    $("#ala").addClass("giro4");
                    $("#cupon").attr("src", "https://oxxo-com-dev.s3.amazonaws.com/cupones/31cecba728fc70d08f49a42a484177f1.jpg");
                    urlCuponFb = "/cuponera/facebook/3df8e6967dc88ee5198fb4b5092c5c49";
                    urlCuponGl = "/cuponera/google/3df8e6967dc88ee5198fb4b5092c5c49";
                    console.log(urlCupon);
                    $(".LinkCuponNormalFb").attr("href", urlCuponFb);
                    $(".LinkCuponNormalGl").attr("href", urlCuponGl);
                    if ($("#logout_btn").length == 1) {
                        if (getCookie("feria") == 1) {


                            $('.linkCupon').on("click", function() {
                                linkfinal = "/promoxxo/getcoupon/3df8e6967dc88ee5198fb4b5092c5c49";
                                window.location.href = linkfinal;

                            });

                        } else {
                            $(".linkContinuar").attr("href", urlCupon);
                        }

                    }
                    setTimeout(function() {
                        $("#modalCupon").modal("show");
                    }, 5000);

                    break;


                default:
                    $("#ala").addClass("giro1");
                    setTimeout(function() {
                        $("#modalDefault").modal("show");
                    }, 5500);

                    break;

            }
        }, 0);


    }

    $('#botonGirar').on("click", function() {
        randomCupon();
    });

    // $('.linkCupon').on("click", function () {
    //     // $("#ala").attr("class", "img-fluid");
    //     // window.open(urlCupon, '_blank');

    //     $(".modal-felicidades").hide(1);
    // });

    $('#modalDefault .btnOn, .closeModal').on("click", function() {
        $("#ala").attr("class", "img-fluid");
        $('#botonGirar').on("click", randomCupon);
    });
    $("#ObtCupon").click(function() {
        $("#mycupon").attr("value", 1);
    });

    $("#formCupon").submit(function() {
        console.log("entro");
    });

});

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$(function() {
    dato();
});
var prm = false;
var prm2;
function dato() {
    $.ajax({
        url: '/ws/PromocionCupon/getCoupons',
        type: 'GET',
        success: function(data) {
            if (data.estatus == 1) {
                var js = JSON.parse(data.data);
                if (js[0]) {
                    prm = true;
					prm2 = js[0].id_cupon;
                    $("#cupon").attr("src",  js[0].imagen_cupon);
                    $(".linkredfb").attr("href", "/cuponera/facebook/" + js[0].id_cupon);
                    $(".linkred").attr("href", "/cuponera/google/" + js[0].id_cupon);
                    $(".cuponEsp").attr("src", js[0].imagen_cupon);
                    if ($("#logout_btn").length == 1) {
                        if (getCookie("feria") == 1) {
                            $('.linkCupon').on("click", function() {
                                linkfinal = "/promoxxo/getcoupon/"+ js[0].id_cupon;
                                window.location.href = linkfinal;
                            });
                        } else {
                            $(".linkContinuar").attr("href", "/promoxxo/getcoupon/"+ js[0].id_cupon);
                        }
                    }
                } else {
                    prm = false;
                }
            }
        }
    });
}
                            