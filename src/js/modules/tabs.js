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
				for (let index = 0; index < tabs.length; index++) {
					tabs[index].style.background = 'white'
					tabs[index].style.color = 'black'
				}
				x.style.background = "var(--color-sky)";
				x.style.color = "white";
				hideTable();
				let table = document.querySelector(`.${x.id}`);
				table.style.display = 'block';
			})
		}
};


