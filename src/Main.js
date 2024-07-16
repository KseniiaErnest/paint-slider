import './App.css';

export default function Main({data}) {
  const { name, year, description, source, artist, images } = data;

  const importImage = (path) => {
    try {
      return require(`${path}`);
    } catch (err) {
      console.error("Image not found:", path);
      return '';
    }
  };

  return (
    <main className='main'>
      <div className='paint-container'>
<img src={importImage(images.gallery)} alt={name} />
      </div>

      <div className='paint-info-container'>
<h1>{name}</h1>
<h2>{artist.name}</h2>
<div>
<img src={importImage(artist.image)} alt={artist.name} />
</div>

<p className='about-paint'>{description}</p>
<a target="_blank" rel="noreferrer" href={source}>Got to source</a>
<h3>{year}</h3>
      </div>

      <div>
        
      </div>
    </main>
  )
}
