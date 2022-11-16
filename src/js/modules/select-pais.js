let pais = document.getElementById('pais');
let telf = document.getElementById('telf');

if(pais!= null || telf != null ){
pais.onchange = function(e) {
		telf.value = this.value;
		if((this.value).trim() != '') {
    		telf.disabled = false;
    } else {
    		telf.disabled = true
    }
}

telf.onkeyup = function(e) {
		var nums_v = this.value.match(/\d+/g);
    if (nums_v != null) {
        this.value = '+'+((nums_v).toString().replace(/\,/, ''));
    } else { 
    		this.value = pais.value;
		}
}
}
