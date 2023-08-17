import Button from '../../Components/Button/Button'
import styles from './styles.module.scss'
import header__image from '../../images/header_man.png'

export default function Header(){
   return(
      <header className={styles.header} >
         <div className={styles.header__container} >
            <div className={styles.header__text} >
               <p className={styles.header__title} >
                  Не упусти <br/> возможность войти <br/> в <span> прибыльную нишу </span> 
               </p>
               <p className={styles.header__subtitle} >
                  Получи все нужные навыки для заработка <br/> на NFT всего за 28 дней!
               </p>
               <div className={styles.header__button} >
                  <Button text={'Начать зарабатывать на NFT'} />
               </div>
            </div>
            <div className={styles.header__image} >
               <img width={450} height={510} src={header__image} alt='header_image' />
            </div>
         </div>
      </header>
   )
}