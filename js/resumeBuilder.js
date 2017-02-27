/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
 	name : 'Ryan Possardt',
 	role : 'Web Developer',
 	welcomeMessage : 'Hello there! I\'m Ryan Possardt!',
 	biopic : 'http://stevensegallery.com/300/300',
 	contacts : {
 		mobile : '(860)803-5385',
 		email : 'rpossardt@gmail.com',
 		github : 'possardt',
 		twitter : '@Ryan_Possardt',
 		location : 'CT, USA'
 	},
 	skills : ['sports', 'programming', 'hiking']

 };

 var work = {
 	jobs : [
 		{
 			employer : 'UConn',
 			title : 'Shop Technician',
 			dates : '01/2014 - 05/2016',
 			description : 'fixed college kids computers for free',
			location : 'Storrs, CT'
 		},
 		{
 			employer : 'Great Lakes',
 			title : 'Developer',
 			dates : '05/2016 - Present',
 			description : 'Work on IDR internal application',
			location : 'Rocky Hill, CT'
 		}
 	]
 };

 var projects = {
 	projects : [
 		{
 			title : 'Pong',
 			dates : '01/2016 - 05/2016',
 			description : 'Remade Pong in Java using Swing for CSE 2102',
 			images : [
 				'http://stevensegallery.com/g/100/100',
 				'http://stevensegallery.com/100/100'
 			]
 		}
 	]
 };

 var education = {
 	schools : [
 		{
 			name : 'UConn',
 			location : 'Storrs, CT',
 			dates : '2012 - 2016',
			degree : 'Bachelor of Science',
 			url : 'uconn.edu',
 			majors : ['MIS', 'CS']
 		}
 	],
 	onlineCourses : [
 		{
 			title : 'Front-End Web Developer',
 			school : 'Udacity',
 			dates : '01/2017 - present',
 			url : 'Udacity.com'
 		}
 	]
 };


bio.display = function () {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(formattedName);
	$('#header').prepend(formattedRole);
	
	var bioPic = HTMLbioPic.replace('%data%', this.biopic);
	var welcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);

	$('#header').append(bioPic).append(welcomeMsg);

	var mobileContact = HTMLmobile.replace('%data%', this.contacts.mobile);
	var emailContact = HTMLemail.replace('%data%', this.contacts.email);
	var twitterContact = HTMLtwitter.replace('%data%', this.contacts.twitter);
	var githubContact = HTMLgithub.replace('%data%', this.contacts.github);
	var locationContact = HTMLlocation.replace('%data%',this.contacts.location);
	$('#topContacts, #footerContacts').append(mobileContact).append(emailContact).append(twitterContact)
							.append(githubContact).append(locationContact);
							
	$('#header').append(HTMLskillsStart);
	this.skills.forEach(function(skillText){
		var skill = HTMLskills.replace('%data%', skillText);
		$('#skills').append(skill);
	});

};

education.display = function () {
	$('#education').append(HTMLschoolStart);
	for(var i = 0; i < this.schools.length; i++){
		var schoolName = HTMLschoolName.replace('%data%', this.schools[i].name).replace('#', this.schools[i].url) + 
							HTMLschoolDegree.replace('%data%', this.schools[i].degree);
		var schoolLocation = HTMLschoolLocation.replace('%data%', this.schools[i].location);
		var schoolDates = HTMLschoolDates.replace('%data%', this.schools[i].dates);
		var majors = this.schools[i].majors.join(', ');
		var schoolMajor = HTMLschoolMajor.replace('%data%', this.schools[i].majors);
		$('.education-entry:last').append(schoolName).append(schoolLocation)
									.append(schoolDates).append(schoolMajor);
	}
	$('#education').append(HTMLonlineClasses);
	$('#education').append(HTMLschoolStart);
	for(var i = 0; i < this.onlineCourses.length; i++){
		var courseTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[i].title) +
							HTMLonlineSchool.replace('%data%',this.onlineCourses[i].school);
		var courseDates = HTMLonlineDates.replace('%data%', this.onlineCourses[i].dates);
		var courseURL = HTMLonlineURL.replace('%data%', this.onlineCourses[i].url);
		$('.education-entry:last').append(courseTitle).append(courseDates).append(courseURL);
	}
};

work.display = function(){
	$('#workExperience').append(HTMLworkStart);
	for(var j = 0; j < this.jobs.length; j++){
		var jobEmployer = HTMLworkEmployer.replace('%data%', this.jobs[j].employer);
		var jobName = HTMLworkTitle.replace('%data%', this.jobs[j].title);
		var jobDates = HTMLworkDates.replace('%data%', this.jobs[j].dates);
		var jobDescription = HTMLworkDescription.replace('%data%', this.jobs[j].description);
		var jobLocation = HTMLworkLocation.replace('%data%', this.jobs[j].location);
		
		$('.work-entry:last').append(
			jobEmployer + jobName	
		).append(jobDates).append(jobDescription).append(jobLocation);
	}
};

projects.display = function () {
	$('#projects').append(HTMLprojectStart);
	for(var i = 0; i < this.projects.length; i++){
		var projectTitle = HTMLprojectTitle.replace('%data%', this.projects[i].title);
		var projectDates = HTMLprojectDates.replace('%data%', this.projects[i].dates);
		var projectDescription = HTMLprojectDescription.replace('%data%', this.projects[i].description);
		
		$('.project-entry:last').append(projectTitle).append(projectDates).append(projectDescription);
		this.projects[i].images.forEach(function(image){
			var projectImage = HTMLprojectImage.replace('%data%', image);
			$('.project-entry:last').append(projectImage);
		});
							
	}
};

work.display();
projects.display();
bio.display();
education.display();

$('#mapDiv').append(googleMap);