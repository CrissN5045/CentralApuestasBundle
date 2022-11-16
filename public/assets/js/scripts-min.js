(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _selectPais = require('./modules/select-pais');

var _modalLogin = require('./modules/modal-login');

var _topNav = require('./modules/topNav');

var _tnsSlider = require('./modules/tns-slider');

var _searchFilter = require('./modules/searchFilter');

var _swDetecter = require('./modules/swDetecter');

//import {mdInner} from './modules/mdInner';


(function () {
	(0, _swDetecter.swDetecter)();
	(0, _topNav.topNav)();
	(0, _tnsSlider.tnsSingle)();
	if (document.body.classList.contains('home')) {
		// functions here
	} else if (document.body.classList.contains('portfolio')) {
		// functions here
		(0, _searchFilter.searchFilter)();
	}
})();

},{"./modules/modal-login":2,"./modules/searchFilter":3,"./modules/select-pais":4,"./modules/swDetecter":5,"./modules/tns-slider":6,"./modules/topNav":7}],2:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal-button");
var modalButtonM = document.querySelector(".modal-button-m");
var closeButton = document.querySelector(".close-button");
var scrollDown = document.querySelector(".scroll-down");
var isOpened = false;

var openModal = function openModal() {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
};

var closeModal = function closeModal() {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
};

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
modalButtonM.addEventListener("click", openModal);

document.onkeydown = function (evt) {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var searchFilter = exports.searchFilter = function searchFilter() {
	// get the input data
	var fnFilter = function fnFilter(inputElement, selector, selectorContainer) {
		inputElement.addEventListener('keyup', function (e) {
			if (e.key === 'Escape') e.target.value = '';
			fnCompareElements(e.target.value.toUpperCase(), selector, selectorContainer);
		});
	};
	var fnCompareElements = function fnCompareElements(filterText, selector, selectorContainer) {
		var searchElements = document.querySelectorAll(selector);
		var searchContainers = document.querySelectorAll(selectorContainer);
		searchElements.forEach(function (el) {
			el.textContent.toUpperCase().includes(filterText) ? el.style.display = 'block' : el.style.display = 'none';
		});
		searchContainers.forEach(function (el) {
			el.textContent.toUpperCase().includes(filterText) ? el.style.display = 'block' : el.style.display = 'none';
		});
	};
	fnFilter(document.getElementById('searchInput'), '.class-item__fragment', '.class-item');
};

},{}],4:[function(require,module,exports){
'use strict';

var pais = document.getElementById('pais');
var telf = document.getElementById('telf');

if (pais != null || telf != null) {
  pais.onchange = function (e) {
    telf.value = this.value;
    if (this.value.trim() != '') {
      telf.disabled = false;
    } else {
      telf.disabled = true;
    }
  };

  telf.onkeyup = function (e) {
    var nums_v = this.value.match(/\d+/g);
    if (nums_v != null) {
      this.value = '+' + nums_v.toString().replace(/\,/, '');
    } else {
      this.value = pais.value;
    }
  };
}

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var swDetecter = exports.swDetecter = function swDetecter() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./sw.js').then(function (reg) {
			return console.log('Registro de SW exitoso', reg);
		}).catch(function (err) {
			return console.warn('Error al tratar de registrar el sw', err);
		});
	}
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tnsSingle = exports.tnsSingle = function tnsSingle() {
  var tnsSingleVar = document.getElementById('tnsSingle');
  if (tnsSingleVar != null) {

    var slider = tns({
      container: '#tnsSingle',
      items: 1,
      slideBy: 1,
      speed: 1000,
      mode: 'gallery',
      mouseDrag: true,
      controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });
  };
};

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = exports.topNav = function topNav() {
	var myFunction = function myFunction() {
		document.querySelector('.hamburger').addEventListener('click', function (e) {
			e.preventDefault();
			[].map.call(document.querySelectorAll('.hamburger'), function (el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.top-nav__menu'), function (el) {
				el.classList.toggle('show-top-nav');
			});
		});
	};
	myFunction();
};

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
