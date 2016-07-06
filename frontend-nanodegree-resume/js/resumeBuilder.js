
 var bio = {
	 "name": "Danielle R. Simon",
	 "role": "Front-End Web Developer",
	 "contacts":{
		"mobile": "901-555-5555",
		"email": "drsimon@gmail.com",
		"github": "drsimonXX",
		"location": "Memphis, TN"
	},
	 "biopic": "images/biopic.jpg",
	 "welcomeMessage": "Junior web developer with front-end and back-end skills. Experienced in creating beautiful, interactive, multi-functional and responsive sites with simplistic layouts for the best user experience. Committed to continuous learning and researching solutions to resolve problems.",
	 "skills": ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery", "Java"]
 };
 
 /*
 JSON--in order to be valid in jsonlint, must remove the variable and end semicolon
 */
 var education = {
	 "schools": [
	 {
		"name": "University of Michigan",
		"location": "Ann Arbor, MI",
		"degree": "JD",
		"majors": "Law",
		"dates": "2008"
	 },
	 {
		 "name": "Emory University",
		 "location": "Atlanta, GA",
		 "degree": "BA",
		 "majors": "Psychology",
		 "dates": "2003"
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
 
 var work = {
	 "jobs": [
	 {
	 "title": "Night Auditor",
	 "employer": "Best Western Plus",
	 "dates": "2015-Present",
	 "location": "Olive Branch, MS",
	 "description": "-Provide front office services such as guest check-in, check-out, payment processing and efficient complaint resolution.<br /> -Identify and correct accounting issues while managing the WinPM system used for all guest records."
	},
	{
	 "title": "Contract IT Technician",
	 "employer": "Self-Employed",
	 "dates": "2011-Present",
	 "location": "Memphis, TN",
	 "description": "-Diagnosed and resolved hardware and software issues for various clients and companies at a success rate of over 96%.<br />-Installed fully-functioning hardware and software on over 300 PC and Mac systems with turnaround time averaging under 48 hours."
	 },
	 {
	  "title": "Night Auditor",
	  "employer": "Clarion Hotel",
	  "dates": "2009-2011",
	  "location": "Memphis, TN",
	  "description": "-Rendered excellent guest service consistently, earning a performance-based raise.<br />-Identified and promptly corrected errors in the reservation system and financial data on a nightly basis.<br />-Provided successful night audit training to new employees on 5 occasions.<br />-Avoided major service delays by quickly resolving complications with hotel computers, printers and networks." 
	 }
	 
	]
 };
 
 
 function displayBio() {
 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedJob = HTMLheaderRole.replace("%data%", bio.role);
 var formattedNameRole = (formattedName + formattedJob);
 var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
 
  /* top and footer contacts */
 var formattedContactInfo = [];
 formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
 formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
 formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
 formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
 
  $("#header").prepend(formattedNameRole);
  $("#header").append(formattedPic);
  $("#header").append(formattedWelcome);
 
 /* for loop */
 
 if(bio.skills.length > 0) {
	 $("#header").append(HTMLskillsStart);
	for(var i=0; i<8; i++){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
 }
 
	for (info in formattedContactInfo) {
		$("#topContacts").append(formattedContactInfo[info]);
		$("#footerContacts").append(formattedContactInfo[info]);
	} 
}
 
displayBio();

function displayWork() {
/*for (job in work.jobs)*/ work.jobs.forEach(function(job) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", /*work.jobs[job]*/job.employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", /*work.jobs[job]*/job.title);
	
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedYears = HTMLworkDates.replace("%data%", /*work.jobs[job]*/job.dates);
	$(".work-entry:last").append(formattedYears);
	var formattedCity = HTMLworkLocation.replace("%data%", /*work.jobs[job]*/job.location);
	$(".work-entry:last").append(formattedCity);
	var formattedDescription = HTMLworkDescription.replace("%data%", /*work.jobs[job]*/job.description);
	$(".work-entry:last").append(formattedDescription);
	
	
});
}

displayWork();

function displayEducation() {
/*for (school in education.schools)*/ education.schools.forEach(function(school) {
	$("#education").append(HTMLschoolStart);
	
	var formattedSchoolName = HTMLschoolName.replace("%data%", /*education.schools[school]*/school.name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", /*education.schools[school]*/school.degree);
	var formattedNameDegree = formattedSchoolName + formattedDegree;
	$(".education-entry:last").append(formattedNameDegree);
	
	var formattedSchoolDate = HTMLschoolDates.replace("%data%", /*education.schools[school]*/school.dates);
	$(".education-entry:last").append(formattedSchoolDate);
	
	var formattedMajor = HTMLschoolMajor.replace("%data%", /*education.schools[school]*/school.majors);
	$(".education-entry:last").append(formattedMajor);
	
	var formattedLocation = HTMLschoolLocation.replace("%data%", /*education.schools[school]*/school.location);
	$(".education-entry:last").append(formattedLocation);
});
	$("#education").append(HTMLonlineClasses);
	
	/*for (internet in online.schools)*/ online.schools.forEach(function(internet) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", internet.title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", internet.school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
	
		var formattedDate = HTMLonlineDates.replace("%data%", internet.dates);
		$(".education-entry:last").append(formattedDate);
		var formattedURL = HTMLonlineURL.replace("%data%", internet.url);
		$(".education-entry:last").append(formattedURL);
	});
}

displayEducation();

$("#mapDiv").append(googleMap);


var projects = {
	 "projects": [
	 {
		"title": "Portfolio",
		"dates": "2016",
		"description": "-Created a responsive portfolio that features projects built with HTML5, CSS3, PHP, MySQL, Bootstrap and Java.<br />-Optimized portfolio for all browsers and mobile devices using Bootstrap, media queries and vendor prefixes when necessary.",
		"images": ["images/portfolio_site_555w.jpg"]
	 },
	 {
		"title": "Ren Wants Riches",
		"dates": "2015",
		"description": "-Multi-page, responsive personal site built with Bootstrap, MySQL and PHP.<br />-Developed fully-functioning search engine and comment sections to aid content customization and user interactivity.<br />-Customized layout similar to a blog site, including brief article content previews for users.",
		"images": ["images/ren_site_555w.jpg"]
	 },
	 {
		"title": "Pacific Trails Resort",
		"dates": "2014",
		"description": "-Responsive HTML and CSS site built to showcase and attract visitors to Pacific Trails Resort.<br />-Included a reservations form in JavaScript to allow interested parties to book a reservation through the site.<br />-Limited browser compatibility issues in Internet Explorer with spinner menu, allowing reservations form to accept typed-in number inputs.",
		"images": ["images/pacific_site_555w.jpg"]
	 },
	 {
		"title": "OnSale",
		"dates": "2014",
		"description": "-Built simple interactive cost-calculating program using object-oriented programming in Java with Java Swing.<br />-Swing GUI allows users in locations where the sales tax is 9.25% to enter in the original price and the sales discount and receive an exact total price.",
		"images": ["images/onsale_555w.jpg"]
	 }
	]
 }
 
function displayProjects() {
/*for (p in projects.projects)*/ projects.projects.forEach(function(p) {
	$("#projects").append(HTMLprojectStart);
	
	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", p.title);
	$(".project-entry:last").append(formattedProjectTitle);
	var formattedProjectDate = HTMLprojectDates.replace("%data%", p.dates);
	$(".project-entry:last").append(formattedProjectDate);
	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", p.description);
	$(".project-entry:last").append(formattedProjectDescription);
	var formattedProjectImage = HTMLprojectImage.replace("%data%", p.images);
	$(".project-entry:last").append(formattedProjectImage); 
	
	/*if(projects.projects.images.length > 0) {
		$("#projects").append(HTMLprojectStart);
		projects.projects.images.forEach(function(p){
			var formattedProjectImage = HTMLprojectImage.replace("%data%", p.images);
			$(".project-entry:last").append(formattedProjectImage);
	 });
 } */
});

}

displayProjects();