import Button from '../../Components/Button/Button'
import styles from './styles.module.scss'
import header__image from '../../images/Header/header_man.png'
import {changeState} from '../../Redux/Slices/popupSlice'
import { useSelector, useDispatch } from 'react-redux'
import PopupWindow from './Components/PopupWindow/PopupWindow'


export default function Header(){

   const popupState = useSelector(state => state.popupOpenState.openPopup)
   const dispatch = useDispatch()

   function togglePopup(){
      dispatch(changeState())
      // document.body.style.filter = 'blur(5px)'
   }

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
                  <Button 
                  text={'Начать зарабатывать на NFT'} 
                  onClick={togglePopup}
                  />
               </div>
            </div>
            <div className={styles.header__image} >
               <img src={header__image} alt='header_image' />
            </div>
         </div>

         {
            popupState
            ?<PopupWindow/>
            : null
         }
      </header>
   )
}