import styles from './styles.module.scss'

export default function AboutSquare({img, text}){
   return(
         <div className={styles.about_square} >
         <div className={styles.about_square__img} >
            <img src={img} />
         </div>
         <div className={styles.about_square__text} >
            {text}
         </div>
      </div>
     
   )
}