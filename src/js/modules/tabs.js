export const tabs = () => {
	const hideTable = () => {
		let tables = document.querySelectorAll('.lorem')
		for (let index = 0; index < tables.length; index++) {
			tables[index].style.display = 'none'
			
		}
		
	}
    const 
        d = document,
        tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__tab')),
		tableTap = d.querySelectorAll('.lorem')
		for (let index = 0; index < tabs.length; index++) {
			tabs[index].addEventListener('click', e => {
				let i = tabs.indexOf(e.target);
				let x = tabs[index];
				hideTable();
				let table = document.querySelector(`.${x.id}`);
				table.style.display = 'block';

			})
		}

	
};


