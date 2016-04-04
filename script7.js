// XUL demonstration

var dateBox, dayBox, currentDay, status; // elements


// Called by window onLoad

function init() {
	dateBox = document.getElementById("date-text")
  	dayBox = document.getElementById("day-box")
  	status = document.getElementById("status")
  	setToday();
}


// Called by Clear button

function clearDate() {
	dateBox.value = ""
  	refresh()
}


// Called by Today button

function setToday() {
  	var d = new Date()
  	dateBox.value = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear()
  	refresh()
}


// Called by Date textbox

function refresh() {
	var d = dateBox.value
  	var theDate = null

  	showStatus(null)
  	if (d != "") {
    		try {
      		var a = d.split("/")
      		var theDate = new Date(a[2], a[0] - 1, a[1])
      		showStatus(theDate)
      		}
    		catch (ex) {}
    		}
  	setDay(theDate)
  	}


// Internal

function setDay(aDate) {
	if (currentDay) {
		currentDay.setAttribute("disabled", "true")
  	}
	
	if (aDate == null) {
		currentDay = null
	}
  	else {
    		var d = aDate.getDay()
    		currentDay = dayBox.firstChild
    		while (d-- > 0) {
			currentDay = currentDay.nextSibling
		}
    		currentDay.removeAttribute("disabled")
    	}
  	dateBox.focus();
}

function showStatus(aDate) {
	if (aDate == null) {
    		status.removeAttribute("warning")
    		status.setAttribute("label", "")
    	}
  	else if (aDate === false || isNaN(aDate.getTime())) {
    		status.setAttribute("warning", "true")
    		status.setAttribute("label", "Date is not valid")
    	}
  	else {
    		status.removeAttribute("warning")
    		status.setAttribute("label", aDate.toLocaleDateString())
    	}
}