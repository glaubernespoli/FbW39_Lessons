function changeJustifyContent() {
	const jc = [
		'flex-start',
		'flex-end',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
	];

	const container = document.querySelector('#wrapper-container');
	const current = window.getComputedStyle(container).justifyContent;
	const currentIdx = jc.findIndex((val) => {
		return val == current;
	});

	container.style.justifyContent =
		jc[currentIdx == jc.length - 1 ? 0 : currentIdx + 1];
}
