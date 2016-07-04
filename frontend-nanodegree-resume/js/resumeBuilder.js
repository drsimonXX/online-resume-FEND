/*
This is empty on purpose! Your code to build the resume will go here.
 */
 

 
 var myBio = {
	 "name": "Danielle R. Simon",
	 "role": "Front-End Web Developer",
	 "contacts":{
		"mobile": "901-555-5555",
		"email": "drsimon@gmail.com",
		"github": "drsimonXX",
		"location": "Memphis, TN"
	 },
	 "url": "Picture URL: none",
	 "welcome": "Junior web developer with front-end and back-end skills. Experienced in creating beautiful, interactive, multi-functional and responsive sites with simplistic layouts for the best user experience. Committed to continuous learning and researching solutions to resolve problems.",
	 "skills": ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery", "Java"]
 };
 
 myBio.work={
	 "position": "Current Position: Night Auditor",
	 "employer": "Current Employer: Best Western Plus",
	 "years": "2015-Present",
	 "city": "City: Olive Branch, MS",
 };
 myBio.education={
	 "school": "School: Emory University",
	 "years": "Years Attended: 2000-2003",
	 "city": "City: Atlanta, GA"
 };
 
 
 /*
 JSON--in order to be valid in jsonlint, must remove the variable and end semicolon
 */
 var education = {
	 "schools": [
	 {
		"name": "University of Michigan",
		"city": "Ann Arbor, MI",
		"degree": "JD",
		"major": "Law",
		"date": "2008"
	 },
	 {
		 "name": "Emory University",
		 "city": "Atlanta, GA",
		 "degree": "BA",
		 "major": "Psychology",
		 "date": "2003"
	 }
	]
 }
 
 var online = {
	 "schools": [
	 {
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	 },
	 {
		"title": "The Complete Web Developer Course 1.0",
		"school": "Udemy",
		"dates": "2015",
		"url": "https://www.udemy.com/complete-web-developer-course/learn/v4/overview"
	 },
	 {
		"title": "Java Tutorial for Complete Beginners",
		"school": "Udemy",
		"dates": "2014",
		"url": "https://www.udemy.com/java-tutorial/learn/v4/overview"
	 }
	]
 }
 
 var employment = {
	 "work": [
	 {
	 "position": "Night Auditor",
	 "employer": "Best Western Plus",
	 "years": "2015-Present",
	 "city": "Olive Branch, MS",
	 "description": "-Provide front office services such as guest check-in, check-out, payment processing and efficient complaint resolution.<br /> -Identify and correct accounting issues while managing the WinPM system used for all guest records."
	},
	{
	 "position": "Contract IT Technician",
	 "employer": "Self-Employed",
	 "years": "2011-Present",
	 "city": "Memphis, TN",
	 "description": "-Diagnosed and resolved hardware and software issues for various clients and companies at a success rate of over 96%.<br />-Installed fully-functioning hardware and software on over 300 PC and Mac systems with turnaround time averaging under 48 hours."
	 },
	 {
	  "position": "Night Auditor",
	  "employer": "Clarion Hotel",
	  "years": "2009-2011",
	  "city": "Memphis, TN",
	  "description": "-Rendered excellent guest service consistently, earning a performance-based raise.<br />-Identified and promptly corrected errors in the reservation system and financial data on a nightly basis.<br />-Provided successful night audit training to new employees on 5 occasions.<br />-Avoided major service delays by quickly resolving complications with hotel computers, printers and networks." 
	 }
	 
	]
 };
 
 var formattedName = HTMLheaderName.replace("%data%", myBio.name);
 var formattedJob = HTMLheaderRole.replace("%data%", myBio.role);
 var formattedNameRole = (formattedName + formattedJob);
 var formattedWelcome = HTMLwelcomeMsg.replace("%data%", myBio.welcome);
 
  /* top and footer contacts */
 var formattedContactInfo = [];
 formattedContactInfo.push(HTMLmobile.replace("%data%", myBio.contacts.mobile));
 formattedContactInfo.push(HTMLemail.replace("%data%", myBio.contacts.email));
 formattedContactInfo.push(HTMLgithub.replace("%data%", myBio.contacts.github));
 formattedContactInfo.push(HTMLlocation.replace("%data%", myBio.contacts.location));
 
  $("#header").prepend(formattedNameRole);
  $("#header").append(formattedWelcome);
 
 /* for loop */
 
 if(myBio.skills.length > 0) {
	 $("#header").append(HTMLskillsStart);
	for(var i=0; i<8; i++){
		var formattedSkill = HTMLskills.replace("%data%", myBio.skills[i]);
		$("#skills").append(formattedSkill);
	}
 }
 
 
 for (info in formattedContactInfo) {
	 $("#topContacts").append(formattedContactInfo[info]);
	 $("#footerContacts").append(formattedContactInfo[info]);
 }
 

function displayWork() {
for (job in employment.work) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", employment.work[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", employment.work[job].position);
	
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedYears = HTMLworkDates.replace("%data%", employment.work[job].years);
	$(".work-entry:last").append(formattedYears);
	var formattedCity = HTMLworkLocation.replace("%data%", employment.work[job].city);
	$(".work-entry:last").append(formattedCity);
	var formattedDescription = HTMLworkDescription.replace("%data%", employment.work[job].description);
	$(".work-entry:last").append(formattedDescription);
	
	
}
}

displayWork();

function displayEducation() {
for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	
	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedNameDegree = formattedSchoolName + formattedDegree;
	$(".education-entry:last").append(formattedNameDegree);
	
	var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
	$(".education-entry:last").append(formattedSchoolDate);
	
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(formattedMajor);
	
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
	$(".education-entry:last").append(formattedLocation);
}
	$("#education").append(HTMLonlineClasses);
	
	for (internet in online.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", online.schools[internet].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", online.schools[internet].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
	
		var formattedDate = HTMLonlineDates.replace("%data%", online.schools[internet].dates);
		$(".education-entry:last").append(formattedDate);
		var formattedURL = HTMLonlineURL.replace("%data%", online.schools[internet].url);
		$(".education-entry:last").append(formattedURL);
	}
}

displayEducation();

$("#mapDiv").append(googleMap);


var projects = {
	 "projects": [
	 {
		"title": "Portfolio",
		"date": "2016",
		"description": "-Created a responsive portfolio that features projects built with HTML5, CSS3, PHP, MySQL, Bootstrap and Java.<br />-Optimized portfolio for all browsers and mobile devices using Bootstrap, media queries and vendor prefixes when necessary."
	 },
	 {
		"title": "Ren Wants Riches",
		"date": "2015",
		"description": "-Multi-page, responsive personal site built with Bootstrap, MySQL and PHP.<br />-Developed fully-functioning search engine and comment sections to aid content customization and user interactivity.<br />-Customized layout similar to a blog site, including brief article content previews for users."
	 },
	 {
		"title": "Pacific Trails Resort",
		"date": "2014",
		"description": "-Responsive HTML and CSS site built to showcase and attract visitors to Pacific Trails Resort.<br />-Included a reservations form in JavaScript to allow interested parties to book a reservation through the site.<br />-Limited browser compatibility issues in Internet Explorer with spinner menu, allowing reservations form to accept typed-in number inputs."
	 },
	 {
		"title": "OnSale",
		"date": "2014",
		"description": "-Built simple interactive cost-calculating program using object-oriented programming in Java with Java Swing.<br />-Swing GUI allows users in locations where the sales tax is 9.25% to enter in the original price and the sales discount and receive an exact total price."
	 }
	]
 }
 
function displayProjects() {
for (p in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	
	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
	$(".project-entry:last").append(formattedProjectTitle);
	var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[p].date);
	$(".project-entry:last").append(formattedProjectDate);
	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
	$(".project-entry:last").append(formattedProjectDescription);
}
}

displayProjects();