({

    initFeedback : function(cmp, eve, help) {
		//help.showToast(cmp);
        help.showSplashScreen(cmp, eve);
    },
    
    beginFeedback : function(cmp, eve, help){
        cmp.set("v.showSplash", eve.getParam("showSplashScreen"));
    },
    
    showThanksSplash : function(cmp, eve, help){
         console.log(' -- showThanksSplash -- ');
         help.showSplashScreen(cmp, eve);
    }

})