import AboutSquare from '../../Components/AboutSquare/AboutSquare'
import styles from './styles.module.scss'

import firstEmoji from '../../images/About/firstEmoji.svg'
import secondEmoji from '../../images/About/secondEmoji.svg'
import thirdEmoji from '../../images/About/thirdEmoji.svg'
import fourthEmoji from '../../images/About/fourthEmoji.svg'
import big_circle from '../../images/About/large_ellipse.svg'
import small_circle_blue from '../../images/About/blue_small_ellipse.svg'
import small_circle_violet_top from '../../images/About/violet_small_ellipse_top.svg'
import small_circle_violet_bottom from '../../images/About/violet_small_elipse_bottom.svg'

export default function About(){
   return(
      <div className={styles.about} id='about'>
         <div className={styles.about__big_circle_top  + ' ' + styles.circle} >
            <img src={big_circle} />
         </div>
         <div  className={styles.about__big_circle_bottom + ' ' + styles.circle} >
            <img src={big_circle} />
         </div>
         <div  className={styles.about__small_circle_blue + ' ' + styles.circle} >
            <img src={small_circle_blue} />
         </div>
         <div className={styles.about__small_circle_violet_top + ' ' + styles.circle} >
            <img src={small_circle_violet_top} />
         </div>
         <div className={styles.about__small_circle_violet_bottom + ' ' + styles.circle} >
            <img src={small_circle_violet_bottom} />
         </div>
         <div className={styles.about__container} >
            <h2 className={styles.about__title} >Что тебе даст обучение?</h2>
            <div className={styles.about__grid}>
               <AboutSquare
                  img={firstEmoji}
                  text={'Откроешь свой первый криптокошелек и научишься с ним работать'}
               />

               <AboutSquare
                  img={secondEmoji}
                  text={'Поймёшь, как выбирать правильные дропы'}
               />

               <AboutSquare
                  img={thirdEmoji}
                  text={'Построишь план по быстрому приумножению заработанных средств'}
               />

               <AboutSquare
                  img={fourthEmoji}
                  text={'Узнаешь кто такие холдеры и флипперы'}
               />
         </div>
         </div>
      </div>
   )
}