const drop=()=>{
    
    $(".contact_details_services_input1").on("mouseover",function(){
        $(".contact_details_services_toggle").css("display","block")
        console.log("working");
        $(".contact_details_services_toggle").on("mouseleave",function(){
            $(".contact_details_services_toggle").css("display","none")
        })
    })
    $(".contact_details_services_toggle_para").on("click",function(){
        $(".contact_details_services_toggle").html($(this.html));
    })
}
export default drop;