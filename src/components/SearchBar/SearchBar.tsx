import {View, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchStyles from './SearchBar.style';

const SearchBar = ({inputTerm, setInputTerm, searchInputTerm}: any) => {
  return (
    <View style={SearchStyles.backgroundStyle}>
      <MaterialCommunityIcons name="magnify" style={SearchStyles.iconStyle} size={20} />
      <TextInput
        placeholder="Search here..."
        placeholderTextColor= 'red'
        style={SearchStyles.inputStyles}
        value={inputTerm}
        onChangeText={setInputTerm}
        onEndEditing={searchInputTerm}
        autoCapitalize="none"
      />
    </View>
  );
};

export default SearchBar;
