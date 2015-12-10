function scheduleA() {


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


function callGradeLevel8(){
		//Run main function

	function year1() {

	var numerYr1 = document.getElementById('numerYr1').value;
	var denYr1 = document.getElementById('denomYr1').value;
	var yearPercentage8= document.getElementById('percentage8').value;
	var fractionYr1 = numerYr1 / denYr1;
	var totalFraction =(fractionYr1 * 100);
	var year1 = (yearPercentage8 / 100 * totalFraction);

	return year1;
	}

	function year2() {

	var numerYr2 = document.getElementById('numerYr2').value;
	var denomYr2= document.getElementById('denomYr2').value;
	var yearPercentage7= document.getElementById('percentage7').value;
	var decim = ( numerYr2 / denomYr2) * 100;
	var year2 = (yearPercentage7 / 100) * decim;
	var totalYear2 = year2;

	return totalYear2;
	}

	function year3() {

	var numerYr3 = document.getElementById('numerYr3').value;
	var denomYr3 = document.getElementById('denomYr3').value;
	var yearPercentage6= document.getElementById('percentage6').value;
	var decim = (numerYr3 /denomYr3 ) * 100;
	var year3 = (yearPercentage6 / 100) * decim;
	var totalYear3 = [year3];

	return totalYear3;
	}

	function year4() {

	var numerYr4 = document.getElementById('numerYr4').value;
	var denomYr4 = document.getElementById('denomYr4').value;
	var yearPercentage5= document.getElementById('percentage5').value;
	var decim = (numerYr4 / denomYr4) * 100;
	var year4 = (yearPercentage5 / 100) * decim;
	var totalYear4 = [year4];

	return totalYear4;
	}

	var percent_year1 = year1();
	var percent_year2 = year2();
	var percent_year3 = year3();
	var percent_year4 = year4();

//round yearly result to 2 decimal places

	var total_year1 = Math.round(percent_year1 * 100)/100;
	var total_year2 = Math.round(percent_year2 * 100)/100;
	var total_year3 = Math.round(percent_year3 * 100)/100;
	var total_year4 = Math.round(percent_year4 * 100)/100;
	var total = total_year1 + total_year2 + total_year3 + total_year4;
	var total_Grade = Math.round(total * 100)/100;
	var p = isNaN(total_Grade);


	if (p === true){

		finalGrade.innerHTML = "You must fill in all boxes, enter numbers and not text!";

	} else if (total_Grade >= 70) {
		finalGrade.innerHTML = "This is a First Class Honours and your percentage is " + total_Grade + "%.";
	} else if (total_Grade >= 60) {
		finalGrade.innerHTML = "This is a Second Class Honours Grade 1 and your percentage is " + total_Grade + "%.";
	} else if (total_Grade >= 50) {
		finalGrade.innerHTML = "This is a Second Class Honours Grade 2 and your percentage is " + total_Grade + "%.";
	} else if (total_Grade >= 45) {
		finalGrade.innerHTML = "This is a Third Class Honours and your percentage is " + total_Grade + "%.";
	} else if (total_Grade >= 40) {
		finalGrade.innerHTML = "This is a Pass Grade and your percentage is " + total_Grade + "%.";
	} else if (total_Grade >= 0) {
		finalGrade.innerHTML = "This is a Fail Grade and your percentage is " + total_Grade + "%.";
	}


	$(document).ready(function(){
	$(".resetSingle").click(function(){
	$(".singleReset").show();
	});

});





}

function callGradeLevel7(){

	function year1() {

	var numerYr1 = document.getElementById('numerYr1').value;
	var denYr1 = document.getElementById('denomYr1').value;
	var yearPercentage8= document.getElementById('percentage8').value;
	var fractionYr1 = numerYr1 / denYr1;
	var totalFraction =(fractionYr1 * 100);
	var year1 = (yearPercentage8 / 100 * totalFraction);
	return year1;
	}


	function year2() {
	var numerYr2 = document.getElementById('numerYr2').value;
	var denomYr2= document.getElementById('denomYr2').value;
	var yearPercentage7= document.getElementById('percentage7').value;
	var decim = ( numerYr2 / denomYr2) * 100;
	var year2 = (yearPercentage7 / 100) * decim;
	var totalYear2 = year2;
	return totalYear2;
	}

	function year3() {
	var numerYr3 = document.getElementById('numerYr3').value;
	var denomYr3 = document.getElementById('denomYr3').value;
	var yearPercentage6= document.getElementById('percentage6').value;
	var decim = (numerYr3 /denomYr3 ) * 100;
	var year3 = (yearPercentage6 / 100) * decim;
	var totalYear3 = [year3];
	return totalYear3;
	}

	function year4() {
	var numerYr4 = document.getElementById('numerYr4').value;
	var denomYr4 = document.getElementById('denomYr4').value;
	var yearPercentage5= document.getElementById('percentage5').value;
	var decim = (numerYr4 / denomYr4) * 100;
	var year4 = (yearPercentage5 / 100) * decim;
	var totalYear4 = [year4];
	return totalYear4;
	}

	var percent_year1 = year1();
	var percent_year2 = year2();
	var percent_year3 = year3();
	var percent_year4 = year4();

	//alert(percent_year1);
	//alert(percent_year2);
	//alert(percent_year3);
	//alert(percent_year4);

	var total_year1 = Math.round(percent_year1 * 100)/100;
	var total_year2 = Math.round(percent_year2 * 100)/100;
	var total_year3 = Math.round(percent_year3 * 100)/100;
	var total_year4 = Math.round(percent_year4 * 100)/100;

	var total = total_year1 + total_year2 + total_year3 + total_year4;
	var total_Grade = Math.round(total * 100)/100;
	var p = isNaN(total_Grade);


	if (p === true){
	var theSelection = document.form1.sel1.selectedIndex;
	finalGrade.innerHTML = "You must fill in all boxes, enter numbers and not text!";

	}  else if (total_Grade >= 70) {
		finalGrade.innerHTML = "This is a Pass with Distinction and your percentage is " + total_Grade + "%.";
	} else if (total_Grade >= 60) {
		finalGrade.innerHTML = "This is a Pass with a Merit  Grade 1 and your percentage is " + total_Grade + "%.";
	} else if (total_Grade >= 50) {
		finalGrade.innerHTML = "This is a Pass with a Merit Grade 2 and your percentage is " + total_Grade + "%.";
	}  else if (total_Grade >= 40) {
		finalGrade.innerHTML = "This is a Pass Grade and your percentage is " + total_Grade + "%.";
	} else if (total_Grade >= 0) {
		finalGrade.innerHTML = "This is a Fail Grade and your percentage is " + total_Grade + "%.";
	}


	$(document).ready(function(){
	$(".resetSingle").click(function(){
	$(".singleReset").show();
	});

});

}

function callGradeLevel6(){

	function year1() {

	var numerYr1 = document.getElementById('numerYr1').value;
	var denYr1 = document.getElementById('denomYr1').value;
	var yearPercentage8= document.getElementById('percentage8').value;
	var fractionYr1 = numerYr1 / denYr1;
	var totalFraction =(fractionYr1 * 100);
	var year1 = (yearPercentage8 / 100 * totalFraction);

	return year1;
		}

	function year2() {

	var numerYr2 = document.getElementById('numerYr2').value;
	var denomYr2= document.getElementById('denomYr2').value;
	var yearPercentage7= document.getElementById('percentage7').value;
	var decim = ( numerYr2 / denomYr2) * 100;
	var year2 = (yearPercentage7 / 100) * decim;
	var totalYear2 = year2;
	return totalYear2;
	}

	function year3() {

	var numerYr3 = document.getElementById('numerYr3').value;
	var denomYr3 = document.getElementById('denomYr3').value;
	var yearPercentage6= document.getElementById('percentage6').value;
	var decim = (numerYr3 /denomYr3 ) * 100;
	var year3 = (yearPercentage6 / 100) * decim;
	var totalYear3 = [year3];
	return totalYear3;
	}

	function year4() {

	var numerYr4 = document.getElementById('numerYr4').value;
	var denomYr4 = document.getElementById('denomYr4').value;
	var yearPercentage5= document.getElementById('percentage5').value;
	var decim = (numerYr4 / denomYr4) * 100;
	var year4 = (yearPercentage5 / 100) * decim;
	var totalYear4 = [year4];

	return totalYear4;
	}

	var percent_year1 = year1();
	var percent_year2 = year2();
	var percent_year3 = year3();
	var percent_year4 = year4();


	var total_year1 = Math.round(percent_year1 * 100)/100;
	var total_year2 = Math.round(percent_year2 * 100)/100;
	var total_year3 = Math.round(percent_year3 * 100)/100;
	var total_year4 = Math.round(percent_year4 * 100)/100;

	var total = total_year1 + total_year2 + total_year3 + total_year4;
	var total_Grade = Math.round(total * 100)/100;
	var p = isNaN(total_Grade);


	if(p === true){
		var theSelection = document.form1.sel1.selectedIndex;
		finalGrade.innerHTML = "You must fill in all boxes, enter numbers and not text!";

	}  else if (total_Grade >= 70) {
		finalGrade.innerHTML = "This is a Pass with Distinction and your percentage is " + total_Grade + "%.";
	} else if (total_Grade >= 60) {
		finalGrade.innerHTML = "This is a Pass with a Merit  Grade 1 and your percentage is " + total_Grade + "%.";
	} else if (total_Grade >= 50) {
		finalGrade.innerHTML = "This is a Pass with a Merit Grade 2 and your percentage is " + total_Grade + "%.";
	}  else if (total_Grade >= 40) {
		finalGrade.innerHTML = "This is a Pass Grade and your percentage is " + total_Grade + "%.";
	} else if (total_Grade >= 0) {
		finalGrade.innerHTML = "This is a Fail Grade and your percentage is " + total_Grade + "%.";
	}

	$(document).ready(function(){
	$(".resetSingle").click(function(){
	$(".singleReset").show();
	});
});
}






