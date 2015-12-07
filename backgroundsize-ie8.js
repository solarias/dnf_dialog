(function($){
	$.remakeImageAll = function() {
		sheets = document.styleSheets;	

		for(i = 0; i < sheets.length; i++) {
			sheet = sheets[i];
			rules = sheet.rules || sheet.cssRules;
			if(rules.length > 0) {
				for(j = 0; j < rules.length; j++) {
					rule = rules[j];

					cssText = rule.style.cssText.toLowerCase();
					if(!cssText.match(/background-size/)) {
						continue;
					}			

					cssText = cssText.split(';');
					if(cssText.length == 0) {
						continue;
					}

					for(k = 0; k < cssText.length; k++) {
						styleAttr = cssText[k];

						if(!styleAttr.match(/background-size/)) {
							continue;
						}

						selectorText = rule.selectorText.toLowerCase();

						bkSize = styleAttr.replace('background-size:', '').replace(/^\s+/, '');

						$('body').find(selectorText).each(function(){
							$(this).makeImage(bkSize);
						});

						break;
					}
				}
			}
		}
	};

	$.fn.remakeImage = function(options) {
		var defaults = {
			backgroundSize : 'auto auto'
        },
        settings = $.extend({}, defaults, options);

		this.css({'backgroundSize':settings.backgroundSize});
		bkSize = this.css('backgroundSize');

		this.makeImage(bkSize);
	};

	$.fn.makeImage = function(bkSize) {
		var bkSrc = /url\(["']?(.*?)["']?\)/;

		if(this.css('backgroundRepeat') != 'no-repeat') {
			return false;
		}

		bkImg = this.css('backgroundImage');

		if(bkImg == 'none' || bkImg == null) {
			return false;
		}

		bkImg = bkSrc.exec(bkImg)[1];

		w = this.width();
		h = this.height();

		switch(bkSize) {
			case 'contain':
				imgWidth = (w >= h) ? 'auto' : '100%';
				imgHeight = (w >= h) ? '100%' : 'auto';
				posTop = posLeft = 0;
				break;
			case 'cover':
				imgWidth = (w >= h) ? '100%' : 'auto';
				imgHeight = (w >= h) ? 'auto' : '100%';
				posTop = posLeft = 0;
				break;
			default:
				imgSize = bkSize.split(' ');
				imgWidth = imgSize[0];
				imgHeight = imgSize[1] ? imgSize[1] : imgSize[0];

				bkPosX = this.css('backgroundPositionX');
				bkPosY = this.css('backgroundPositionY');

				switch(bkPosX) {
					case 'left':
						bkPosX = '0%';
						break;
					case 'center':
						bkPosX = '50%';
						break;
					case 'right':
						bkPosX = '100%';
						break;
				}

				switch(bkPosY) {
					case 'top':
						bkPosY = '0%';
						break;
					case 'center':
						bkPosY = '50%';
						break;
					case 'bottom':
						bkPosY = '100%';
						break;
				}

				if(imgWidth == 'auto') {
					posLeft = 0;
				} else {
					if(bkPosX == '100%') {
						posLeft = 'auto';
					} else {
						posLeft = bkPosX.match(/%/) ? w * (parseFloat(bkPosX) / 100) : parseFloat(bkPosX);
						posLeft = posLeft - (parseInt(imgWidth) / 2);

						if(posLeft < 0) {
							posLeft = 0;
						}
					}
				}

				if(imgHeight == 'auto') {
					posTop = 0;
				} else {
					if(bkPosY == '100%') {
						posTop = 'auto';
					} else {
						posTop = bkPosY.match(/%/) ? h * (parseFloat(bkPosY) / 100) : parseFloat(bkPosY);
						posTop = posTop - (parseInt(imgHeight) / 2);

						if(posTop < 0) {
							posTop = 0;
						}						
					}
				}

				break;
		}

		this.css({
			backgroundImage: 'none',
			position: 'relative'
		});

		this.children().each(function() {
			if($(this).css('position') == 'static') {
				$(this).css({
					position: 'relative'
				});
			}
		});

		pdTop = this.css('paddingTop');
		pdLeft = this.css('paddingLeft');
		wrapper = $( "<div>" ).css({
			position: "absolute",
			// zIndex: -1,
			top: pdTop,
			left: pdLeft,
			right: 0,
			bottom: 0,
			overflow: "hidden"
		});

		img = $( "<img>" ).css({
			position: "absolute",
			top: posTop,
			left: posLeft,
			right: 0,
			bottom: 0,
			width: imgWidth,
			height: imgHeight
		}).attr({
			src: bkImg
		}).appendTo(wrapper);

		wrapper.prependTo(this);
	}
})(jQuery);

$(function(){
	$.remakeImageAll();
});