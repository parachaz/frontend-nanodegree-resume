var name="Zaheer Paracha";
var role="Development Team Lead";
var skills=["Java Developer", "Team Lead", "OO Programming"];
var bio={
  "name":name,
  "role":role,
  "contacts": {
    "mobile":"9725718435",
    "email":"parachaz@gmail.com",
    "github":"https://github.com/parachaz",
    "twitter":"@zparacha",
    "loation":"Dallas"
},
  "welcomeMessage":"Experienced IT professional",
   "skills":skills,
   "bioPic":"images/me.jpg"
};

var education={
  "schools":[
      {
        "name":"UHCL",
        "location":"Houston",
        "degree":"MS",
        "major":["Computer Science","MIS"],
        "dates":"1997",
        "url":"http:/www.uhcl.edu",
        "onlineCourses":[
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
      },
      {
        "name":"DBU",
        "location":"Dallas ",
        "degree":"MBA",
        "majors":["eCommerce","MIS"],
        "dates":"2005",
        "url":"http:/www.dbu.edu",
        "onlineCourses":[
            {
              "title":"eMarketing",
              "school":"DBU BS",
              "dates":"2005",
              "url":"http://www.dbu.com/BS01"
            },
            {
              "title":"Marketing 101",
              "school":"DBU BS",
              "dates":"2005",
              "url":"http://www.dbu.com/MK03"
            }
        ]
      }
  ]

};

var work={
  "jobs":[
    {
      "employer":"AT&T",
      "title":"IT Team Lead",
      "years":"2001-Present",
      "location":"Dallas",
      "description":"Senior Java Developer"

    },
    {
      "employer":"GHG",
      "title":"Senior Software Developer",
      "years":"1997-2001",
      "location":"Houston",
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
       "images":["images/p1.jpg","images/p2.jpg"]
    },
    {
      "title":"SDD",
      "dates":"1997-2001",
       "description":"POS",
       "images":["images/p3.jpg","images/p4.jpg"]
    }
  ]
};


function displayBio(){

}
function displayEductation(){
  
}
function displayWork(){
  for (job in work.jobs){
  $('#workExperience').append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedWorkDate =  HTMLworkDates.replace("%data%", work.jobs[job].years);
  var formattedWorkLocation =  HTMLworkLocation.replace("%data%", work.jobs[job].location);
  var formattedWorkDescription =  HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedEmployer+formattedTitle+formattedWorkDate+formattedWorkLocation+ formattedWorkDescription);
    }
}
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend (formattedRole);
// $("#header").prepend (formattedName);
/*$("#main").append(work["position"]);
$("#main").append(education.name);*/