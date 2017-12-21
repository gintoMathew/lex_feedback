({    
    loadQuestions : function(component, event, helper) {
        var action = component.get("c.getAllQuestionsMapOne");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                component.set("v.feedQuesMap", response.getReturnValue());
                var theMap = component.get("v.feedQuesMap");
                console.log(' -- theMap -- ' + JSON.stringify(theMap));
                if(theMap != '' && theMap != null){
                    for(var key in theMap){
                        // CHANGE THIS when we have more than 1 entry in the map
                        component.set("v.feedbackId", key);
                        component.set("v.feedQuesList", theMap[key]);
                    }
                    
                    var tempMapT = new Map();
                    var theList = component.get("v.feedQuesList");
                    var count = 1;
                    for(var q of theList){
                        // create a map with question number as the key and questions
                        // as the value (ques# -> ques)
                        tempMapT[count] =  q;
                        count++;
                    }
                    component.set("v.fQMap", tempMapT);
                }
                var mainList = component.get("v.feedQuesList");
                // show the 1st entry
                if(mainList != '' && mainList != null){
                    component.set("v.quesToDisplay", mainList[0]);
                    component.set("v.theIndex", 1);
                    // set the button flags
                    component.set("v.hasNext", true);
                    component.set("v.hasPrev", false);
                    component.set("v.hasSubmit", false);
                }
            }
            else{
                console.log(' --- FAILED --- ' + state);
            }
        });
        $A.enqueueAction(action);
    },
    
    handleClick : function(cmp, eve, help){
        var btnClicked = eve.getParam("buttonClicked");
        if(btnClicked != null && btnClicked != ''){
            switch(btnClicked){
                case 'NEXT' :
                    help.answerMaker(cmp, eve);
                    help.handleNext(cmp, eve);
                    break;
                    
                case 'PREV' :
                    help.handlePrev(cmp, eve);
                    break;
                    
                case 'SAVE' :
                    help.answerMaker(cmp, eve);
                    help.handleSave(cmp, eve);
                    break;
            } 
        }
    }
})