//
// vardars
//

var captionize = captionize || {};

captionize.set = function(elem){
    defaultvals = [];

    $(elem).each(function(){
		defaultvals.push({ 
            id: $(this).attr("id"), 
            value: $(this).attr("title")
        });
	}).focus(function(){
		var inputdefaultvalue = getdefaultvalue($(this).attr("id"));
		if ($(this).val() == inputdefaultvalue)
			$(this).val("").removeClass("passive");
	}).blur(function(){
		var inputdefaultvalue = getdefaultvalue($(this).attr("id"));
		if ($(this).val() == "")
			$(this).val(inputdefaultvalue).addClass("passive");
	}).trigger("blur");
    
    function getdefaultvalue(elemid){
	    for (var i = 0; i < defaultvals.length; i++) {
		    if (defaultvals[i].id == elemid)
			    return defaultvals[i].value;
	    }
    }
}