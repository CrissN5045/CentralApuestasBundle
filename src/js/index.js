import {topNav} from './modules/topNav'
import {tnsSingle} from './modules/tns-slider'
import {searchFilter} from './modules/searchFilter'
import {swDetecter} from './modules/swDetecter';
import {mdInner} from './modules/mdInner';
import {modal_login} from './modules/modal-login'



(()=>{
	swDetecter();
	topNav();
	tnsSingle();
	if (document.body.classList.contains('home')) {
		// functions here
	}else if (document.body.classList.contains('portfolio')) {
		// functions here
		searchFilter();
	}
})();



