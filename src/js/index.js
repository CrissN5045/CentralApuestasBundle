import {modal_login} from './modules/modal-login';
import {topNav} from './modules/topNav';
import {tnsSingle} from './modules/tns-slider';
import {swDetecter} from './modules/swDetecter';
import {tabs} from './modules/tabs';
import {initAcc} from './modules/dropdown';

(()=>{
	swDetecter();
	topNav();
	if (document.body.classList.contains('home')) {
		tnsSingle();
	}
	if(document.body.classList.contains('caballos')){
		tabs();
	}
	else if(document.body.classList.contains('reglas-deportes')){
		initAcc();
	}
})();



