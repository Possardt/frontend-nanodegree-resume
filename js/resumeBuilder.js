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
 	skills : ['sports', 'programming', 'hiking'];

 };

 var work = {
 	jobs : [
 		{
 			employer : 'UConn',
 			title : 'Shop Technician',
 			dates : '01/2014 - 05/2016',
 			description : 'fixed college kids computers for free'
 		}
 	]
 };

 var projects = {
 	projects : [
 		{
 			title : 'Pong'.
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
 			majors : ['MIS']
 		}
 	]
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
