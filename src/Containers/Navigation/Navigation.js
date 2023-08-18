import Button from '../../Components/Button/Button'
import styles from './styles.module.scss'
import navigationElipse from '../../images/Header/navigation__ellipse.svg'
import { useState } from 'react'


export default function Navigation(){


   const [openNav, setOpenNav] = useState(false)

   return(
      <nav className={styles.nav}>
         <div className={styles.nav__container} >
           
            <div className={styles.nav__logo}>
               <img src={navigationElipse} />
               NFT
            </div>
            <div 
            className={
               openNav
               ?  styles.nav__button + ' ' + styles.active
               :  styles.nav__button
            }
            onClick={() => setOpenNav(prev => !prev)}
            >
               {
                  openNav
                  ? null
                  : <span 
                  className={styles.button}/>
               }
              
              
               
            </div>
               <ul className={

                  openNav
                  ? styles.nav__text + ' ' + styles.active
                  : styles.nav__text
                  }>
                  <li>
                     Главная
                  </li>
                  <li>
                     Что даст обучение
                  </li>
                  <li>
                     <Button  transperent={true} text={'Личный кабинет'} />
                  </li>
               </ul>
         </div>
      </nav>
   )
}