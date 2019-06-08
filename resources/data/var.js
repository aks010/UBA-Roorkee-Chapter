var currentPage = window.location.hash.substr(1)?window.location.hash.substr(1): "home";
// alert(window.location.hash.substr(1));

var homeLoad = true;

var initiatives = {
	"Beladi_Salhapur": {
		"inspire": {},
		"scholarship": {},
		"science_exhibition": {},
		"self_defence_camp": {},
		"cycle_donation": {}
	},
	"Chandpur": {
		"school_adornment": {},
		"aromatic_plant_cultivation": {},
		"personality_dev_program": {},
		"inf_comm_tech": {},
		"finnancial_lit_camp": {},
		"sanitary_pad_dist_chain": {},
	},
	"Charbba": {
		"school_adornment": {},
		"indian_state_culture": {},
		"first_aid_dist": {},
		"agricultural_survey": {},
		"cycle_donation": {},
		"inf_comm_tech": {},
		"best_of_waste": {},
	},
	"Meerpur": {
		"self_defence_camp": {},
		"health_van": {},
		"solving_pond_eutrophication": {},
		"edu_emp_survey": {},
		"inspire": {},
		"sexual_harr_aware_camp": {},
		"auto_polyhouse": {},
		"campus_visit_oct18": {},
		"inf_comm_tech": {},
		"pond_restoration": {},
		"pmkvy": {},
		"cattle_vacc": {},
		"campus_visit_march19": {},
	},
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