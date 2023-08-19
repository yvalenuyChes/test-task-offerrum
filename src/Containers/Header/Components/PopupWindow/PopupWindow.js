import { useDispatch } from 'react-redux'
import {changeState} from '../../../../Redux/Slices/popupSlice'
import Button from '../../../../Components/Button/Button'
import Input from '../../../../Components/Input/Input'
import circle from '../../../../images/PopupWindow/popup_window_circle.png'

import styles from './styles.module.scss'

export default function PopupWindow(){

   const dispatch = useDispatch()

   function togglePopup(){
      dispatch(changeState())
   }


   return(
      <form className={styles.popup_window} >
         <div className={styles.popup_window__wrapper} >
            <div className={styles.popup_window__circle} >
               <img src={circle} />
            </div>
            <div
               className={styles.popup_window__close_button}
               onClick={togglePopup}
            />
            <div className={styles.popup_window__main_content_wrapper} >
               <div className={styles.popup_window__title} >
                  <h3>Начни прямо сейчас!</h3>
               </div>
               <div className={styles.popup_window__subtitle} >
                  <p>
                     Получи все нужные навыки для заработка на NFT всего за 28 дней!
                  </p>
               </div>
               <div className={styles.popup_window__input} >
               <Input
                     placeholder={'Ваш email'}
                     width='100%'
               />
               </div>
               <div>
                  <Button text={'Оплатить'} width={'100%'} />
               </div>
            </div>
           
         </div>
      </form>
   )
}