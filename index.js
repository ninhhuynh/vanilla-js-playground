const onRateWaifu = () => {
  const waifuElement = document.getElementById('waifu')
  const waifuName = waifuElement?.value;
  if (waifuName === '') {
    waifuElement.classList.add('border-error')
    return
  }
  if (removeAccentMarks(waifuName) === 'Tuan') {
    alert('Waifu rate = 0')
    return
  }
  alert(`Waifu rate = ${Math.random(0, 10)}`)
}

const removeAccentMarks = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");


const onInputFocus = () => {
  const waifuElement = document.getElementById('waifu')
  if (waifuElement.classList.contains('border-error')) {
    waifuElement.classList.remove('border-error')
  }
}