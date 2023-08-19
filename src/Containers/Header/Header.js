import Button from '../../Components/Button/Button'
import styles from './styles.module.scss'

import {changeState} from '../../Redux/Slices/popupSlice'
import { useDispatch } from 'react-redux'

import header__image from '../../images/Header/header_man.png'
import header__circle from '../../images/Header/header__large_ellipse.svg'
import header__small_elipse from '../../images/Header/header__small_ellipse.svg'

export default function Header(){

   const dispatch = useDispatch()

   function togglePopup(){
      dispatch(changeState())
      document.body.classList.toggle('lock')
   }

   return(
      <header className={styles.header } id='header'>
         <div className={styles.header__circle}>
            <img src={header__circle} alt='header__circle' />
         </div>
         <div className={styles.header__container} >
            <div className={styles.header__text} >
               <p className={styles.header__title} >
                  Не упусти <br/> возможность войти <br/> в <span> прибыльную нишу </span> 
               </p>
               <p className={styles.header__subtitle} >
                  Получи все нужные навыки для заработка <br/> на NFT всего за 28 дней!
               </p>
               <div className={styles.header__button} >
                  <Button 
                  text={'Начать зарабатывать на NFT'} 
                  onClick={togglePopup}
                  />
               </div>
            </div>
            <div className={styles.header__small_elipse}>
               <img src={header__small_elipse} alt='header__small_elipse' />
            </div>
            <div className={styles.header__image} >
               <img src={header__image} alt='header_image'/>
            </div>
         </div>
      </header>
   )
}