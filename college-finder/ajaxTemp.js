//complete search string:

// https://api.data.gov/ed/collegescorecard/v1/schools?school.name=university%20of%20southern%20california&_fields=school.name,school.alias,school.city,school.state,school.zip,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state,latest.aid.loan_principal,latest.aid.median_debt.completers.overall,school.ownership&api_key=tsrb2IQI7sNv5A1HSBCH6lshc45rsbuPpDxsezrl

//searching for a particular school (in this case University of Southern California):

// school.name=university%20of%20southern%20california

// _fields being searched (this is the data we will be collecting with each search):

// school.name,school.alias,school.city,school.state,school.zip,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state,latest.aid.loan_principal,latest.aid.median_debt.completers.overall,school.ownership

//api-key=tsrb2IQI7sNv5A1HSBCH6lshc45rsbuPpDxsezrl

//returns the following data:

// "results": [
//     {
//         "latest.cost.attendance.academic_year": 67064,
//         "latest.cost.tuition.out_of_state": 52283,
//         "latest.cost.tuition.in_state": 52283,
//         "school.name": "University of Southern California",
//         "latest.student.size": 18557,
//         "school.city": "Los Angeles",
//         "school.ownership": 2,
//         "school.zip": "90089",
//         "latest.aid.loan_principal": 21250,
//         "latest.admissions.sat_scores.average.overall": 1395,
//         "latest.admissions.admission_rate.overall": 0.1662,
//         "school.alias": "USC",
//         "school.state": "CA",
//         "latest.aid.median_debt.completers.overall": 22120
//     },

//either search for alias in place of school name if inputValue < 5 characters, or run a second query for alias if name search yields 0 results. 
//For instance if you search "USC" with "school.name" you will get zero results. Correct result will display if you use "school.alias"
var collegeInput = $("searchInput").val().split(' ').join('%20').trim();
var fullCollegeString = "school.name=" + collegeInput;

var aliasInput = $("stateInput").val();
var aliasString = "school.alias=" + aliasInput;
//-------------------------------------------------------------------------------------------------------------------------------------------------

//these values below can be tacked on as needed. Note the "&" that will need to separate each value
var stateInput = $("stateInput").val();
var stateString = "&school.state=" + stateInput;

var publicOrPrivate = $("publicOrPrivate").attr("data-pub-priv"); //value 1 for public, 3 for private
var publicOrPrivateString = "&school.ownership=" + publicOrPrivate;

var bachelorsInput = $("degreeInput").attr("data-degreeQuery"); //grab html element "data-degreeQuery" to use as a search string. Will look like "latest.academics.program.bachelors.computer"
var bachelorsString = "&" + bachelorsInput + "=1";

var satScoreInput = $("satInput").val().trim();
var satString = "&" + "latest.admissions.sat_scores.average.overall__range=.." + satScoreInput; //will search for schools with a max average SAT score of the value grabbed from user input

//----------------------------------------------------------------------------------------------------------------------------------

//all the values we are searching for
var queryFields = "&_fields=school.name,school.alias,school.city,school.state,school.zip,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state,latest.aid.loan_principal,latest.aid.median_debt.completers.overall,school.ownership";

//the api key
var api = "&api_key=tsrb2IQI7sNv5A1HSBCH6lshc45rsbuPpDxsezrl";

//the "final" query string:
var queryString = "https://api.data.gov/ed/collegescorecard/v1/schools?" + fullCollegeString + queryFields + api;