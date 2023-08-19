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
               <img src={navigationElipse} alt='logoCircle' />
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
                    <a href='#header' >Главная</a> 
                  </li>
                  <li>
                     <a href='#about' >Что даст обучение</a>
                  </li>
                  <li>
                     <Button  transperent={true} text={'Личный кабинет'} />
                  </li>
               </ul>
         </div>
      </nav>
   )
}