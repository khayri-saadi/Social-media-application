import { StyleSheet} from 'react-native';
const styles = StyleSheet.create ({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    marginLeft: 'auto',
  },
  createAt: {
    color: 'grey',
  },
  BodyImage: {
    width: '100%',
    aspectRatio: 1,
  },
  description: {
    padding: 10,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
  },
  share: {
    marginLeft: 'auto',
    color: 'gray',
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  footer: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    borderColor: 'light-grey',
  },
  likedBy: {
    color: 'gray',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    color: 'gray',
    marginLeft: 5,
    fontWeight: '500',
  },
  buttons: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default styles