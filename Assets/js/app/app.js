
// import { Carousel } from "bootstrap";

// var carousel=document.querySelector("#carouselExampleControls");

// var bannerCarousel=new Carousel(carousel)
const app=()=>{
    $("#one").on("click",function(){
       $(".abouts_details_video").css("display","none");
       $("iframe").css("display","block");
       $("iframe")[0].src += "?autoplay=1";
    })
    
    $("#locations_filter_img").on("click",function(){
       $(".filter").fadeIn();
    })
    $("#filter_header_img").on("click",function(){
       $(".filter").fadeOut();
    })
    $("#five").on("click",function(){
        $(".headers_toggle_head").toggle();
    })
 }



 
 
 // $("#parent").on("mouseover", function() {
 //     $(".header_nav_dropdown").show();
 //     $(".header_nav_dropdown").css("display", "flex");
 // });
 // $(".header_nav_dropdown").on("mouseleave", function() {
 //     $(".header_nav_dropdown").hide();
 // })
 
 export default app;