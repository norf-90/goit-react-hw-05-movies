import { Link } from 'react-router-dom';

const FilmItem = props => {
  const { id, title, poster_path } = props.film;
  console.log(URL);

  return (
    <li>
      <Link
        to={window.location.href.includes('/movies') ? `${id}` : `movies/${id}`}
      >
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://media1.giphy.com/media/MFVY2h4oOw0PSpgGIG/200.webp?cid=ecf05e47s4sh81t2vzrc5e7faiiv3ljj8dgivkwhh7ffpix4&rid=200.webp&ct=s'
          }
          alt={`${title} poster`}
          width="50"
        />
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default FilmItem;
