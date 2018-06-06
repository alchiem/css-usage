/* 
    RECIPE: Test recipe
    -------------------------------------------------------------
    Author: Alex Chiem
    Description: JS script for Josh
*/

window.debugCSSUsage = true

window.innerHeightCount = 0;
window.innerWidthCount = 0;
window.screenXCount = 0;
window.screenYCount = 0;

window._oldInnerHeight = window.innerHeight();
window._oldInnerWidth = window.innerWidth();
window._oldScreenX = window.screenX();
window._oldScreenY = window.screenY();

window.innerHeight = function() {
    window.innerHeightCount++;
    return window._oldInnerHeight;
}

window.innerWidth = function() {
    window.innerWidthCount++;
	return window._oldInnerWidth;
}

window.screenX = function() {
    window.screenXCount++;
    return window._oldScreenX;
}

window.screenY = function() {
    window.screenYCount++;
	return window._oldScreenY;
}

void function() {
    document.addEventListener('DOMContentLoaded', function () {
        var results = {};
        var innerHeightString = "innerHeight";
        var innerWidthString = "innerWidth";
        var screenXString = "screenX";
        var screenYString = "screenY";

        if(window.innerHeightCount > 0)
        {
            results[innerHeightString] = results[innerHeightString] || { count: 0, href: location.href };
            results[innerHeightString].count = window.innerHeightCount;
        }
        else
        {
            results[innerHeightString] = results[innerHeightString] || { href: location.href };
        }

        if(window.innerWidthCount > 0)
        {
            results[innerWidthString] = results[innerWidthString] || { count: 0, href: location.href };
            results[innerWidthString].count = window.innerWidthCount;
        }
        else
        {
            results[innerWidthString] = results[innerWidthString] || { href: location.href };
        }

        if(window.screenXCount > 0)
        {
            results[screenXString] = results[screenXString] || { count: 0, href: location.href };
            results[screenXString].count = window.screenXCount;
        }
        else
        {
            results[screenXString] = results[screenXString] || { href: location.href };
        }

        if(window.screenYCount > 0)
        {
            results[screenYString] = results[screenYString] || { count: 0, href: location.href };
            results[screenYString].count = window.screenYCount;
        }
        else
        {
            results[screenYString] = results[screenYString] || { href: location.href };
        }

        appendResults(results);
        
        // Add it to the document dom
        function appendResults(results) {
            if(window.debugCSSUsage) console.log("Trying to append");
            var output = document.createElement('script');
            output.id = "css-usage-tsv-results";
            output.textContent = JSON.stringify(results);
            output.type = 'text/plain';
            document.querySelector('head').appendChild(output);
            var successfulAppend = checkAppend();
        }

        function checkAppend() {
            if(window.debugCSSUsage) console.log("Checking append");
            var elem = document.getElementById('css-usage-tsv-results');
            if(elem === null) {
                if(window.debugCSSUsage) console.log("Element not appended");
            }
            else {
                if(window.debugCSSUsage) console.log("Element successfully found");
            }
        }

    });
}();
