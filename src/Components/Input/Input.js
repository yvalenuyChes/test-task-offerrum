import styles from './styles.module.scss'

export default function Input({width='200px', placeholder}){

   return(
      <input
         placeholder={placeholder}
         style={{
            width:width
         }}
         className={styles.input}
      />
   )
}