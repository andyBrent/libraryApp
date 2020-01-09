// export default class Test extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {realm: null};
//   }

//   componentWillUnmount() {
//     // Close the realm if there is one open.
//     const {realm} = this.state;
//     if (realm !== null && !realm.isClosed) {
//       realm.close();
//     }
//   }

//   render() {
//     const db = this.state.realm
//       ? 'Number of dogs in this Realm: ' +
//         this.state.realm.objects('Dog').length
//       : 'Loading...';

//     return (
//       <SafeAreaView>
//         <View style={styles.container}>
//           {links.map((item, index) => {
//             return (
//               <React.Fragment key={index}>
//                 <View style={styles.separator} />
//                 <TouchableOpacity
//                   accessibilityRole={'button'}
//                   onPress={() => openURLInBrowser(item.link)}
//                   style={styles.linkContainer}>
//                   <Text style={styles.link}>{item.title}</Text>
//                   <Text style={styles.description}>{item.description}</Text>
//                 </TouchableOpacity>
//               </React.Fragment>
//             );
//           })}
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   linkContainer: {
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   link: {
//     flex: 2,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.primary,
//   },
//   description: {
//     flex: 3,
//     paddingVertical: 16,
//     fontWeight: '400',
//     fontSize: 18,
//     color: Colors.dark,
//   },
//   separator: {
//     backgroundColor: Colors.light,
//     height: 1,
//   },
// });
