const image = document.querySelector('img')
const btn = document.getElementById('next')
const title = document.querySelector('h2')
const resultBtn = document.getElementById('resultBtn')

const songs = [
	{
		name: '1',
		displayName: 'Псков. Довмонтов город',
	},
	{
		name: '2',
		displayName: 'Псков. Рождественский собор Снетогорского монастыря',
	},
	{
		name: '3',
		displayName: 'Псков. Соборы Мирожского и Снетогорского монастырей',
	},
	{
		name: '4',
		displayName: 'Псков. Ц. Михаила и Гавриила Архангелов с Городца 1339',
	},
	{
		name: '5',
		displayName: 'Изборск Никольский собор 1340-е гг.',
	},
	{
		name: '6',
		displayName: 'Изборск. Никольский собор',
	},
	{
		name: '7',
		displayName: 'Изборск. Никольский План',
	},
	{
		name: '8',
		displayName: 'Никола Изборск своды из арок разной высоты',
	},
	{
		name: '9',
		displayName: 'Псков Троицкий собор',
	},
	{
		name: '10',
		displayName: 'Псков Троицкий собор 1699',
	},
	{
		name: '11',
		displayName:
			'Мелётово повышенные подпружные арки покрытие на 16скатов + 16 вокруг барабана',
	},
	{
		name: '12',
		displayName: 'Мелётово',
	},
	{
		name: '13',
		displayName: 'ц Успения в селе Мелётово 1461-62',
	},
	{
		name: '14',
		displayName: 'Псков. Ц. Козмы и Дамиана с Примостья 1462-63',
	},
	{
		name: '15',
		displayName: 'ц. Косьмы и Дамиана с пониженными подпружными арками',
	},
	{
		name: '16',
		displayName: 'Георгия со Взвоза 1494',
	},
	{
		name: '17',
		displayName: 'Георгия со Взвоза подпружные арки слиты со сводами',
	},
	{
		name: '18',
		displayName: 'Георгия со Взвоза ',
	},
	{
		name: '19',
		displayName: 'Пустое Воскресение',
	},
	{
		name: '20',
		displayName: 'Пустое Воскресение',
	},
	{
		name: '21',
		displayName:
			'Псков. Ц. Богоявления с Запсковья 1495-96 с бесстолпными приделами и звонницей',
	},
	{
		name: '22',
		displayName: ' ц в погосте Пустое Воскресение 1496',
	},
	{
		name: '23',
		displayName: 'Василия на Горке',
	},
	{
		name: '24',
		displayName: 'Василия на Горке',
	},
	{
		name: '25',
		displayName: 'Никола Каменогр',
	},
	{
		name: '26',
		displayName: 'Псков. Ц. Николы со Усохи',
	},
	{
		name: '27',
		displayName: 'Никола_со_Усохи 1530',
	},
	{
		name: '28',
		displayName: 'Троица Доможирка 1558',
	},
]

function loadSong(song) {
	image.src = `img/${song.name}.jpg`
	title.textContent = song.displayName
}

let songIndex = 0

let isShow = false

function show() {
	isShow = true
	title.classList.add('active')
}

function noShow() {
	isShow = false
	title.classList.remove('active')
}

function nextSong() {
	songIndex = Math.floor(Math.random() * songs.length)
	loadSong(songs[songIndex])
	title.classList.remove('active')
}

loadSong(songs[songIndex])

btn.addEventListener('click', nextSong)
resultBtn.addEventListener('click', () => (isShow ? noShow() : show()))
