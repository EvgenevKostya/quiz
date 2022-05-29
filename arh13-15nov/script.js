const image = document.querySelector('img')
const btn = document.getElementById('next')
const title = document.querySelector('h2')
const resultBtn = document.getElementById('resultBtn')

const songs = [
	{
		name: '1',
		displayName: 'Новгород. Ц. Николы на Липне 1292',
	},
	{
		name: '2',
		displayName: 'Новгород. Ц. Николы Белого 1312-13',
	},
	{
		name: '3',
		displayName: 'ц. Николы Белого реконстр Г.М. Штендера',
	},
	{
		name: '4',
		displayName: 'Детинец Ц. Входа в Иерусалим 1336-37',
	},
	{
		name: '5',
		displayName: 'Благовещение на Городище',
	},
	{
		name: '6',
		displayName: 'Благовещения на Городище 1342-43',
	},
	{
		name: '7',
		displayName: 'ц. Благовещения на Городище 1103 и 1342-43',
	},
	{
		name: '8',
		displayName: 'ц. Благовещения на Городище фрагменты пониженных арок',
	},
	{
		name: '9',
		displayName: 'ц. Благовещения_реконстр Красноречьева',
	},
	{
		name: '10',
		displayName: 'Новгород. Ц. Благовещения на Городище',
	},
	{
		name: '11',
		displayName: 'Новгород. Ц. Спаса на Ковалеве',
	},
	{
		name: '12',
		displayName: 'Успения на Волотовом поле 1352',
	},
	{
		name: '13',
		displayName: 'Новгород. Ц. Успения на Волотовом поле',
	},
	{
		name: '14',
		displayName: 'Новгород. Ц. Успения на Волотовом поле',
	},
	{
		name: '15',
		displayName: 'Новгород. Ц. Федора Стратилата на Ручью 1360-61',
	},
	{
		name: '16',
		displayName: 'Новгород. Ц. Спаса на Ильине улице 1374',
	},
	{
		name: '17',
		displayName: 'Новгород. Ц. Спаса на Ильине улице',
	},
	{
		name: '18',
		displayName: 'Иоанна Богослова на Витке 1383-84',
	},
	{
		name: '19',
		displayName: 'Спас Русса',
	},
	{
		name: '20',
		displayName: 'Новгород. Ц. Петра и Павла в Кожевниках 1406',
	},
	{
		name: '21',
		displayName: 'На старой основе Спаса в Руссе 1442',
	},
	{
		name: '22',
		displayName: 'На старой основе ц Иоанна_Предтечи_на_Опоках 1453',
	},
	{
		name: '23',
		displayName: 'Ильи на Славне',
	},
	{
		name: '24',
		displayName: 'На старой основе Ильи на Славне 1456',
	},
	{
		name: '25',
		displayName: 'Сергия Радонежского фасад юж',
	},
	{
		name: '26',
		displayName: 'Новгород. Ц. Симеона Богоприимца Зверина монастыря',
	},
	{
		name: '27',
		displayName: 'Новгоод. Владычная палата 1433. Фасад и реконструкция',
	},
	{
		name: '28',
		displayName: 'Новгород.-Владычная-палата',
	},
	{
		name: '29',
		displayName: 'Новгород.-Владычная-палата_4',
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
