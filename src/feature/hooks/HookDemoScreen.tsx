/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable react-native/no-inline-styles */
// import React, {useRef, useState} from 'react';
// import {View, Text, Button} from 'react-native';

// const HookDemoScreen = ({}): React.JSX.Element => {
//   const countRef = useRef(0);
//   const obj = {
//     current: 0,
//   };

//   // const [count, setCount] = useState(0);

//   const handleClick = () => {
//     countRef.current = countRef.current + 1;
//     obj.current = obj.current + 1;
//     // setCount(count + 1);
//   };

//   console.log({
//     current: countRef.current,
//     obj: obj.current,
//   });

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Hook Demo Screen</Text>
//       <Button title="CLICK" onPress={handleClick} />
//     </View>
//   );
// };

// export default HookDemoScreen;

import React, {useRef} from 'react';
import {ScrollView, View, Text, Button} from 'react-native';

const HookDemoScreen = () => {
  // Khai báo một ref để lưu trữ tham chiếu đến ScrollView
  const scrollViewRef = useRef<ScrollView>();

  // Hàm xử lý sự kiện scroll đến item cụ thể
  const scrollToItem = () => {
    // Kiểm tra xem ref đã được khởi tạo chưa
    if (scrollViewRef.current) {
      // Scroll đến item có index là 10
      scrollViewRef.current.scrollTo({y: 100 * 10, animated: true});
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView ref={scrollViewRef}>
        {/* Render danh sách các item */}
        {[...Array(20).keys()].map(index => (
          <View
            key={index}
            style={{
              height: 100,
              backgroundColor: 'lightblue',
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 18, textAlign: 'center', marginTop: 40}}>
              Item {index + 1}
            </Text>
          </View>
        ))}
      </ScrollView>
      {/* Button để scroll đến item cần thiết */}
      <Button title="Scroll đến Item 11" onPress={scrollToItem} />
    </View>
  );
};

export default HookDemoScreen;
