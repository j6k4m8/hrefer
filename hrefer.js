(function(){
	Hrefer = function(el, selector, padding) {

		hrefersCount = 0;
		Hrefers = [];
		$(el).find(selector).each(function() {
			$e = $(this);
			$e0 = newDivAtBounds($e, padding);
			addListeners($e0);
			Hrefers.push($e0);
		});
		return Hrefers;
	};

	var newDivAtBounds = function($element, padding) {
		$newDiv = $("<div class='_hreferR_' data-hrefer-target='_hreferT_" + hrefersCount + "'></div>");
		$element.addClass('_hreferT_' + hrefersCount++).parent().append($newDiv);
		$newDiv.css({
			'position': 'absolute',
			'top': 		$element.position().top - padding,
			'left': 	$element.position().left - padding,
			'width': 	$element.width() + 2*padding,
			'height': 	$element.height() + 2*padding,
			'cursor': 	'pointer'
		});
		return $newDiv;
	};

	var addListeners = function($element) {
		$($element).click(function() {
			$('.' + $(this).data('hrefer-target'))[0].click();
		});
	};
}());