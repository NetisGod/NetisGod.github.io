$( document ).ready(function() {
	
	function counter(element){
		if(document.querySelector(element) !== null){
			var days = 0,
		        hours = 0,
		        mins = 0,
		        secs = 0,
		        out = "",
				currentDate,
				interval,
				time,
				dd;
			currentDate = new Date();

			if (document.querySelector(element).dataset.time == undefined) {
				time = currentDate.getTime() + 3600 * 1000 * 24 * 5; //5 days
			}
			else if (document.querySelector(element).dataset.time == '5min'){
				time = currentDate.getTime() + 5 * 60 * 1000; //5 min
			}	
			else if (document.querySelector(element).dataset.time == '15min'){
				time = currentDate.getTime() + 15 * 60 * 1000; //15 min
			}
			else if (document.querySelector(element).dataset.time == 'day'){
				time = currentDate.getTime() + 1440 * 60 * 1000; //24 hours
			}
			else if (document.querySelector(element).dataset.time == '40min'){
				time = currentDate.getTime() + 40 * 60 * 1000; //40 min
			}
			else{
				time = document.querySelector(element).dataset.time;
			}

			var dateFuture  = new Date(time).getTime();
		 	var amount = +dateFuture - currentDate.getTime();

		    if (amount < 0) {
		        out = "<div id='day'><span>0</span><span>0</span></div>" + "<div class='round'><span></span><span></span></div>"
				        + "<div id='hour'><span>0</span><span>0</span></div>" + "<div class='round'><span></span><span></span></div>"
				        + "<div id='min'><span>0</span><span>0</span></div>" + "<div class='round'><span></span><span></span></div>"
				        + "<div id='sec'><span>0</span><span>0</span></div>";
		        document.querySelector(element).innerHTML = out;
		    } else {
		     	interval = setInterval(function() {
		     		amount = +dateFuture - currentDate.getTime();
			        days = Math.floor(amount / 86400000);
			        hours = Math.floor((amount / 3600000) % 24);
			        mins = Math.floor((amount / 60000) % 60);
			        secs = Math.floor((amount / 1000) % 60);

			        if(Math.floor(days) < 10){
			        	var dd = "<span>0</span>" + "<span>" + Math.floor(days) + "</span>";
			        }
			        else{
						b = String(Math.floor(days)).split("");
						 var dd = '';
						for (var i=0; i in b; i++){
							dd += '<span>'+b[i]+'</span>';
						}
					}
			        out = "<div id='day'>" +dd+ "</div>" + "<div class='round'><span></span><span></span></div>"
			        	+ "<div id='hour'><span>" + Math.floor(hours/10) + "</span><span>" + hours%10 + "</span></div>" + "<div class='round'><span></span><span></span></div>"
			        	+ "<div id='min'><span>" + Math.floor(mins/10) + "</span><span>" + mins%10 + "</span></div>" + "<div class='round'><span></span><span></span></div>"
			        	+ "<div id='sec'><span>" + Math.floor(secs/10) + "</span><span>" + secs%10 + "</span></div>";
			        document.querySelector(element).innerHTML = out;
			        currentDate = new Date();
			        if (amount < 0) {
				        out = "<div id='day'><span>0</span><span>0</span></div>" + "<div class='round'><span></span><span></span></div>"
			        		+ "<div id='hour'><span>0</span><span>0</span></div>" + "<div class='round'><span></span><span></span></div>"
			        		+ "<div id='min'><span>0</span><span>0</span></div>" + "<div class='round'><span></span><span></span></div>"
			        		+ "<div id='sec'><span>0</span><span>0</span></div>";
			        	document.querySelector(element).innerHTML = out;
		     		}
		    	}, 1000);
			}
		}
	}
	counter('#countdown');
	
		$('.slider-wrap').slick({
		autoplay: true,
  		autoplaySpeed: 4000,
	});
});