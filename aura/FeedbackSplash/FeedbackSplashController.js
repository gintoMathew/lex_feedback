({
	startFeedback : function(cmp, eve, help) {
		var theEvent = cmp.getEvent("splashEvent");
        theEvent.setParams({ "showSplashScreen" : false});
        theEvent.fire();
	}
})