var currentPage = window.location.hash.substr(1)?window.location.hash.substr(1): "home";
// alert(window.location.hash.substr(1));

var homeLoad = true;

var initiatives = {
	"Beladi Salhapur": [
		{
			"title": "iNSPIRE",
			"html": "components/initiatives/beladi/beladi1.html"
		},
		{
			"title": "Scholarship",
			"html": "components/initiatives/beladi/beladi2.html"
		},
		{
			"title": "Science Exhibition",
			"html": "components/initiatives/beladi/beladi3.html"
		},
		{
			"title": "Self Defense Camp",
			"html": "components/initiatives/beladi/beladi4.html"
		},
		{
			"title": "Cycle Donation",
			"html": "components/initiatives/beladi/beladi5.html"
		},
	],
	"Chandpur": [
		{
			"title": "School Adornment",
			"html": "components/initiatives/chandpur/chandpur1.html"
		},
		{
			"title": "Aromatic Plant Cultivation",
			"html": "components/initiatives/chandpur/chandpur2.html"
		},
		{
			"title": "Personality Development Programme",
			"html": "components/initiatives/chandpur/chandpur3.html"
		},
		{
			"title": "Information Communication Technology",
			"html": "components/initiatives/chandpur/chandpur4.html"
		},
		{
			"title": "Finnancial Literacy Camp",
			"html": "components/initiatives/chandpur/chandpur5.html"
		},
		{
			"title": "Sanitary Pad Distribution Chain",
			"html": "components/initiatives/chandpur/chandpur6.html"
		},
	],
	"Charbba": [
		{
			"title": "School Adornment",
			"html": "components/initiatives/charbba/charbba1.html"
		},
		{
			"title": "Indian State Culture",
			"html": "components/initiatives/charbba/charbba2.html"
		},
		{
			"title": "First Aid Distribution",
			"html": "components/initiatives/charbba/charbba3.html"
		},
		{
			"title": "Agricultural Survey",
			"html": "components/initiatives/charbba/charbba4.html"
		},
		{
			"title": "Cycle Donation",
			"html": "components/initiatives/charbba/charbba5.html"
		},
		{
			"title": "Information Communication Technology",
			"html": "components/initiatives/charbba/charbba6.html"
		},
		{
			"title": "Best Out of Waste",
			"html": "components/initiatives/charbba/charbba7.html"
		},

	],
	"Meerpur": [
		{
			"title": "Self Defense Camp",
			"html": "components/initiatives/meerpur/meerpur1.html"
		},
		{
			"title": "Health Van",
			"html": "components/initiatives/meerpur/meerpur2.html"
		},
		{
			"title": "Solving Pond Eutrophication",
			"html": "components/initiatives/meerpur/meerpur3.html"
		},
		{
			"title": "Education Employment Survey",
			"html": "components/initiatives/meerpur/meerpur4.html"
		},
		{
			"title": "iNSPIRE",
			"html": "components/initiatives/meerpur/meerpur5.html"
		},
		{
			"title": "Sexual Harrassment Awareness Camp",
			"html": "components/initiatives/meerpur/meerpur6.html"
		},
		{
			"title": "Automatic Polyhouse",
			"html": "components/initiatives/meerpur/meerpur7.html"
		},
		{
			"title": "Information Communication Technology",
			"html": "components/initiatives/meerpur/meerpur8.html"
		},
		{
			"title": "Pond Restoration",
			"html": "components/initiatives/meerpur/meerpur9.html"
		},
		{
			"title": "PMKVY",
			"html": "components/initiatives/meerpur/meerpur10.html"
		},
		{
			"title": "Cattle Vaccination",
			"html": "components/initiatives/meerpur/meerpur11.html"
		},
		{
			"title": "Health Van",
			"html": "components/initiatives/meerpur/meerpur12.html"
		},
		{
			"title": "Campus Visit October 2018",
			"html": "components/initiatives/meerpur/meerpur13.html"
		},
		{
			"title": "Campus Visit October 2019",
			"html": "components/initiatives/meerpur/meerpur14.html"
		},
	],
	
	"Puranpur": [{
					"title": "Veterinary Camp",
					"html": "components/initiatives/puranpur/puranh1.html"
				},
				{
					"title": "Health Camp",
					"html": "components/initiatives/puranpur/puranh2.html"
				},
				{
					"title": "Adolescents Health and hygiene awareness programme",
					"html": "components/initiatives/puranpur/puranh3.html"
				}],
}


// var initiatives = {
// 	"awareness": {

// 	},
// 	"agriculture": {},
// 	"education": {},
// 	"employment": {},
// 	"health": {
// 		"Puranpur": [{
// 			"title": "Veterinary Camp",
// 			"html": "components/initiatives/puranh1.html"
// 		},
// 		{
// 			"title": "Health Camp",
// 			"html": "components/initiatives/puranh2.html"
// 		},
// 		{
// 			"title": "Adolescents Health and hygiene awareness programme",
// 			"html": "components/initiatives/puranh3.html"
// 		}]
// 	},
// 	"other": {
// 		"Puranpur": [{
// 			"title": "Participation in the Village Gram Sabha Meeting",
// 			"html": "components/initiatives/purano1.html"
// 		}]
// 	}
// }