
$(document).ready(function(){

    $("#zhanghudenglu").click(function(){
        $("#saomadenglu-wrap").hide();
        $("#zhanghudenglu-wrap").show();
        $("#zhanghudenglu").css("color","red");
        $("#zhanghudenglu").css("font-weight","700");
        $("#saomadenglu").css("color","black");
        $("#saomadenglu").css("font-weight","400");


    });

    $("#saomadenglu").click(function(){
       
        $("#zhanghudenglu-wrap").hide();
        $("#saomadenglu-wrap").show();
        $("#zhanghudenglu").css("color","black");
        $("#saomadenglu").css("color","red");
        $("#zhanghudenglu").css("font-weight","400");
        $("#saomadenglu").css("font-weight","700");
    });

    $("#zhanghao").focus(function(){
        $("#tips").css("display","block");
        $("#abc").css("z-index","2");
    });

   $("#abc").click(function(){
       if($("#zhanghao").css("display")=="block"){
        $("#tips").css("display","none");
        $("#abc").css("z-index","-1");
       } 
  
     
   });

});