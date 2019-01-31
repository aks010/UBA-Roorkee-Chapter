var currentPage = window.location.hash.substr(1)?window.location.hash.substr(1): "home";
// alert(window.location.hash.substr(1));

var homeLoad = true;

var initiatives = {
	"awareness": {

	},
	"agriculture": {},
	"education": {},
	"employment": {},
	"health": {
		"Puranpur": [{
			"title": "Veterinary Camp",
			"html": "components/initiatives/puranh1.html"
		},
		{
			"title": "Health Camp",
			"html": "components/initiatives/puranh2.html"
		},
		{
			"title": "Adolescents Health and hygiene awareness programme",
			"html": "components/initiatives/puranh3.html"
		}]
	},
	"other": {
		"Puranpur": [{
			"title": "Participation in the Village Gram Sabha Meeting",
			"html": "components/initiatives/purano1.html"
		}]
	}
}