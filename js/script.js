$(document).ready(function(){
    // var input = 0;
    // var screenTemp = [];
    var screen = ""; 
    var buf = [];
    
    // console.log(screenTemp);
    // screen
    $("#text").html(screen);
    /// screen rendering function

    // function renderScreen(a){
    //     screenTemp.push(a);
    //     screen = screenTemp.join("");
    //     console.log(screen);
    // }
    // 0
    var zero = $(".row:eq(4) .button-long:eq(0)");
    $(zero).on("click",function(){
        var num = $(this).html();
        screen += num;
        buf.push(screen);
        // renderScreen(num);
        $("#text").html(screen);
    });        

    // 1
    var one = $(".row:eq(3) .button-short:eq(0)");
    $(one).on("click",function(){
        var num = $(this).html();
        screen += num;
        buf.push(screen);
        // renderScreen(num);
        $("#text").html(screen);
    });        

    // 2
    var two = $(".row:eq(3) .button-short:eq(1)");
    $(two).on("click",function(){
        var num = $(this).html();
        screen += num;
        buf.push(screen);
        // renderScreen(num);
        $("#text").html(screen);
    });        

    // 3 
    var three = $(".row:eq(3) .button-short:eq(2)");
    $(three).on("click",function(){
        var num = $(this).html();
        screen += num;
        buf.push(screen);
        // renderScreen(num);
        $("#text").html(screen);
    });        


    // 4
    var four = $(".row:eq(2) .button-short:eq(0)");
    $(four).on("click",function(){
        var num = $(this).html();
        screen += num;
        buf.push(screen);
        // renderScreen(num);
        $("#text").html(screen);
    });        
    
    // 5
    var five = $(".row:eq(2) .button-short:eq(1)");
    $(five).on("click",function(){
        var num = $(this).html();
        screen += num;
        buf.push(screen);
        // renderScreen(num);
        $("#text").html(screen);
    });        


    // 6
    var six = $(".row:eq(2) .button-short:eq(2)");
    $(six).on("click",function(){
        var num = $(this).html();
        screen += num;
        buf.push(screen);
        // renderScreen(num);
        $("#text").html(screen);
    });        


    // 7
    var sev = $(".row:eq(1) .button-short:eq(0)");
    $(sev).on("click",function(){
        var num = $(this).html();
        screen += num;
        buf.push(screen);
        // renderScreen(num);
        $("#text").html(screen);
    });

    // 8
    var eight = $(".row:eq(1) .button-short:eq(1)");
    $(eight).on("click",function(){
        var num = $(this).html();
        screen += num;
        buf.push(screen);
        // renderScreen(num);
        $("#text").html(screen);
    });

    //9 
    var nine = $(".row:eq(1) .button-short:eq(2)");
    $(nine).on("click",function(){
        var num = $(this).html();
        screen += num;
        buf.push(screen);
        // renderScreen(num);
        $("#text").html(screen);
    });

    // plus 
    var plus = $(".row:eq(0) .button-short:eq(1)");
    $(plus).on("click",function(){
        var input = $(this).html();
        buf.push(input);
        screen = "";
        console.log(buf);
        // add.push(screen);
        // renderScreen(input);
        $("#text").html(screen);
    });

    //minus
    var minus = $(".row:eq(1) .button-short:eq(3)");
    $(minus).on("click",function(){
        var input = $(this).html();
        buf.push(input);
        screen = "";
        console.log(buf);
        // add.push(screen);
        // renderScreen(input);
        $("#text").html(screen);
    });
    // multi 
    var multi = $(".row:eq(2) .button-short:eq(3)");
    $(multi).on("click",function(){
        var input = $(this).html();
        buf.push(input);
        screen = "";
        $("#text").html(screen);
    });

    // divide
    var divide = $(".row:eq(3) .button-short:eq(3)");
    $(divide).on("click",function(){
        var input = $(this).html();
        buf.push(input);
        screen = "";
    });
    // percent 
    var perc = $(".row:eq(0) .button-short:eq(0)");
    $(perc).on("click", function(){
        var input = $(this).html();
        buf.push(input);
        screen = "";        
    });
    

    //equal 
    var eq = $(".row:eq(4) .button-short:eq(1)");
    $(eq).on("click",function(){
        if(buf[1] === "+"){
            var output = operators.sum();
            screen = output; 

            $("#text").html(screen);
            buf = [];
        }
        else if(buf[1] === "-"){
            var output = operators.minus();
            screen = output; 

            $("#text").html(screen);
            buf = [];            
        }
        else if(buf[1] === "x"){
            var output = operators.multiply();
            screen = output;
            $("#text").html(screen);
        }
        else if(buf[1] === "/"){
            var output = operators.divide();
            screen = output;
            $("#text").html(screen);
        }
        else if(buf[1] === "%"){
            var output = operators.percent();
            screen = output;
            console.log(res);
            $("#text").html(screen);
        }
    });

    var operators = {
        sum : function(){
            console.log("function called");
            console.log(buf);
             var res = +buf[0] + (+buf[2]);
             console.log(res)
             var out = res;
             return out;
        },
        minus : function(){
            console.log("function called");
            console.log(buf);
             var res = +buf[0] - (+buf[2]);
             console.log(res)
             var out = res;
             return out;
        },
        multiply : function(){
            console.log("function called");
            console.log(buf);
             var res = +buf[0] * (+buf[2]);
             console.log(res);
             var out = res;
             return out;
        },
        divide : function(){
            var res = +buf[0] / +(buf[2]);
            var out = res;
            return out;
        },
        percent : function(){
            var res = (buf[0] / +(buf[2]) * 100);
            var out = res;
            return out;

        }
    }
});