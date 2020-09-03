import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  room: {},
  roomHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#00247d',
    width: '100%',
    marginBottom: 20,
  },
  roomText: {
    backgroundColor: '#00247d',
    paddingHorizontal: 10,
    padding: 1,
    color: 'white',
    borderRadius: 3,
  },
  headerTrash: {
    fontSize: 20,
    color: '#cf142b',
  },
  body: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },

  scope: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
  },

  scopeText: {
    marginRight: 20,
    color: '#00247d',
    fontWeight: '600',
    fontSize: 15,
  },
  scopeIcon: {
    color: '#cf142b',
    borderRadius: 4,
  },
  scopeNumber: {
    color: '#cf142b',
    marginHorizontal: 7,
    fontWeight: 'bold',
  },
  childrenAges: {
    width: '100%',
    marginTop: 20,
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around'
  },
  childrenAgesText: {
    color: '#cf142b',
    textTransform: 'capitalize',
    width: '100%',
  },
  childrenAgesPicker: {
    width: '48%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  icon: {
    fontSize: 14,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  button: {
    fontSize: 10,
    padding: 0,
    margin: 0,
  },


});
