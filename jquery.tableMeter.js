(function( $ ){
	$.fn.tableMeter = function( options ) {
	
		// Default Settings
		var settings = {
			'meterMax'            : 1.0,
			'meterWidth'          : 50,
			'meterHeight'         : 15,
			'meterContainerBorder': 1,
			'meterFillColor'      : '#999999',
			'meterEmptyColor'     : '#ECECEC',
			'meterContainerClass' : 'meter-container',
			'meterBarClass'       : 'meter-bar'
		};

		// Core function
		return this.each(function() {

			if ( options ) { 
				$.extend( settings, options );
			}

			// Math to figure out the widths of the bar
			var $this = $(this);
			var value = $(this).html();
				if (value > settings.meterMax) { value = settings.meterMax; }
			var meterValue = Math.round((value / settings.meterMax)*100)/100;
			var indicatorFillWidth = Math.round(meterValue * settings.meterWidth);

			// Template to output for each meter
			var template = '<div class="'+settings.meterContainerClass+'" style="border:solid '+settings.meterContainerBorder+'px '+settings.meterFillColor+';width:'+settings.meterWidth+'px;background-color:'+settings.meterEmptyColor+';" title="'+value+'"><div class="'+settings.meterBarClass+'" style="width:'+indicatorFillWidth+'px;height:'+settings.meterHeight+'px;background-color:'+settings.meterFillColor+';">&nbsp;</div></div>';
			
			// Update table cell or other element
			$this.html(template);

		});

	};
})( jQuery );