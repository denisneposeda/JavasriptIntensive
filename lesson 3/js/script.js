window.addEventListener('DOMContentLoaded', function() {

	let shop = document.querySelector('.shop'),
			open = document.getElementsByClassName('open')[0],
			buttons = shop.querySelectorAll('button'),
			products = shop.querySelectorAll('.product'),
			status = false;

	function createCart() {
		let cart = document.createElement("div"),
				field = document.createElement("div"),
				heading = document.createElement("h2"),
				close = document.createElement("button");

		cart.classList.add('cart');
		cart-field.classList.add('cart-field');
		close.classList.add('close');

		close.textContent = 'Закрыть';
		heading.textContent = 'В нашей корзине:';

		document.body.appendChild(cart);
		cart.appendChild(heading);
		cart.appendChild(field);		
		cart.appendChild(close);
	}

	createCart();

	let field = document.querySelector('.cart-field'),
	    cart = document.querySelector('.cart'),
	    close = document.querySelector('.close');

	buttonDo(shop,field,true);
	
	function buttonDo (block,to,operation) {
		buttons = block.querySelectorAll('button');
		products = block.querySelectorAll('.product');
		for (let i = 0; i < buttons.length; i++) {
	    buttons[i].addEventListener("click", function() {
        let item = products[i].cloneNode(true);
   		 		( operation ) ? item.querySelector('button').textContent = "Удалить" : item.querySelector('button').textContent = "Купить";
   		 		to.appendChild(item);
   		 		products[i].remove();
	    });
		}
	}

	function openCart() {
		cart.style.display = "block";
		buttonDo(field,shop,false);
	}

	function closeCart() {
		cart.style.display = "none";
		buttonDo(shop,field,true);
	}

	open.addEventListener('click',openCart);
	close.addEventListener('click',closeCart);

});