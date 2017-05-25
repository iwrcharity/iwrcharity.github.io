// All javascript, besides the map, is here

/* 
*
*
Uses tabletop.js to interact with Google Sheets
Spreadsheet to populate database: https://docs.google.com/spreadsheets/d/1eRJDZIT8cCOH-cLCdnL_szUqskf81yDCRBF5Kb0Ku5A
API https://github.com/jsoma/tabletop
*
*
*/

function goog_sheet_init() {
	Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1eRJDZIT8cCOH-cLCdnL_szUqskf81yDCRBF5Kb0Ku5A/pubhtml',
		callback: function(data, tabletop) { 
			// look in the console to see the output from the spreadsheet
			console.log(data);
			data.forEach(function(entry){
	                    	// generates content from Google spreadsheet and appends with jquery
	                    	var org= entry['Organization'];
	                    	var descrip=entry['Description'];
	                    	var link = entry['Link'];
	                    	$('#organizations').append('<div class="small-12 large-6 large-offset-0 columns org"> <div class="small-12 large-4 columns"> <!--place logo here --> </div> <div class="small-12 large-7 columns"> <h4>'+org+'</h4> <p>'+descrip+'</p> <a href="'+link+'">'+link+'</a> </div> </div>')
	                    });
		},
		simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', goog_sheet_init)



/* 
*
*
Handles triggers for ease in transitions
API: https://github.com/terwanerik/ScrollTrigger
 *
 *
 */


document.addEventListener('DOMContentLoaded', function(){
	var trigger = new ScrollTrigger({
		offset: {
			x: 0,
			y: 300
		},
		   // once: true,
		   // addHeight: true,
		   centerHorizontal: true,
		});
}, document.body, window);


/*
*
*
Handles menu transitions , jquery
*
*
*/

var opentrue = false;
//function that creates an X to replace the menu icon, bring out navigation
function menuiconchange(element) {
	//toggles whether or not the class is there based on when it is clicked
	console.log(element);
	element.classList.toggle('change');
	if (opentrue == false) {
		$(".overlaymenu").fadeIn(50);
		opentrue = true;
		$(".bar1,.bar2,.bar3").css("background-color", "white");
	}
	else {
		$(".overlaymenu").fadeOut(50);
		opentrue = false;
		$(".bar1,.bar2,.bar3").css("background-color", "black");
	}
}
//simulates button click on link click
function navlinkchange(stuff) {
	$('.menuicon').trigger("click");
}




