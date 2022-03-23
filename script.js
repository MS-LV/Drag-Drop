const wrapper =  document.querySelector('.wrapper');
const save = document.querySelector('.save'),
text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sit nostrum ullam porro voluptatibus mollitia temporibus debitis excepturi laboriosam nemo praesentium commodi odio accusantium, provident vitae esse autem corrupti non!';
let create;
let complate = text.split(' ');
/*
for (var i = 0; i < complate.length; i++) {
	create.classList.add(`${i}`)
}*/
complate.forEach((item)=>{
	create = document.createElement('span');
	create.textContent = item;
	create.setAttribute('draggable', 'true')
	create.classList.add( `${item}`)
	create.style.cssText = `padding:5px; border:1px solid black`;
	wrapper.insertAdjacentElement('beforeend', create);
	create.ondragstart = drag;
})
wrapper.ondragover = wrapDrag
save.ondragover = wrapDrag
function wrapDrag(e){
	e.preventDefault();
}

function drag(e){
	event.dataTransfer.setData('class', e.target.getAttribute('class'))
}
wrapper.ondrop = drop;
save.ondrop = drop;

function drop(e) {
	let itemId = event.dataTransfer.getData('class');
	console.log(itemId);
	event.target.appendChild(document.getElementsByClassName(itemId)[0]);
}

document.addEventListener('click',function (e) {
if (e.target.closest('.wrapper')) {
		save.appendChild(e.target)
	} else if (e.target.closest('.save')) {
		wrapper.appendChild(e.target)
	}
})