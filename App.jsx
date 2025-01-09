import { View, ScrollView, Text, StyleSheet, StatusBar} from 'react-native'
import PokemonCard from './component/PokemonCard'

const App = () => {

  const charmanderData = {
    name : "Charmander",
    image : require('./assets/pokemon1.png'),
    type : "fire",
    hp : 39,
    moves : ["Scratch", "Ember", "Growl", "Leer"],
    weakness : ["Water", "Rock"],
  }

  const charmanderData1 = {
    name : "Charmander",
    image : require('./assets/pokemon2.png'),
    type : "fire",
    hp : 102,
    moves : ["Scratch", "Ember", "Growl", "Leer"],
    weakness : ["Water", "Rock"],
  }

  const charmanderData2 = {
    name : "Charmander",
    image : require('./assets/pokemon3.png'),
    type : "fire",
    hp : 21,
    moves : ["Scratch", "Ember", "Growl", "Leer"],
    weakness : ["Water", "Rock"],
  }

  const charmanderData3 = {
    name : "Charmander",
    image : require('./assets/pokemon4.png'),
    type : "fire",
    hp : 65,
    moves : ["Scratch", "Ember", "Growl", "Leer"],
    weakness : ["Water", "Rock"],
  }


  return (
    // <ScrollView style = { styles.container } horizontal = {true} contentContainerStyle = {styles.scrollContent}>
    <ScrollView style = { styles.container }>
      <StatusBar />
      <PokemonCard {...charmanderData} />
      <PokemonCard {...charmanderData1} />
      <PokemonCard {...charmanderData2} />
      <PokemonCard {...charmanderData3} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#f5f5f5",
    paddingTop : 40,
  },
  scrollContent : {
    flexDirection : "row",
    alignItems : "center",
    paddingHorizontal : 10,
  }
})


export default App