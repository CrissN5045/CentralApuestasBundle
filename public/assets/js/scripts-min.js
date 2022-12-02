(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _modalLogin = require('./modules/modal-login');

var _topNav = require('./modules/topNav');

var _tnsSlider = require('./modules/tns-slider');

var _swDetecter = require('./modules/swDetecter');

var _tabs = require('./modules/tabs');

var _dropdown = require('./modules/dropdown');

(function () {
	(0, _swDetecter.swDetecter)();
	(0, _topNav.topNav)();
	if (document.body.classList.contains('home')) {
		(0, _tnsSlider.tnsSingle)();
	}
	if (document.body.classList.contains('caballos')) {
		(0, _tabs.tabs)();
	} else if (document.body.classList.contains('reglas-deportes')) {
		(0, _dropdown.initAcc)();
	}
})();

},{"./modules/dropdown":2,"./modules/modal-login":3,"./modules/swDetecter":4,"./modules/tabs":5,"./modules/tns-slider":6,"./modules/topNav":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function initAcc(elem, option) {
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem + ' .a-btn')) return;else {
            if (!e.target.parentElement.classList.contains('active')) {
                if (option == true) {
                    var elementList = document.querySelectorAll(elem + ' .a-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }
                e.target.parentElement.classList.add('active');
            } else {
                e.target.parentElement.classList.remove('active');
            }
        }
    });
}
initAcc('.accordion.v1', true);
initAcc('.accordion.v2', false);
exports.default = initAcc();

},{}],3:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal-button");
var modalButtonCasino = document.querySelectorAll(".modal-button-casino");
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

if (document.body.classList.contains('casino')) {
  for (var index = 0; index < modalButtonCasino.length; index++) {
    modalButtonCasino[index].addEventListener("click", openModal);
  }
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tabs = exports.tabs = function tabs() {
	var hideTable = function hideTable() {
		var tables = document.querySelectorAll('.lorem');
		for (var index = 0; index < tables.length; index++) {
			tables[index].style.display = 'none';
		}
	};
	var d = document,
	    tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__tab')),
	    tableTap = d.querySelectorAll('.lorem');

	var _loop = function _loop(index) {
		tabs[index].addEventListener('click', function (e) {
			var i = tabs.indexOf(e.target);
			var x = tabs[index];
			hideTable();
			var table = document.querySelector('.' + x.id);
			table.style.display = 'block';
		});
	};

	for (var index = 0; index < tabs.length; index++) {
		_loop(index);
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
			autoplay: true,
			speed: 1500,
			autoplayButtonOutput: false,
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
