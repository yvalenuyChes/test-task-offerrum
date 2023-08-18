import Button from '../../../../Components/Button/Button'

import styles from './styles.module.scss'

export default function PopupWindow(){
   return(
      <form className={styles.popup_window} >
         <div className={styles.popup_window__title} >
            <h3>Начни прямо сейчас!</h3>
         </div>
         <div className={styles.popup_window__title} >
            <p>
               Получи все нужные навыки для заработка на NFT всего за 28 дней!
            </p>
         </div>
         <div className={styles.popup_window__input} >
            <input/>
         </div>
         <div>
            <Button text={'Оплатить'} />
         </div>
      </form>
   )
}