function report(){
	
	roster = document.getElementById("consultants_general_view").getElementsByTagName("tbody")[0];
	persons = roster.getElementsByTagName("tr");

	clear();
	var container = document.createElement("table");
	container.setAttribute("id", "non-resume-persons");
	var containerBody = document.createElement("tbody");
	container.appendChild(containerBody);	
	//reporter = document.getElementById("non-resume-persons").getElementsByTagName("tbody");
	for(var index = 0; index < persons.length; index++){
		var person = persons[index];
		
		if (hasResumer(person)){
			personElement = document.createElement("tr");
			personElement.appendChild(document.createElement("td").appendChild(profileLinkOf(person)));
			containerBody.appendChild(personElement);
		}
	}
	document.body.appendChild(container);
	linkCss();
}

function getTargetElement(){
	return document.getElementById("non-resume-persons");
}

function clear(){
	var target = getTargetElement();
	if (target != null){
		target.parentNode.removeChild(target);
	}
}

function profileLinkOf(person){
	return person.getElementsByTagName("td")[0].getElementsByTagName("a")[0].cloneNode(true);
}
function nameOf(person){
	return profileLinkOf(person).innerHTML;
}

function hasResumer(person){
	return person.getElementsByTagName("td")[0].getElementsByTagName("img").length > 0;
}

function bump(){
	alert(document.title);
}

function linkCss(){
	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.type = 'text/css';
	style.href = chrome.extension.getURL('content.css');
	(document.head||document.documentElement).appendChild(style);
}

window.onload = function(){
	setTimeout(report, 15000);
	setInterval(report, 7000);
};

