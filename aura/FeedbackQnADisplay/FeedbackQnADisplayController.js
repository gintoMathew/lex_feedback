({
    handleButtons : function(cmp, eve, help){       
        cmp.set("v.question", eve.getParam("theQuestion"));
        cmp.set("v.hasNext", eve.getParam("hasNext"));
        cmp.set("v.hasPrev", eve.getParam("hasPrev"));
        cmp.set("v.hasSubmit", eve.getParam("hasSubmit"));
        cmp.set("v.theIndex", eve.getParam("nextIndex"));
        cmp.set("v.answer", eve.getParam("theAns"));
        cmp.find("ansId").set("v.errors" , null);
    },
    
    showNext : function(cmp, eve, help) {
        help.validateAnswerBox(cmp);
        var isValid = cmp.get("v.validAns");
        console.log(' -- isValid -- ' + isValid);
        if(isValid){
            // clear all the errors
            cmp.find("ansId").set("v.errors" , null);
            var nextEvent = cmp.getEvent("sendClick");
            nextEvent.setParams({ "buttonClicked" : 'NEXT',
                                 "indexOf" : cmp.get("v.theIndex"),
                                 "theAnswer" : cmp.get("v.answer")
                                });
            nextEvent.fire();
        }
    },
    
    showPrev : function(cmp, eve, help) {
        var prevEvent = cmp.getEvent("sendClick");
        prevEvent.setParams({ "buttonClicked" : 'PREV',
                             "indexOf" : cmp.get("v.theIndex")
                            });
        prevEvent.fire();
    },
    
    saveAnswer : function(cmp, eve, help) {
        var saveEvent = cmp.getEvent("sendClick");
        saveEvent.setParams({ "buttonClicked" : 'SAVE',
                             "indexOf" : cmp.get("v.theIndex"),
                             "theAnswer" : cmp.get("v.answer")
                            });
        saveEvent.fire(); 
    }
    
    
})