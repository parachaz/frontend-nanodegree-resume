var name="Zaheer Paracha";
var role="Development Team Lead";
var skills=["Java Developer", "Team Lead", "OO Programming"];
var bio={
  "name":name,
  "role":role,
  "contacts": {
    "mobile":"972-571-8435",
    "email":"parachaz@gmail.com",
    "github":"https://github.com/parachaz",
    "twitter":"zparacha",
    "location":"Dallas"
  },
  "welcomeMessage":"Experienced IT professional",
  "skills":skills,
  "bioPic":"images/fry.jpg"
};

var education={
  "schools":[
  {
    "name":"UHCL",
    "location":"Houston",
    "degree":"MS",
    "majors":["Computer Science","MIS"],
    "dates":"1997",
    "url":"http:/www.uhcl.edu"
  },
  {
    "name":"DBU",
    "location":"Dallas ",
    "degree":"MBA",
    "majors":["eCommerce","MIS"],
    "dates":"2005",
    "url":"http:/www.dbu.edu"
  }
  ],
  onlineCourses:[
  {
    "title":"Operating System",
    "school":"UHCL CS",
    "dates":"1996",
    "url":"http://www.uhcl.com/CS01"
  },
  {
    "title":"Java Programming",
    "school":"UHCL CS",
    "dates":"1996",
    "url":"http://www.uhcl.com/CS03"
  }
  ]

};

var work={
  "jobs":[
  {
    "employer":"AT&T",
    "title":"Development Team Lead",
    "location":"Dallas",
    "dates":"2001-Present",
    "description":"Senior Java Developer"
  },
  {
    "employer":"GHG",
    "title":"Senior Software Developer",
    "location":"Houston",
    "dates":"1997-2001",
    "description":"Senior Software Developer"
  }
  ]
};

var projects={
  "projects":[
  {
    "title":"Yoda",
    "dates":"2001-Present",
    "description":"Supply Chain",
    "images":["images/197x148.gif","images/197x148.gif"]
  },
  {
    "title":"SDD",
    "dates":"1997-2001",
    "description":"POS",
    "images":["images/197x148.gif","images/197x148.gif"]
  }
  ]
};


bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile= HTMLmobile.replace("%data%", bio.contacts.mobile);
  var emailURL = '<a class="navbar" href="mailto:'
  + bio.contacts.email 
  +'">'+bio.contacts.email+'</a>';
  var formattedEmail = HTMLemail.replace("%data%", emailURL);
  var githubURL = '<a class="navbar" href="'
  + bio.contacts.github 
  +'" target="_blank">'+bio.contacts.github+'</a>';
  var formattedGithub = HTMLgithub.replace("%data%",githubURL);
  var twitterURL = '<a class="navbar" href="http://www.twitter.com/'
  + bio.contacts.twitter 
  +'" target="_blank">@'+bio.contacts.twitter+'</a>';
  var  formattedTwitter = HTMLtwitter.replace("%data%", twitterURL);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var profilePhoto = HTMLbioPic.replace("%data%", bio.bioPic);
  var welcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
  var skillsAtAGlance = "";
  
  $("#header").prepend (profilePhoto);
  $("#header").prepend (formattedRole);
  $("#header").prepend (formattedName);
  $("#topContacts").append (formattedMobile);
  $("#topContacts").append (formattedEmail);
  $("#topContacts").append (formattedTwitter);
  $("#topContacts").append (formattedGithub);
  $("#topContacts").append (formattedLocation);
  $("#header").append(welcomeMessage);


  $("#footerContacts").append (formattedMobile);
  $("#footerContacts").append (formattedEmail);
  $("#footerContacts").append (formattedTwitter);
  $("#footerContacts").append (formattedGithub);
  $("#footerContacts").append (formattedLocation);
  $("#footerContacts").append (HTMLcontactBackToTop);
  if(bio.skills.length>0){
    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills){
      skillsAtAGlance = HTMLskills.replace("%data%",bio.skills[skill]);
      $("#skills").append(skillsAtAGlance);
    }

  }
}

education.display = function display(){
  for (school in education.schools){
    $('#education').append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolDate =  HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedSchoolLocation =  HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolMajor =  HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree+formattedSchoolDate
      +formattedSchoolLocation+ formattedSchoolMajor);
  }
  if(education.onlineCourses.length >0){
    $('#education').append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses){
      $('#education').append(HTMLschoolStart);
      $lastEducationEntry = $('.education-entry:last');
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
      var formattedOnlinelDate =  HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
      var formattedOnlineURL =  HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
      $lastEducationEntry.append(formattedOnlineTitle+formattedOnlineSchool+formattedOnlinelDate
       +formattedOnlineURL);
    }
  }
  $('#education').append(HTMLeducationBackToTop);
}

work.display= function display(){
  for (job in work.jobs){
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedWorkDate =  HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedWorkLocation =  HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedWorkDescription =  HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployer+formattedTitle+formattedWorkDate
      +formattedWorkLocation+ formattedWorkDescription);
  }
  $('#workExperience').append(HTMLworkBackToTop);
}
projects.display = function (){
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle  = HTMLprojectTitle.replace("%data%",
      projects.projects[project].title);   
    $(".project-entry:last").append(formattedTitle );
    var formattedDates  = HTMLprojectDates.replace("%data%",
      projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates );
    var formattedDescription  = HTMLprojectDescription.replace("%data%",
      projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    if(projects.projects[project].images.length>0){
      for(image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%",
          projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
  $('#projects').append(HTMLprojectsBackToTop);

}
function displayNavBar(){
  var navigationBar = $("#navList");
  navigationBar.append("<li><a class='navLink' id='workExpLink' href='#workExperience'>Work Experience</a></li>");
  navigationBar.append("<li><a class='navLink' id='projectsExpLink' href='#projects'>Projects</a></li>");
  navigationBar.append("<li><a class='navLink' id='educationExpLink' href='#education'>Education</a></li>");
  navigationBar.append("<li><a class='navLink' id='contactExpLink' href='#contact'>Contact</a></li>");
}

bio.display();
displayNavBar();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);

$(".navLink").click(function (event) { 
  var $target = $(event.target);
  var $id = $target.attr( 'id' )
  $id = '#' +$id.substring(0,$id.indexOf('ExpLink'));
  $id+='BackToTop';
  $($id).show();
});
$('.backToTop').click(function(){
  $(this).hide();
});
