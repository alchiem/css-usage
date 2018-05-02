/* 
    RECIPE: Test recipe
    -------------------------------------------------------------
    Author: Alex Chiem
    Description: ramp up recipe
*/

void function() {
    window.CSSUsage.StyleWalker.recipesToRun.push( function testRecipe( element, results) {

        if(element.nodeName === "INPUT") {

            results["use"] = results["use"] || { count: 0 };
            results["use"].count++;

        }
        return results;
    });
}();

