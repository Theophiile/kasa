import { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import homeBannerImage from '/assets/home-banner.png'
import './Home.scss'

export default function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    import('../../data/logements.json')
      .then(data => setLogements(data.default))
      .catch(err => console.error('Erreur de chargement:', err))
  }, [])

  return (
    <div className="home">
      <Banner 
        image={homeBannerImage}
        title="Chez vous,<br /> partout et ailleurs"
      />
      <div className="gallery">
        {logements.map(logement => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}