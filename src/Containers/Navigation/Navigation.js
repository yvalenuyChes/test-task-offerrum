import Button from '../../Components/Button/Button'
import styles from './styles.module.scss'
import navigationElipse from '../../images/navigation__ellipse.svg'


export default function Navigation(){
   return(
      <nav className={styles.nav}>
         <div className={styles.nav__container} >
            <div className={styles.nav__logo}>
               <img src={navigationElipse} />
               NFT
            </div>
               <ul className={styles.nav__text}>
                  <li>
                     Главная
                  </li>
                  <li>
                     Что даст обучение
                  </li>
                  <li>
                     <Button text={'Личный кабинет'} />
                  </li>
               </ul>
         </div>
      </nav>
   )
}