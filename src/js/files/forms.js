
export function formInit() {
	const forms = document.querySelectorAll('form');
	const popup = document.querySelector('#popup');

	forms.forEach(form => {
		bindPostData(form);
	});

	const messages = {
    loading: 'img/spinner.svg',
    succses: 'Данные отправлены',
    failed: 'Произошла ошибка, попробуйте позже',
  };

	const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      }, 
      body: data,
    });

    return await res.json();
  };

	function bindPostData(form) {
		form.addEventListener("submit", e => {
			e.preventDefault();
			
			let error = formValidate(form);

			if (error === 0) {
				popup.classList.add('popup-open');
				document.body.classList.add('_lock');
				popup.innerHTML = `
					<img src="${messages.loading}" alt="Loading">
				`;

				const formData = new FormData(form);
				const json = JSON.stringify(Object.fromEntries(formData.entries()));

				postData('server.php', json)
        .then(data => {
					popup.innerHTML = '';
          alert('Succses');
        }).catch(() => {
					popup.innerHTML = '';
          alert('Error');
        }).finally(() => {
					popup.classList.remove('popup-open');
					document.body.classList.remove('_lock');
          form.reset();
        });

			}	
		});
	}


	//валидация
	function formValidate(form) {
		let error = 0;
		let formReq = form.querySelectorAll('[data-req]');

		formReq.forEach(input => {
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			}
		});
		return error;
	}

	// проверяем на правильность емейл
	function emailTest (input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	//Показ ошибки
	function formAddError(input) {
			input.parentElement.classList.add('_error');
	}

	//Удаление ошибки
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
	}
}