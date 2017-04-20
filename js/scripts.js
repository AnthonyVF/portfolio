

$(function() {



$('a#menu-btn').click(function(e){
	 e.preventDefault();
	$('body').toggleClass('menu-open');
});


$('.about-section > a').click(function(e){
	e.preventDefault();
	
	var $this = $(this),
	    list = $this.next(),
	    parent = $this.parent(),
	    id = parent.attr('id'),
	    offsetTarget = $('#about .readmore-btn').offset().top;
	if($(window).width() <= 768){
		if(id == 'l1' || id == 'l2'){
			offsetTarget = offsetTarget - 55;
		}
		if(id == 'l3' || id == 'l4'){
			offsetTarget = offsetTarget + 8;
		}
		if(id == 'l5' || id == 'l6'){
			offsetTarget = offsetTarget + 66;
		}
	}else{
		if(id == 'l1' || id == 'l2'){
			offsetTarget = offsetTarget - 95;
		}
		if(id == 'l3' || id == 'l4'){
			offsetTarget = offsetTarget - 25;
		}
		if(id == 'l5' || id == 'l6'){
			offsetTarget = offsetTarget + 40;
		}
	}
	
	if(!$this.hasClass('open')){
		$('.about-section .open').not(list).removeClass('open'); 
		$('.about-section.opened').not(parent).removeClass('opened'); 
	}

    $('html,body').animate({scrollTop: offsetTarget}, 500);
    
    parent.toggleClass('opened');
	list.toggleClass('open');

});


$('.readmore-btn').click(function(e){
	 	e.preventDefault();
	 	var id = $(this).parent().parent().attr('id');
	 	$(this).toggleClass('r-open');
	 	$('#'+id+' .readmore').toggleClass('r-open');
});

	$('#portfolio article a.accord').click(function(e){
	 	e.preventDefault();
	 	$('#portfolio article ul').removeClass('show');
	 	$(this).next().toggleClass('show');
	});

$('.projects a').click(function(e){
	 	e.preventDefault();
		 var href = $(this).attr('href');
	   	 href = href.substr(1);
   	 if( href == 'all'){
   	 	$('.panels li').attr('style', '');
   	 	$('html,body').animate({scrollTop: $('#portfolio').offset().top},'slow');
   	 }
   	 else{
   	 	$('.panels li').attr('style', '');
   	 	$('.panels li').not('.'+href).hide();
   	 	$('html,body').animate({scrollTop: $('#scrollhere').offset().top},'slow');
   	 }
});

$('.panel a').click(function(e){
	e.preventDefault();
	console.log($(this).attr('class'));

if($(this).hasClass('project-image')){
	var image = $(this).find('img').attr('src'),
		href = $(this).attr('href'),
		name = $(this).next().find('.project-name').text();
	$('#lightbox .name span').text(name);
	$('#lightbox .link a').attr('href', href).text(href);	
	$('#lightbox').attr('class', 'lightbox');
	$('#lightbox img').attr('src', image);
	$('body').addClass('lightbox-shown');
}
else if($(this).hasClass('company-name')){
	var company = $(this).attr('href');
	$('#company').attr('class', 'company').addClass(company);
	$('body').addClass('company-shown');
}
else if($(this).hasClass('project-name')){
	$('body').addClass('project-shown');
	var id = $(this).attr('id'),
		name = $(this).text();
	$('#project').attr('class', 'project').addClass(id);
	$('#project h3').text(name);
	$('#project img').attr('src', 'img/'+id+'.jpg');
}
});


$('.tabs').click(function(e){
	 e.preventDefault();
	 $('#lightbox').toggleClass('tabs-open');
});

$('.project-details').click(function(e){
	 e.preventDefault();
	 $('#lightbox').toggleClass('show-details');
});

$('.responsive a').click(function(e){
	e.preventDefault();
	var image = $('#lightbox img'),
		source = image.attr('src'),
		imageName = '',
		type = '',
		newSrc = '';

	if($(this).hasClass('mob')){
		type = 'mobile';
	}else if($(this).hasClass('tab')){
		type = 'tablet';
	}

	if(source.indexOf('mobile') >= 0  || source.indexOf('tablet') >= 0){
		imageName = source.slice(0, -11);
	}else{
		imageName = source.slice(0, -4);
	} 
	 
	if($(this).hasClass('mob')  ||  $(this).hasClass('tab')){
		newSrc = imageName+'-'+type+'.jpg';	
	}  
	else{
		newSrc = imageName+'.jpg';	
	}

	$('#lightbox').removeClass('tabs-open');
	
	image.attr('src', newSrc);

});


// Close panels script
$('.close').click(function(e){
	 e.preventDefault();
	var id = $(this).parent().attr('id'),
		panel = $(this).parent().attr('id');
	$('body').removeClass(panel+'-shown');
});


//var a = 0;


function scrollToAnchor(aid){
    var aTag = $("section[id='"+ aid +"']");
    var offsetTarget = aTag.offset().top - 70;
    $('html,body').animate({scrollTop: offsetTarget},'slow');
}

$('.logo').click(function(e){
	e.preventDefault();
	$('html,body').animate({scrollTop: $('body').offset().top},'slow');	
});

$("nav li a").click(function(e) {
	e.preventDefault();
	if($('body').hasClass('menu-open')){
		$('body').removeClass('menu-open')
	}

	if($(this).hasClass('contact-btn')){
		$('body').addClass('contact-shown');	
	}else{
		if($('body').hasClass('contact-shown')){
			$('body').removeClass('contact-shown');
		}
		var href = $(this).attr('href');
		href = href.substr(1);
		scrollToAnchor(href);
	}
});




$(window).scroll(function(){

	var h = $(window).height() - 165;
    	if($(this).scrollTop()>=h){
        	$('body').addClass('fixed-header');
		}else if($(this).scrollTop() < h){
        	$('body').removeClass('fixed-header contact-shown');
        	//$('body').removeClass('menu-open');
		}
});


  
});