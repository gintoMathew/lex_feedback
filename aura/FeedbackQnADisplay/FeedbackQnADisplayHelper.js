({
    answerMaker : function(cmp) {
        var ans = cmp.get("v.answer");
        var idx = cmp.get("v.theIndex");
        console.log(' -- ans -- ' + ans);
        console.log(' -- idx -- ' + idx);
        var finalMap = new Map();
        var vMap = cmp.get("v.answerMap");
        console.log(' -- answerMap BEF -- ' + vMap);
        if(vMap != null){
            vMap[idx - 1] = ans;
        }
        else{
            finalMap[idx - 1] = ans;
            cmp.set("v.answerMap", finalMap);
        }
        console.log(' -- answerMap AFT -- ' + JSON.stringify(cmp.get("v.answerMap")));
    },
    
    validateAnswerBox : function(cmp){
        cmp.set("v.validAns", true);
        var ansElem = cmp.find("ansId");
        var ansVal = ansElem.get("v.value");
        console.log(' -- ansVal -- ' + ansVal);
        if(ansVal == '' || ansVal == ' ' || ansVal == undefined ){
            ansElem.set("v.errors", [{ message : "Please enter a valid feedback!" }]);
            cmp.set("v.validAns", false);
        }
    }
})