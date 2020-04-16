var subButton = document.querySelector("#subBtn");

subButton.addEventListener('click', function() {
	var name = document.querySelector("#name");
	var email = document.querySelector("#email");
	var address = document.querySelector("#address");
	var city = document.querySelector("#city");
	var province = document.querySelector("#province");
	var postal = document.querySelector("#PostalCode");

	var infoP = document.querySelector("#infoP");

	infoP.innerHTML = `${name.value}<br>${email.value}<br>${address.value}, ${city.value},<br>${province.value}, ${postal.value}`;
});

