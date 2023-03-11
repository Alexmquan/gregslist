import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js"

function _saveHouses() {
  saveState('houses', appState.houses)
}
class HousesService {
  createHouse(formData) {
    let house = new House(formData)

    appState.houses.push(house)
    appState.emit('houses')
    _saveHouses()
  }

  deleteHouse(id) {

    let savedHouses = appState.houses.filter(h => h.id != id)
    console.log('savedHome')
    appState.houses = savedHouses
    _saveHouses()
    // appState.emit('houses')
  }
}

export const housesService = new HousesService()