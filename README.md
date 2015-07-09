# jquery.filey
a extreme lightweight (1,2k minified) jquery plugin for modifying file input fields in a way that they can easily be styled (upload button and shown filename are an own element)

## usage
include jquery.filey.js and initiate as followed:

    $(document).ready(function() {
      $('input.filey').filey();
    })
	
## options
following options are now available:

    $('input.filey').filey({
        removeFile: true, // activates the remove file button
        labelNoFile: 'Keine Datei gewählt', // label (no file chosen)
        labelChooseFile: 'Datei wählen', // label (choosing file)
        labelChangeFile: 'Neue Datei wählen', // label (changing file)
        labelRemoveFile: 'Datei entfernen' // label (remove file button)
    });	
	
## what it does in DOM
it wraps div.filey-wrap arround and appends following new elements after the input

* button.filey-change		(open the file-choose-dialog if you click)
* button.filey-remove		(optional, removes the chosen file)
* div.filey-show			(shows the filename if a file is chosen)