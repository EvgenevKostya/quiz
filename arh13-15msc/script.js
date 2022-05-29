const image = document.querySelector('img')
const btn = document.getElementById('next')
const title = document.querySelector('h2')
const resultBtn = document.getElementById('resultBtn')

const songs = [
	{
		name: '1',
		displayName: 'Успенский собор',
	},
	{
		name: '2',
		displayName: 'Иоанн Лств',
	},
	{
		name: '3',
		displayName:
			'Богородице-Рождественский ставропигиальный женский монастырь(собор)',
	},
	{
		name: '4',
		displayName: 'Кремль подклет Благовещ',
	},
	{
		name: '5',
		displayName: 'Москва. Ц. Рождества Богоматери в Кремле подклет Благовещ',
	},
	{
		name: '6',
		displayName: 'Москва. Ц. Рождества Богоматери в Кремле. Западный портал',
	},
	{
		name: '7',
		displayName: 'Москва. Ц. Рождества Богоматери в Кремле. Интерьер',
	},
	{
		name: '8',
		displayName: '017 Городок рек',
	},
	{
		name: '9',
		displayName: 'Городок',
	},
	{
		name: '10',
		displayName: 'Городок',
	},
	{
		name: '11',
		displayName: 'Звенигород. Саввино-сторожевский монастырь нач 15 в',
	},
	{
		name: '12',
		displayName: 'Звенигород. Саввино-сторожевский',
	},
	{
		name: '13',
		displayName:
			'Сергиев Посад. Троицкий собор 1422-23 повыш подпруж арки, сдвиг купола на восток',
	},
	{
		name: '14',
		displayName: 'Сергиев Посад. Троицкий собор Троице-Сергиева монастыря',
	},
	{
		name: '15',
		displayName: 'Сергиев Посад. Троицкий собор Троице-Сергиева монастыря',
	},
	{
		name: '16',
		displayName: 'Сергиев Посад. Троицкий собор Троице-Сергиева монастыря',
	},
	{
		name: '17',
		displayName: 'Tроицкий собор высокий иконостас 1425-27',
	},
	{
		name: '18',
		displayName: 'Москва. Спасо-Андроников монастырь 1425-27',
	},
	{
		name: '19',
		displayName: 'Москва. Спасо-Андроников монастырь 1425-27',
	},
	{
		name: '20',
		displayName: 'Москва. Спасо-Андроников монастырь 1425-27',
	},
	{
		name: '21',
		displayName: 'Москва. Спасский собор Андрникова монастыря',
	},
	{
		name: '22',
		displayName: 'Каменское',
	},
	{
		name: '23',
		displayName: 'Каменское',
	},
	{
		name: '24',
		displayName: 'Москва. Успенский собор Аристотель Фиораванти',
	},
	{
		name: '25',
		displayName: 'Москва. Успенский собор',
	},
	{
		name: '26',
		displayName: 'Москва. Успенский собор',
	},
	{
		name: '27',
		displayName: 'Москва. Успенский собор',
	},
	{
		name: '28',
		displayName:
			'Грановитая палата 1487-91 Марк Фрязин и Пьетро Антонио Солари',
	},
	{
		name: '29',
		displayName: 'Москва. Грановитая палата',
	},
	{
		name: '30',
		displayName: 'Архангельский собор Алевиз Новый 1505-1508',
	},
	{
		name: '31',
		displayName: 'Москва. Архангельский собор_карниз в уровне пят сводов',
	},
	{
		name: '32',
		displayName: 'Архангельский соборсква. Успенский собор',
	},
	{
		name: '33',
		displayName: '071. Архангельский собор1',
	},
	{
		name: '34',
		displayName: 'Москва. Архангельский и Благовещенский соборы',
	},
	{
		name: '35',
		displayName: 'Москва. Иван Великий',
	},
	{
		name: '36',
		displayName: 'Москва. Благовещенский собор 1484-89 псковичи',
	},
	{
		name: '37',
		displayName:
			'Москва. Благовещенский реконструкция без приделов середины 16в',
	},
	{
		name: '38',
		displayName: 'Москва. Ц. Ризположения 1485-86 псковичи',
	},
	{
		name: '39',
		displayName: 'Сергиев Посад. Духовская ц. Троице-Сергиева монастыря',
	},
	{
		name: '40',
		displayName: 'Рождественский собор Ферапонтова монастыря',
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
