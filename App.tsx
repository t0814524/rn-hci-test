/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect, PropsWithChildren } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import MyPicker from './components/picker';

// import RNPickerSelect from 'react-native-picker-select';
import { FilterSection, FilterYearRange } from './components/Filter';
import Icon from 'react-native-vector-icons/AntDesign';


// export const Dropdown = () => {
//   return (
//     <RNPickerSelect
//       onValueChange={(value) => console.log(value)}
//       items={[
//         { label: 'Football', value: 'football' },
//         { label: 'Baseball', value: 'baseball' },
//         { label: 'Hockey', value: 'hockey' },
//       ]}
//     />
//   );
// };

// const [searchQuery, setSearchQuery] = useState('')
// const [data, setData] = useState([
//   { id: 1, name: 'Apple' },
//   { id: 2, name: 'Banana' },
//   { id: 3, name: 'Orange' },
//   { id: 4, name: 'Mango' },
//   // Add more data as needed
// ]);

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title} asdf
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  let [searchValue, setSearchValue] = useState("asd");

  const handleSearch = (text: string) => {

    // setSearchQuery(text);
    // Filter data based on search query
    // const filteredData = data.filter(item =>
    //   item.name.toLowerCase().includes(text.toLowerCase())
    // );


    console.log("search handle")

    // setSearchQuery(text || "");
    // Filter data based on search query
    // fetch("https://api.artic.edu/api/v1/artworks/search?q=" + text).then(res => {
    //   console.log(res.data[0])
    // })


    setSearchValue(text);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {/* <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section> */}


          <FilterSection></FilterSection>
          {/* <MyPicker></MyPicker> */}
          {/* <Dropdown></Dropdown> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
