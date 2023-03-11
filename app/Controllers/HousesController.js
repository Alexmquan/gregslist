import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { House } from "../Models/House.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { housesService } from "../Services/HousesService.js";


function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

function _drawHouseForm() {
  setHTML('form', House.HouseForm())
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded', appState.houses);
    _drawHouses()
    appState.on('houses', _drawHouses)
    this.showHouses()
  }

  showHouses() {
    console.log("show Houses")
    _drawHouses()
    _drawHouseForm()
  }

  createHouse() {
    event.preventDefault()
    const form = event.target
    console.log("testing createHouse in housecontroller")
    let formData = getFormData(form)
    console.log(formData)
    housesService.createHouse(formData)
    form.reset()
  }

  async deleteHouse(id) {
    if (await Pop.confirm('Do you really want to remove your home listing?')) {
      housesService.deleteCar(id)
      Pop.toast('Home Deleted', 'success')
    }
  }
}