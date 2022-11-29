import {select_pais} from './modules/select-pais';
import {modal_login} from './modules/modal-login';
import {topNav} from './modules/topNav';
import {tnsSingle} from './modules/tns-slider';
import {searchFilter} from './modules/searchFilter';
import {swDetecter} from './modules/swDetecter';
import {tabs} from './modules/tabs';
import {initAcc} from './modules/dropdown';
//import {mdInner} from './modules/mdInner';




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
	else if(document.body.classList.contains('caballos')){
		tabs();
	}
	else if(document.body.classList.contains('reglas-deportes')){
		initAcc();
	}

})();



