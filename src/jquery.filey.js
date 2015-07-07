$.fn.filey = function(options){
	selector = this;

	
    options = $.extend({
        selector: this
        
    }, options);
    
    $(document).ready(function() {
    	var inputFields = $('input[type="file"]');
    	console.log(inputFields);
    	
    	var inputWidth = $(inputFields).width();
    	var inputHeight = $(inputFields).height();
    	
    	var showfile = $('<div />', {
    		text: 'no file chosen',
    		'class': 'filey-show',
    		'placeholder': inputFields.val(),
    		'style': 'height:' + inputHeight + 'px; width:' + inputWidth + 'px;'
         });
    	
    	var changefile = $('<button/>', {
    		text: 'choose a file',
            'class': 'filey-change',
           'style': 'height:' + inputHeight + 'px; width:' + inputWidth + 'px;'
         });
    	
	var inputStyle = 'display: block; width: 0; height: 0; overflow:hiddden; visability:hidden';

	$(inputFields).attr('style', inputStyle).wrap('<div class="filey-wrap"></div>');
    	$(inputFields).after(showfile);
    	$(inputFields).after(changefile);

    	$('.filey-change').click(function() {
    		$(inputFields).click();
    	});
    	
    	$(inputFields).change(function() {
		var path = $(this).val().split('\\');
		
		if (typeof path[2] !== 'undefined') {
			var filename = path[2];
		} else {
			var filename = $(this).val();
		}

    		$('.filey-show').text(filename);
    	});
    	
    });
    
}
