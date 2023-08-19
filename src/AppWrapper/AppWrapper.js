import { useSelector} from 'react-redux'
import About from "../Containers/About/About";
import Header from "../Containers/Header/Header";
import Navigation from "../Containers/Navigation/Navigation";

import styles from './styles.module.scss'
import PopupWindow from '../Containers/Header/Components/PopupWindow/PopupWindow';

export default function AppWrapper(){

   const popupState = useSelector(state => state.popupOpenState.openPopup)

   return(
      <>
      <div className={
         popupState
         ?
         styles.app_wrapper + ' ' + styles.blur
         :
         styles.app_wrapper
         } >
         <Navigation/>
         <Header/>
         <About/>
      </div>
      {
         popupState
         ?  <PopupWindow/>
         : null
      }
     
      </>
   )
}