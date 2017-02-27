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
 			description : 'fixed college kids computers for free'
 		},
 		{
 			employer : 'Great Lakes',
 			title : 'Developer',
 			dates : '05/2016 - Present',
 			description : 'Work on IDR internal application'
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
 			degreeDates : '2012 - 2016',
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
 var formattedName = HTMLheaderName.replace('%data%', bio.name);
 var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

 $('#header').prepend(formattedName);
 $('#header').prepend(formattedRole);

bio.display = function () {
	var bioPic = HTMLbioPic.replace('%data%', this.biopic);
	var welcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);

	$('#header').append(bioPic).append(welcomeMsg);

	var mobileContact = HTMLmobile.replace('%data%', this.contacts.mobile);
	var emailContact = HTMLemail.replace('%data%', this.contacts.email);
	var twitterContact = HTMLtwitter.replace('%data%', this.contacts.twitter);
	var githubContact = HTMLgithub.replace('%data%', this.contacts.github);
	var locationContact = HTMLlocation.replace('%data%',this.contacts.location);
	$('#topContacts').append(mobileContact).append(emailContact).append(twitterContact)
							.append(githubContact).append(locationContact);

};

education.display = function () {
	$('#education').append(HTMLschoolStart);
	for(var i = 0; i < this.schools.length; i++){
		var schoolName = HTMLschoolName.replace('%data%', this.schools[i].name) + 
							HTMLschoolDegree.replace('%data%', 'Bachelor of Science');
		var schoolLocation = HTMLschoolLocation.replace('%data%', this.schools[i].location);
		var schoolDates = HTMLschoolDates.replace('%data%', this.schools[i].degreeDates);
		var majors = this.schools[i].majors.join(', ');
		var schoolMajor = HTMLschoolMajor.replace('%data%', this.schools[i].majors);
		$('.education-entry:last').append(schoolName).append(schoolLocation)
									.append(schoolDates).append(schoolMajor);
	}
	$('.education-entry:last').append(HTMLonlineClasses);
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
	for(var i = 0; i < this.jobs.length; i++){
		var jobEmployer = HTMLworkEmployer.replace('%data%', this.jobs[i].employer);
		var jobName = HTMLworkTitle.replace('%data%', this.jobs[i].title);
		var jobDates = HTMLworkDates.replace('%data%', this.jobs[i].dates);
		var jobDescription = HTMLworkDescription.replace('%data%', this.jobs[i].description);

		$('.work-entry:last').append(
			jobEmployer + jobName	
		).append(jobDates).append(jobDescription);
	}
};

projects.display = function () {
	$('#projects').append(HTMLprojectStart);
	for(var i = 0; i < this.projects.length; i++){
		var projectTitle = HTMLprojectTitle.replace('%data%', this.projects[i].title);
		var projectDates = HTMLprojectDates.replace('%data%', this.projects[i].dates);
		var projectDescription = HTMLprojectDescription.replace('%data%', this.projects[i].description);
		var projectImage = HTMLprojectImage.replace('%data%', this.projects[i].images[0]);
		$('.project-entry:last').append(projectTitle).append(projectDates).append(projectDescription)
							.append(projectImage);
	}
};

work.display();
projects.display();
bio.display();
education.display();

$('#mapDiv').append(googleMap);