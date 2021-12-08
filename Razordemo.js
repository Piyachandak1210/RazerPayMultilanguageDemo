import React from "react";

import {View,Text,StyleSheet,Button} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const Razordemo =()=>{
const makpayment = ()=>{
  var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: 'rzp_test_SxSQihWQEGk9Mv',
    amount: '1000',
    name: 'Piya coropration',
    //order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
    prefill: {
      email: 'chankpriya@gmail.com',
      contact: '8983204340',
      name: 'Priyanka Chandak'
    },
    theme: {color: '#53a20e'}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}

return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Button
      title="Make a Payment"
      onPress={makpayment}
      />
    </View>
)

}
const styles=StyleSheet.create({});

export default Razordemo;