

$(document).ready(function(hide){
$(".help").hide(function(){

});
});


var year1 = "";

function singleYear() {
	var numerSYr1 = document.getElementById('numerSYr1').value;
	var denSYr1 = document.getElementById('denomSYr1').value;
	var yearPercentage= document.getElementById('percentage').value;
	var fractionYr1 = numerSYr1 / denSYr1;
	var totalFraction =(fractionYr1 * 100);
	var singleYear1 = (yearPercentage / 100 * totalFraction);
	var total = Math.round(singleYear1 * 100)/100;
	var test1 = isNaN(total);

	if (test1 === true){
		singleGrade.innerHTML = "You must fill in all boxes, enter numbers and not text!";

	} else {
		 singleGrade.innerHTML = "Your total grade is = "+ total + "%.";
	}

	return singleYear;
}

	function write_numerator(){
	//year1
	var numer = document.getElementById('numeratorYear1');
	var name = document.getElementById('numerSYr1').value;


	var den = document.getElementById('denominatorYear1');
	var nam = document.getElementById('denomSYr1').value;

	numer.innerHTML = "Numerator Year one = " + name + ".";
	den.innerHTML = "Denominator Year one = " + denomYr1.value + ".";
	//year2

	var numYear2 = document.getElementById('numeratorYear2');
	var na = document.getElementById('numerYr2').value;

	var d2 = document.getElementById('denominatorYear2');
	var nam = document.getElementById('denomYr2').value;

	numYear2.innerHTML = "Numerator Year two = " + na + ".";
	d2.innerHTML = "Denominator Year two = " + denomYr2.value + ".";
	//year3

	var numYear3 = document.getElementById('numeratorYear3');
	var na3 = document.getElementById('numerYr3').value;

	var d3 = document.getElementById('denominatorYear3');
	var nam = document.getElementById('denomYr3').value;

	numYear3.innerHTML = "Numerator Year three = " + na3 + ".";
	d3.innerHTML = "Denominator Year three = " + denomYr3.value + ".";
	//year4

	var numYear4 = document.getElementById('numeratorYear4');
	var na4 = document.getElementById('numerYr4').value;

	var d4 = document.getElementById('denominatorYear4');
	var nam = document.getElementById('denomYr4').value;

	numYear4.innerHTML = "Numerator Year four = " + na4 + ".";
	d4.innerHTML = "Denominator Year four = " + denomYr4.value + ".";
	}


function scheduleA() {
	   var theSelection = document.form1.sel1.selectedIndex;

		if (theSelection === 1){
			callGradeLevel8();

		}
		else if (theSelection === 2){
			callGradeLevel7();
		}
		else if (theSelection === 3){
			callGradeLevel6();
		}

	}

	$(document).ready(function(){

	$(".resetSingle").click(function(){

	$(".singleReset").show();
	});

});

