
import { NativeBaseProvider} from "native-base";

import HomeScreen from "./src/Screens/HomeScreen";
import CartScreen from "./src/Screens/CartScreen";


export default function App() {
  return(
   <NativeBaseProvider>
   <CartScreen/>
 </NativeBaseProvider>  
 );
  
 
}



