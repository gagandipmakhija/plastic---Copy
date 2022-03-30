const drop=()=>{
    
    $(".contact_details_services_input1").on("mouseover",function(){
        $(".contact_details_services_toggle").css("display","block")
        console.log("working");
        $(".contact_details_services_toggle").on("mouseleave",function(){
            $(".contact_details_services_toggle").css("display","none")
        })
        
    })
    $(".contact_details_services_toggle_para").on("click",function(){
        $(".text").text($(this).text());
        $(".contact_details_services_toggle").css("display","none")
        console.log("working2");
    })
    $(".contact_details_services_toggle_para1").on("click",function(){
        $(".text").text($(this).text());
        $(".contact_details_services_toggle").css("display","none")
     
    })

    document.querySelector(".header_nav_paras").addEventListener("mouseover",function(){
        document.querySelector(".header_nav_paras_drop").style.display="block"
        document.querySelector(".header_nav_paras_drop").addEventListener("mouseleave",function(){
            document.querySelector(".header_nav_paras_drop").style.display="none"
        })
    })

    
    document.querySelector(".header_nav_paras1").addEventListener("mouseover",function(){
        document.querySelector(".header_nav_paras1_drop1").style.display="block"
        document.querySelector(".header_nav_paras1_drop1").addEventListener("mouseleave",function(){
            document.querySelector(".header_nav_paras1_drop1").style.display="none"
        })
    })

      
    document.querySelector(".header_nav_paras2").addEventListener("mouseover",function(){
        document.querySelector(".header_nav_paras2_drop2").style.display="block"
        document.querySelector(".header_nav_paras2_drop2").addEventListener("mouseleave",function(){
            document.querySelector(".header_nav_paras2_drop2").style.display="none"
        })
    })
   
   
}
export default drop;