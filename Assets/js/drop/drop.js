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
   var headerNavLinks = document.querySelectorAll('.header_nav_paras')
   console.log(headerNavLinks);
   headerNavLinks.forEach(function(headerNavLink){
   headerNavLink.addEventListener("mouseover",function(){
    //    alert("mouseover")
       document.querySelector(".header_nav_paras_drop").style.display="block"
   })
   })
   var headerNavLinks = document.querySelectorAll('.header_nav_paras')
   console.log(headerNavLinks);
   headerNavLinks.forEach(function(headerNavLink){
   headerNavLink.addEventListener("mouseleave",function(){
    //    alert("mouseover")
       document.querySelector(".header_nav_paras_drop").style.display="none"  })
   })


    // document.querySelector(".header_nav_paras").addEventListener("mouseover",function(){
    //    document.querySelector(".header_nav_paras_drop").style.display="block"
         
    // })
    // document.querySelector(".header_nav_paras_drop").addEventListener("mouseleave",function(){
    //     document.querySelector(".header_nav_paras_drop").style.display="none"
    // })
    // document.querySelector(".header_nav_paras").addEventListener("mouseleave",function(){
    //     document.querySelector(".header_nav_paras_drop").style.display="none"
    // })

    
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
   

//     const him = document.querySelectorAll(".hidd33");

// him.forEach( (e, index) =>{

//   e.addEventListener("mouseover", () =>{

//     show(index);

   

// });

// });




// function show(index){

//   const main = document.querySelectorAll(".pppa");

//   for(var q = 0;q< main.length;q++){

//     main[q].style.display = "none";

//   }

//   var y = main[index];

//   y.addEventListener("mouseleave", () =>{

//     y.style.display = "none";

//   });

//   if (y.style.display === "flex") {

//         y.style.display = "none";  

//       } else {

//         y.style.display = "flex";

//       }

//   console.log(main[index]);

}
   
export default drop;