$.fn.filey = function(options){
	selector = $(this);
	
    options = $.extend({
    	removeFile: false,
    	labelNoFile: 'no file choosen',
    	labelChooseFile: 'choose a file',
    	labelChangeFile: 'change file',
    	labelRemoveFile: 'remove file'
        
    }, options);
    
	var inputFields = $(selector);
	var inputWidth = $(inputFields).width();
	var inputHeight = $(inputFields).height();
	
	var showfile = $('<div />', {
		text: options.labelNoFile,
		'class': 'filey-show',
		'placeholder': inputFields.val(),
		'style': 'height:' + inputHeight + 'px; width:' + inputWidth + 'px;'
     });
	
	var changefile = $('<button/>', {
		text: options.labelChooseFile,
        'class': 'filey-change',
        'style': 'display: block; height:' + inputHeight + 'px; width:' + inputWidth + 'px;'
     });
	
	var removefile = $('<button/>', {
		text: options.labelRemoveFile,
		'class': 'filey-remove',
		'style': 'display: block; height:' + inputHeight + 'px; width:' + inputWidth + 'px;'
	});
	
	var inputStyle = 'display: block; width: 0; height: 0; overflow:hiddden; visability:hidden';
	
	$(inputFields).attr('style', inputStyle).wrap('<div class="filey-wrap"></div>');
	$(inputFields).after(showfile);
	$(inputFields).after(changefile);
	
	if (options.removeFile) {
		$(inputFields).after(removefile);
	}

	$('.filey-change').click(function() {
		$(this).parent().find('input').click();
	});
	
	$('.filey-remove').click(function() {
		$(this).parent().find('input').val('');
		$(this).parent().find('.filey-show').text(options.labelNoFile);
	});
	
	$(inputFields).change(function() {
		var path = $(this).val().split('\\');
		
		if (typeof path[2] !== 'undefined') {
			var filename = path[2];
		} else {
			var filename = $(this).val();
		}
	
		$(this).parent().find('.filey-show').text(filename);
		$(this).parent().find('.filey-change').text(options.labelChangeFile);
	});
    	
    
}
