import AboutSquare from '../../Components/AboutSquare/AboutSquare'
import styles from './styles.module.scss'

import firstEmoji from '../../images/About/firstEmoji.svg'
import secondEmoji from '../../images/About/secondEmoji.svg'
import thirdEmoji from '../../images/About/thirdEmoji.svg'
import fourthEmoji from '../../images/About/fourthEmoji.svg'

export default function About(){
   return(
      <div className={styles.about}>
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