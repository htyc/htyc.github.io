$(document).ready(function() {

    // Call Gridder
    $('.gridder').gridderExpander({
        scroll: true,
        scrollOffset: 30,
        scrollTo: "listitem",                  // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: false,  
        onStart: function(){
            //Gridder Inititialized
        },
        onContent: function(){
            //Gridder Content Loaded
        },
        onClosed: function(){
            //Gridder Closed
        }
    });

});