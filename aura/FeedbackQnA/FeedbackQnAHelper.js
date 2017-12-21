({
    handleNext : function(cmp, eve) {
        var btnIndex = eve.getParam("indexOf");
        if(btnIndex != '' && btnIndex != null){
            var hasNext = false;
            var hasPrev = false;
            var hasSubmit = false;
            var theMap = cmp.get("v.fQMap");
            var nextInd = btnIndex + 1;
            var quesToSend = theMap[nextInd];
            var hasValidNext = theMap[nextInd + 1];
            var theList = cmp.get("v.feedQuesList");
            var ansMap = cmp.get("v.feedQuesAnsMap");
            // fire application event and the target component lies lower in the 
            // component hierarchy
            var quesEvent = $A.get("e.c:FeedbackQuesEvent");
            if(hasValidNext === undefined ){
                hasPrev = true;
                hasSubmit = true;
            }
            else{
                hasNext = true;
                hasPrev = true;
            }
            quesEvent.setParams({ "theQuestion" : quesToSend ,
                                  "nextIndex" : nextInd ,
                                  "hasNext" : hasNext ,
                                  "hasPrev" : hasPrev ,
                                  "hasSubmit" : hasSubmit,
                                  "theAns" : ansMap[nextInd] });
            quesEvent.fire();
        }
    },
    
    handlePrev : function(cmp, eve){
        var btnIndex = eve.getParam("indexOf");
        if(btnIndex != '' && btnIndex != null){
            var hasNext = false;
            var hasPrev = false;
            var hasSubmit = false;
            var theMap = cmp.get("v.fQMap");
            var prevInd = btnIndex - 1;
            var quesToSend = theMap[prevInd];
            var hasValidPrev = theMap[prevInd - 1];
            var theList = cmp.get("v.feedQuesList");
            var ansMap = cmp.get("v.feedQuesAnsMap");
            // fire application event and the target component lies lower in the 
            // component hierarchy
            var quesEvent = $A.get("e.c:FeedbackQuesEvent");
            if(hasValidPrev === undefined ){
                hasNext = true;
            }
            else{
                hasPrev = true;
                hasNext = true;
            }
            quesEvent.setParams({ "theQuestion" : quesToSend ,
                                  "nextIndex" : prevInd ,
                                  "hasNext" : hasNext ,
                                  "hasPrev" : hasPrev ,
                                  "hasSubmit" : hasSubmit,
                                  "theAns" : ansMap[prevInd] });
            quesEvent.fire();
        }
        
    },
    
    handleSave : function(cmp, eve){
        var saveAll = cmp.get("c.insertFeedback");
        console.log(' -- record Id -- ' + cmp.get("v.recordId"));
        saveAll.setParams({ "theStrMap" : cmp.get("v.feedQuesAnsMap") ,
                           "userId" : $A.get("$SObjectType.CurrentUser.Id") ,
                           "recId" : cmp.get("v.recId") ,
                           "feedRecId" : cmp.get("v.feedbackId")
                          });
        $A.enqueueAction(saveAll);
        // show splash screen
        var splashEve = cmp.getEvent("showThanks");
        splashEve.setParams({ "showSplashScreen" : true });
        splashEve.fire();
        console.log(' -- all ans map -- ' + JSON.stringify(cmp.get("v.feedQuesAnsMap")));
    },
    
    answerMaker : function(cmp, eve) {
		var idx = eve.getParam("indexOf");
        var ans = eve.getParam("theAnswer");
        var finalMap = new Map();
        var vMap = cmp.get("v.feedQuesAnsMap");
        if(vMap != null){
            vMap[idx] = ans;
        }
        else{
            finalMap[idx] = ans;
            cmp.set("v.feedQuesAnsMap", finalMap);
        }
	}

})