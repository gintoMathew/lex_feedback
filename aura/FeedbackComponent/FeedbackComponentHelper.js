({
    showToast : function(component){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            mode : 'sticky',
            title : 'Feedback',
            message : 'Let us know about your journey with this opportunity'
        });
        toastEvent.fire();
    },
    
    showSplashScreen : function(cmp, eve){
        var action = cmp.get("c.opportunityFeedbackStatus");
        action.setParams({ "oppId" : cmp.get("v.recordId")});
        action.setCallback(this, function(resp){
            var state = resp.getState();
            if(state === 'SUCCESS'){
                cmp.set("v.feedbackGiven", resp.getReturnValue());
                cmp.set("v.showSplash", true);
            }
        });
        $A.enqueueAction(action); 
    }
    
})