import {StyleSheet} from 'react-native';

const newsCardStyle = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop: 20,
    width: 360,
    alignItems: 'center'
  },

  cardImage: {
    width: 360,
    height: 200,
    borderRadius: 10
  },

  imageOverlay: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: 360,
    bottom: 0,
    padding: 5,
    paddingHorizontal: 10,
  },
  
  cardTextContainer: {
    paddingHorizontal: 0,
    paddingTop: 16,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },

  cardDescription: {
    fontSize: 16,
    color: 'black',
  },
});

export default newsCardStyle;
