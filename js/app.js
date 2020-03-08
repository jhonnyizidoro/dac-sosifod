const initModals = () => {
	const triggers = document.querySelectorAll('[data-target]')
	const closeButtons = document.querySelectorAll('.modal__close')

	closeButtons.forEach(closeButton => {
		closeButton.addEventListener('click', () => {
			const modal = closeButton.parentElement
			const form = modal.querySelector('form')
			modal.classList.remove('modal--visible')
			form.reset()
		})
	})

	triggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			const modal = document.getElementById(trigger.dataset.target)
			modal.classList.add('modal--visible')
		})
	})
}

const initMasks = () => {
	const inputs = document.querySelectorAll('[data-mask]')
	inputs.forEach(input => new IMask(input, {mask: input.dataset.mask}))
}

const editModal = () => {
	const triggers = document.querySelectorAll('[data-intimation]')
	const modal = document.querySelector('#intimation')
	const form = modal.querySelector('form')

	triggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			const intimation = JSON.parse(trigger.dataset.intimation)
			form.querySelector('[name="id"]').value = intimation.id
			form.querySelector('[name="cpf"]').value = intimation.cpf
			form.querySelector('[name="name"]').value = intimation.name
			form.querySelector('[name="address"]').value = intimation.address
			form.querySelector('[name="process"]').value = intimation.process
			form.querySelector('[name="officer"]').selectedIndex = intimation.officer
		})
	})
}

document.addEventListener('DOMContentLoaded', () => {
	initModals()
	initMasks()
	editModal()
})