var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: 'https://images-na.ssl-images-amazon.com/images/I/51IWlffOs%2BL.jpg',
		alt: 'Harry Potter plakat'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Lion_king_1_half_cover.jpg/220px-Lion_king_1_half_cover.jpg',
		alt: 'Król Lew plakat'
	},
	{
		id: 3,
		title: 'Spider into the spider verse',
		desc: 'Film w którym spotykają się różne alteratywne wersje spidermana',
		img: 'https://media.comicbook.com/2019/02/spider-man-into-the-spider-verse-blu-ray-top-1159238.jpeg',
		alt: 'Spider into the spider verse plakat'
	},
	{
		id: 4,
		title: 'Tekkonkinkreet',
		desc: 'Animacja o dwójce wychowujących się na ulicy braci',
		img: 'https://static.tvtropes.org/pmwiki/pub/images/tekkon-kinkreet-743333.jpg',
		alt: 'Tekkonkinkreet plakat'
	},
	{
		id: 5,
		title: 'Czerwony żółw',
		desc: 'Symboliczna opowieść o życiu',
		img: 'https://upload.wikimedia.org/wikipedia/en/f/fe/The_Red_Turtle.png',
		alt: 'Czerwony zółw plakat'
	}
];

var Movie = React.createClass( {
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},

	render: function() {
		return React.createElement('li', {},
			React.createElement(MovieTitle, { title: this.props.movie.title }),
			React.createElement(MovieDescription, { desc: this.props.movie.desc }),
			React.createElement(MoviePoster, { img: this.props.movie.img })
		)
	}
})

var MovieTitle = React.createClass( {
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},

	render: function() {
		return React.createElement('h2', {}, this.props.title);
	}
});

var MovieDescription = React.createClass( {
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},

	render: function() {
		return React.createElement('p', {}, this.props.desc);
	}
});

var MoviePoster = React.createClass ( {
	propTypes: {
		img: React.PropTypes.string.isRequired,
	},

	render: function() {
		return React.createElement('img', { src: this.props.img, alt: this.props.alt });
	}
})

var MoviesList = movies.map(function(movie, id) {
	return React.createElement(Movie, {
		key: id,
		movie: movie,
	});
});

var AllSide = React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {}, MoviesList)
);

ReactDOM.render(AllSide, document.getElementById('app'));