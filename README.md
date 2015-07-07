# jquery.filey
a extreme lightweight (0,7k minified) jquery plugin for modifying file input fields in a way that they can easily be styled (upload button and shown filename are an own element)

## usage
include jquery.filey.js and initiate as followed:
	$(body).filey();
	
## what it does
it wraps div.filey-wrap arround and appends following new elements after the input
	button.filey-change		(open the file-choose-dialog if you click)
	div.filey-show			(shows the filename if a file is chosen)