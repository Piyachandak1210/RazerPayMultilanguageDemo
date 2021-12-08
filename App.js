
import React from 'react';
import {View, Text,Pressable} from 'react-native';
//import Razordemo from './Razordemo';
import Translator from './Translator';

const App =()=>{

return(
   

<View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>

          {/* <Razordemo/> */}
          <Translator/>
        
      </View>


)
}


export default App;