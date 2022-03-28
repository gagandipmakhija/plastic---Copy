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
  

  $(".patitent_cards_filter_outlay").on("mouseover",function(){
      $("div.patitent_cards_filter_img::before").css("background","none")
  })
}
export default drop;