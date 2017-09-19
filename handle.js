/**
  *Created by Dae Kyung Kim
  *09/18/2017
  */
 var $aboutMe = $(".aboutMe");
 var $edu = $(".education");
 var $awd = $(".awards");
 var $exp = $(".experience");
 var $lead = $(".leadership");
 var expCount = 0;
 var eduCount = 0;
 var awdCount = 0;
 var leadCount = 0;
 var eduImgSave = 0;

/*function:changeContent
*Param: slide - which slide to go to, category - award/leadership/experience? */
function changeContent(slide, category){
	if(category == 'award'){
		if(slide == 0){
			$awd.css('background-image', 'url(' + "pictures/josiePearl.jpg" + ')');
			$("#firstAwdDot").css('background-color', '#525159');
			$("#secondAwdDot").css('background-color', '#bbb');
		}
		else{
			$awd.css('background-image', 'url(' + "pictures/honor.jpg" + ')');
			$("#secondAwdDot").css('background-color', '#525159');
			$("#firstAwdDot").css('background-color', '#bbb');		
		}
	}
	else if(category == "lead"){
		if(slide == 0){
			$("#leadPic").attr("src", "pictures/CSI.jpg");
			$(".leadIntro h1").text("Peer Educator");
			$("#lead1").text("Administer seminars on the topics of professionalism, communication, and leadership.");
			$("#lead2").text("Facilitate engaging and applicable workshops for students to practice and gain soft skills for work environment.");
			$("#lead3").text("Manage marketing strategies and organization for the promotion of 10 workshops.");
			$("#firstLeadDot").css('background-color', '#525159');
			$("#secondLeadDot").css('background-color', '#bbb');
		}
		else{
			$("#leadPic").attr("src", "pictures/SCF.jpg");
			$(".leadIntro h1").text("Coordinator for Seashore Campus Fellowship	");
			$("#lead1").text("Organize the structure in how we conducted weekly fellowships (Bible studies, prayer nights, etc)");
			$("#lead2").text("Coordinate the scheduling for Bible study leaders to administer weekly bible study.");
			$("#lead3").text("");
			$("#secondLeadDot").css('background-color', '#525159');
			$("#firstLeadDot").css('background-color', '#bbb');			
		}
	}
	else{
		if(slide == 0){
			//show only one picture
			$("#expPic").show();
			$("#expPic2").hide();
			$(".expIntro h1").text("VoToAn");
			$(".expIntro p").text("Developed a website with the goal of aiding visual learners to see their voice(Vo) come alive to(To) animation(An).	Integrated the website using Google voice recognition and translation API to create images to perform actions and depict emotions following the user’s voice commands.");
			$("#firstExpDot").css('background-color', '#525159');
			$("#secondExpDot").css('background-color', '#bbb');


		}
		else{
			$("#expPic2").show();
			$("#expPic").hide();
			$(".expIntro h1").text("Riddle Island");
			$(".expIntro p").text("Riddle Island Built a survival riddle app where player must solve riddles to escape the island. Effectively stored and managed multiple data to continue the last adventure. Designed alternating gameplay modes to enliven user experience. ");
			$("#secondExpDot").css('background-color', '#525159');
			$("#firstExpDot").css('background-color', '#bbb');			
		}
	}
}
/*function: hideEverything
*hide all the divs whenever user traverses to another "page" in the website*/
function hideEverything(){
	$aboutMe.hide();
	$edu.hide();
	$awd.hide();
	$exp.hide(); 
	$lead.hide();
}
/*function: aboutMe
*only show the main page div*/
function aboutMe(){
	hideEverything();
	$aboutMe.show();
}
/*function: education
*show education page*/
function education(){
	hideEverything();
	$edu.show();
	if(eduCount == 0){
		$edu.css("animation", "fadein 1s");
		eduCount++;
	}
	else{
		$edu.css("animation", "");

	}
}
/*function: experience
*show experience page*/
function experience(){
	hideEverything();
	$exp.show();
	if(expCount == 0){
		$exp.css("animation", "fadein 1s");
		expCount++;
	}
	else{
		$exp.css("animation", "");

	}
}
/*function: leadership
*show leadership page*/
function leadership(){
	hideEverything();
	$lead.show();
	if(leadCount == 0){
		$lead.css("animation", "fadein 1s");
		leadCount++;
	}
	else{
		$lead.css("animation", "");
	}
}
/*function: awards
*show awards page*/
function awards(){
	hideEverything();
	$awd.show();
	if(awdCount == 0){
		$awd.css("animation", "fadein 1s");
		awdCount++;
	}
	else{
		$awd.css("animation", "");

	}
}