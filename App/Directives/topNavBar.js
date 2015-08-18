app.directive('topNavBar',function(){
    return{
        replace:true,
        scope:{

        },
        templateUrl:'App/Partials/topNavBarDirective.html',
        controller:'navBar',
        link:function(scope,element,attrs){
            var initial = function(){
                element.find("#homepop").stop(true);
                element.find("#aboutpop").stop(true);
                element.find("#contactpop").stop(true);
                element.find("#fuckpop").stop(true);
                element.find("#holypop").stop(true);
                element.find("#navhome").css({backgroundColor:'#154995',borderRight:'1px solid white'});
                element.find("#navabout").css({backgroundColor:'#154995',borderRight:'1px solid white'});
                element.find("#navcontact").css({backgroundColor:'#154995',borderRight:'1px solid white'});
                element.find("#navfuck").css({backgroundColor:'#154995',borderRight:'1px solid white'});
                element.find("#navholy").css({backgroundColor:'#154995',borderRight:'1px solid white'});
            }
            //Home Controll
            element.find("#navhome").on('mouseover',function(){
                //initial blocks
                initial();

                element.find("#aboutpop").slideUp();
                element.find("#contactpop").slideUp();
                element.find("#fuckpop").slideUp();
                element.find("#holypop").slideUp();

                //change and show blocks
                element.find("#navhome").css({'background-color':'#79c13e','border-right':'#79c13e'});
                element.find('#homepop').slideDown(200);
                //element.find('#headpop').slideDown(500);
                element.find('.headnav-decoration').css({'background-color':'#79c13e',height:'10px'});
                element.find('.headnav-decoration').slideDown(200);
                //element.find('.headnav-panel').slideDown(200);


            })
            //About Controll
            element.find("#navabout").on('mouseover',function(){
                //initial blocks
                initial();
                element.find("#homepop").slideUp();
                element.find("#contactpop").slideUp();
                element.find("#fuckpop").slideUp();
                element.find("#holypop").slideUp();
                //change and show blocks
                element.find("#navabout").css({'background-color':'#529dde','border-right':'#529dde'});
                element.find("#navhome").css('borderRight','1px solid #529dde');
                element.find('#aboutpop').slideDown(200);
                //element.find('#headpop').slideDown(500);
                element.find('.headnav-decoration').css({'background-color':'#529dde',height:'10px'});
                element.find('.headnav-decoration').slideDown(200);
                //element.find('.headnav-panel').slideDown(200);


            })
            //Contact Controll
            element.find("#navcontact").on('mouseover',function(){
                //initial blocks
                initial()
                element.find("#homepop").slideUp();
                element.find("#aboutpop").slideUp();
                //element.find("#contactpop").hide();
                element.find("#fuckpop").slideUp();
                element.find("#holypop").slideUp();
                //change and show blocks
                element.find("#navcontact").css({'background-color':'#ffba23','border-right':'#ffba23'});
                element.find("#navabout").css('borderRight','1px solid #ffba23');
                element.find('#contactpop').slideDown(200);
                //element.find('#headpop').slideDown(500);
                element.find('.headnav-decoration').css({'background-color':'#ffba23',height:'10px'});
                element.find('.headnav-decoration').slideDown(200);
                //element.find('.headnav-panel').slideDown(200);


            })
            //Fuck Controll
            element.find("#navfuck").on('mouseover',function(){
                //initial blocks
                initial();
                element.find("#homepop").slideUp();
                element.find("#aboutpop").slideUp();
                element.find("#contactpop").slideUp();
                element.find("#holypop").slideUp();
                //change and show blocks
                element.find("#navfuck").css({'background-color':'#9e9586','border-right':'#9e9586'});
                element.find("#navcontact").css('borderRight','1px solid #9e9586');
                element.find('#fuckpop').slideDown(200);
                //element.find('#headpop').slideDown(500);
                element.find('.headnav-decoration').css({'background-color':'#9e9586',height:'10px'});
                element.find('.headnav-decoration').slideDown(200);
                //element.find('.headnav-panel').slideDown(200);


            })
            //Holy Controll
            element.find("#navholy").on('mouseover',function(){
                //initial blocks
                initial();
                element.find("#homepop").slideUp(200);
                element.find("#aboutpop").slideUp(200);
                element.find("#contactpop").slideUp(200);
                element.find("#fuckpop").slideUp(200);
                //element.find("#holypop").slideUp(200);
                //change and show blocks
                element.find("#navholy").css({'background-color':'#af93ed','border-right':'#af93ed'});
                element.find("#navfuck").css('borderRight','1px solid #af93ed');
                element.find('#holypop').slideDown(200);
                //element.find('#headpop').slideDown(500);
                element.find('.headnav-decoration').css({'background-color':'#af93ed',height:'10px'});
                element.find('.headnav-decoration').slideDown(200);
                //element.find('.headnav-panel').slideDown(200);


            })
            //Mouse Leave Control
            element.find('#headpop').on('mouseleave',function(){
                element.find("#headpop").stop(true);
                element.find(".headnav-decoration").stop(true);

                element.find("#homepop").slideUp(200);
                element.find("#aboutpop").slideUp(200);
                element.find("#contactpop").slideUp(200);
                element.find("#fuckpop").slideUp(200);
                element.find("#holypop").slideUp(200);
                element.find(".headnav-decoration").slideUp(200);
                //element.find("#headpop").finish();
                element.find("#navhome").css({backgroundColor:'#154995',borderRight:'1px solid white'});
                element.find("#navabout").css({backgroundColor:'#154995',borderRight:'1px solid white'});
                element.find("#navcontact").css({backgroundColor:'#154995',borderRight:'1px solid white'});
                element.find("#navfuck").css({backgroundColor:'#154995',borderRight:'1px solid white'});
                element.find("#navholy").css({'background-color':'#154995','border-right':'1px solid white'});

                //element.find("#headpop").slideUp(500);


            });



        }
    }
})
