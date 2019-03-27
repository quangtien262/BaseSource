;(function ($) {
	'use strict';
	$.fn.nvh_slider = function(newOptions){
		var options = $.extend({}, $.fn.nvh_slider.defaultOptions, newOptions);
		var slider = $(this);
		var items  = slider.children();
		var countItems = items.length;
		var oldIndex = null;
		var currentIndex = options.itemStart;
		var smooth = "";	// left | right
		var newPositions = [];
		var heightItems = [];
		var sliding = false;

		initSlider();
		$(window).resize(function(){
			initSlider();
		});

		function initSlider(){
			items.css({
				position: 'absolute',
				overflow: 'hidden'
			});
			slider.css({
				position: 'relative'
			});
			setHeightItems(function(){
				setContainerHeight();
				setPositionStart();
				action(function(){
					afterLoad();
				});
				setEventLeftRight();
			});
		}
		function setEventLeftRight(){
			items.each(function(idx, el) {
				var index = idx;
				$(this).click(function(){
					if(index == prevIndex(currentIndex))
						prev();
					else if (index == nextIndex(currentIndex))
						next();
				});
			});
		}
		function action(callback, speed=options.speed){
			items.css({
				"z-index": '10'
			});
			items.removeClass(options.itemCenterClass).removeClass(options.itemLeftClass).removeClass(options.itemRightClass);
			items.each(function(index, el) {
				if (index == currentIndex)
					$(this).addClass(options.itemCenterClass);
				else if (index == prevIndex(currentIndex))
					$(this).addClass(options.itemLeftClass);
				else if (index == nextIndex(currentIndex))
					$(this).addClass(options.itemRightClass);

				// Animation afterload
				if (index == nextIndex(currentIndex) && smooth == "next")
					$(this).css({"z-index":(newPositions[index]["z-index"]-1)})
				else if (index == prevIndex(currentIndex) && smooth == "prev")
					$(this).css({"z-index":(newPositions[index]["z-index"]-1)})
				else 
					$(this).css({"z-index":newPositions[index]["z-index"]})

				$(this).animate({
					top: newPositions[index].top,
					left: newPositions[index].left,
					width: newPositions[index].width,
					height: newPositions[index].height,
					opacity: newPositions[index].opacity,
				},
				speed, function() {
					$(this).css({
						'z-index': newPositions[index]['z-index']
					});
					if (callback && index == countItems - 1) callback();
				});
			});
		}
		function next(count=1, speed=options.speed, callback=null, end=null){
			sliding == false || (sliding==true&&end!=null)
			if (sliding && (!sliding || end==null)) return ;
			sliding = true;
			if (end==null) beforeChange(currentIndex, nextIndex(currentIndex));
			if (count == 1){
				currentIndex = nextIndex(currentIndex);
				smooth = "next";
				setPosition();
				action(function(){
					if (callback) callback();
					if (end==null || end==true) afterChange(currentIndex);
				}, speed);
			}
			else if (count == 2){
				next(1, speed, function(){
					next(1, speed, null, true);
				}, false);
			}
			else {
				next(1, speed, function(){
					next(count - 1, speed, null, false);
				}, false);
			}
		}
		function prev(){
			if (sliding) return ;
			sliding = true;
			beforeChange(currentIndex, prevIndex(currentIndex));
			currentIndex = prevIndex(currentIndex);
			smooth = "prev";
			setPosition();
			action(function(){
				afterChange(currentIndex);
			});
		}
		function slide(index){
			if (sliding) return ;
			index = index % countItems;
			beforeChange(currentIndex, index);
			var countNext = (countItems + index - currentIndex) % countItems;
			var speedNext = options.speed / countNext + options.speed * 0.15;
			next(countNext, speedNext)
		}
		function setPositionStart(){
			setPosition();
		}
		function setPosition(){
			newPositions = [];
			for (var i = 0; i < countItems; i++) {
				if (prevIndex(currentIndex) == i)
					newPositions.push(getPositionLeft(i));
				else if (nextIndex(currentIndex) == i)
					newPositions.push(getPositionRight(i));
				else if (currentIndex == i)
					newPositions.push(getPositionCenter());
				else newPositions.push(getDefaultPostion(i));
			}
		}
		function startLoading(){
			items.css({opacity: 0});
			slider.addClass('loading')
		}
		function endLoading(){
			items.css({opacity: 1});
			slider.removeClass('loading')
		}
		function setHeightItems(callback=function(){}){
			// Set all item center
			var optionPositionCenter = getPositionCenter();
			heightItems = [];
			items.css({
				width: optionPositionCenter.width,
				height: "auto",
				left: optionPositionCenter.left,
				top: optionPositionCenter.top
			});
			startLoading();
			setTimeout(function(){
				items.each(function(index, el) {
					heightItems.push($(this).outerHeight(true));
				});
			}, 200);
			setTimeout(function(){
				endLoading();
				callback();
			}, 400);
		}
		function getDefaultPostion(index){
			var widthItemCenter = getWidthCenterResponsive();
			var widthContainer = slider.innerWidth();
			var heightItem = heightItems[currentIndex] * options.heigthLeftRight;
			var topItem = (heightItems[currentIndex] - heightItem) / 2;
			var widthItem = widthItemCenter * heightItem / heightItems[index];
			var widthItem = (widthItem > widthItemCenter) ? widthItemCenter : widthItem;
			var leftItem = (widthContainer - widthItem) / 2;
			return {
				width: widthItem,
				top: topItem,
				left: leftItem,
				height: heightItem,
				'z-index' : 10,
				opacity: 0
			}
		}
		function getPositionCenter(index=currentIndex){
			var widthItem = getWidthCenterResponsive();
			var widthContainer = slider.innerWidth();
			var leftItem = (widthContainer - widthItem) / 2;
			var heightItem = heightItems[currentIndex];
			var topItem = 0;
			return {
				width: widthItem,
				top: topItem,
				left: leftItem,
				height: heightItem,
				'z-index' : 30,
				opacity: 1
			}
		}
		function getPositionLeft(index){
			var widthItemCenter = getWidthCenterResponsive();
			var offsetLeft2Center = getWidthLeftResponsive();
			var widthContainer = slider.innerWidth();
			var leftItem = (widthContainer - widthItemCenter) / 2 - offsetLeft2Center;
			var heightItem = heightItems[currentIndex] * options.heigthLeftRight;
			var topItem = (heightItems[currentIndex] - heightItem) / 2;
			var widthItem = widthItemCenter * heightItem / heightItems[index];
			var widthItem = (widthItem > widthItemCenter) ? widthItemCenter : widthItem;
			return {
				width: widthItem,
				top: topItem,
				left: leftItem,
				height: heightItem,
				'z-index' : 20,
				opacity: 1
			}
		}
		function getPositionRight(index){
			var widthItemCenter = getWidthCenterResponsive();
			var offsetLeft2Center = getWidthLeftResponsive();
			var widthContainer = slider.innerWidth();
			var heightItem = heightItems[currentIndex] * options.heigthLeftRight;
			var topItem = (heightItems[currentIndex] - heightItem) / 2;
			var widthItem = widthItemCenter * heightItem / heightItems[index];
			var widthItem = (widthItem > widthItemCenter) ? widthItemCenter : widthItem;
			var leftItem = (widthContainer + widthItemCenter) / 2 + offsetLeft2Center - widthItem;
			return {
				width: widthItem,
				top: topItem,
				left: leftItem,
				height: heightItem,
				'z-index' : 20,
				opacity: 1
			}
		}
		function setContainerHeight(index=currentIndex){
			var height = heightItems[index];
			slider.animate({
				'height': height
			});
		}
		function getOptionPositionResponsive(){
			var optionRes = null;
			var windowWidth = $(window).width();
			if (!options.responsive) return null;
			options.responsive.forEach(function(item, index){
				if (item.window > windowWidth) {
					optionRes = item;
				}
			});
			return optionRes;
		}
		function getWidthCenterResponsive(){
			var width = 0;
			var optionRes = getOptionPositionResponsive();
			if (optionRes == null || !optionRes.width)
				width = options.width;
			else width = optionRes.width;
			if (width <= 1) width = width * slider.innerWidth();
			return width;
		}
		function getWidthLeftResponsive(){
			var width = 0;
			var optionRes = getOptionPositionResponsive();
			if (optionRes == null || !optionRes.left)
				width = options.left;
			else width = optionRes.left;
			if (width <= 1) width = width * slider.innerWidth();
			return width;
		}
		function getWidthRightResponsive(){
			var width = 0;
			var optionRes = getOptionPositionResponsive();
			if (optionRes == null || !optionRes.right)
				width = options.right;
			else width = optionRes.right;
			if (width <= 1) width = width * slider.innerWidth();
			return width;
		}
		function nextIndex(index, count=1){
			return (index + count) % countItems;
		}
		function prevIndex(index, count=1){
			return (index + count * countItems - count) % countItems;
		}
		function afterLoad(){
			if (options.afterload) options.afterload();
		}
		function beforeChange(currentIndex, nextIndex){
			setContainerHeight(nextIndex);
			if (options.beforeChange) options.beforeChange(currentIndex, nextIndex);
		}
		function afterChange(currentIndex){
			if (options.afterChange) options.afterChange(currentIndex);
			sliding = false;
		}

		this.next = function (){
			next();
		}
		this.prev = function(){
			prev();
		}
		this.slide = function(index){
			slide(index);
		}
		this.slideElement = function(e){
			slide(items.index(e));
		}
		return this;
	}
	$.fn.nvh_slider.defaultOptions = {
		itemCenterClass: 		"item-center",
		itemLeftClass: 			"item-left",
		itemRightClass: 		"item-right",
		speed: 					300,
		width: 					1140,
		left: 					100,
		right: 					100,
		heigthLeftRight: 		.8,
		responsive: 			null, // [{ window: 1680, width: 1000, left: 200, right: 200 }],
		itemStart: 				0,
		afterLoad: 				null, // function(){},
		beforeChange: 			null, // function(currentIndex, nextIndex){},
		afterChange: 			null, // function(currentIndex){}
	}
})(jQuery);