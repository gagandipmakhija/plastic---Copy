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
}
export default drop;