import styles from './styles.module.scss'

export default function Button({text, type, width, transperent}){
   return(
         <button 

            style={{
               width:width
            }}
            type={type} 
            className={
               transperent
               ?
               styles.app__button + ' ' + styles.transperent
               :   
               styles.app__button
            }
         >{`${text}`}</button>
   )
}