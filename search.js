var mainSearch = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" 
var mainSearchTag = "&interval=15min&outputsize=compact&apikey=SVQQFVAXS04D4RUG"

function searchCallBack(response) {
	var jsonObj = JSON.parse(response);
	console.log(jsonObj);
}

var a = document.getElementById('newsearch');
a.addEventListener('submit',function(e) {
    e.preventDefault();
    var b = document.getElementById('searchtextinput').value.toUpperCase();
    var result = httpGetAsync(mainSearch+b+mainSearchTag, searchCallBack);

});

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
