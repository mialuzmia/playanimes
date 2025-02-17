import styles from "../styles/components/CardDev.module.css"
import { GithubLogo } from '@phosphor-icons/react';

const CardDev = ({ id, image, name, subtitlle, description, github }) => {
  return (
    <div className={styles.card__devs} key={id}>
      <div>
        <img className={styles.card__image} src={image}/>
      </div>
        <h2 className={styles.card__title}>{name}</h2>
        <h3 className={styles.card__subtitle}>{subtitlle}</h3>
        <h4 className={styles.card__description}>{description}</h4>

        <a className={styles.cardLink} href={github} >
        <GithubLogo size={40} />
        </a>
    </div>
    
  )
}


export default CardDev
