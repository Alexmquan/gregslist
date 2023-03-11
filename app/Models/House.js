import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.address = data.address
    this.sqft = data.sqft
    this.cost = data.cost
    this.description = data.description
    this.imgUrl = data.imgUrl

  }


  get HouseCard() {
    return `
    <div class="col-md-4 p-3">
    <div class="card rounded elevation-3">
      <img
        src="${this.imgUrl}"
        alt="" height="250">
      <div class="p-2 text-center">
        <h5>${this.bedrooms} Bed | ${this.bathrooms} Bath | ${this.sqft} sqft</h5>
        <h5>${this.address}</h5>
        <h5>Built: ${this.year} | Price: $${this.cost}</h5>
        <p class="text-start">Description: ${this.description}
        </p>
        <div class="text-end">
        <button class="btn btn-outline-danger" title="delete home" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete" ></i></button>
        </div>
      </div>
    </div>
  </div>`
  }

  static HouseForm() {
    return `
    <form onsubmit="app.housesController.createHouse()"
    class="row bg-light elevation-2 p-2 mt-3 rounded">
    <div class="col-6 col-md-4">
      <label for="year">Year Built</label>
      <input type="number" id="year" name="year" class="form-control" placeholder="ex. 1995" min="1500"
        max="2025" required>
    </div>
    <div class="col-md-4">
      <label for="bedrooms">Bedrooms</label>
      <input type="number" id="bedrooms" name="bedrooms" class="form-control" placeholder="# of Bed" min="0"
        max="50" required>
    </div>
    <div class="col-md-4">
      <label for="bathrooms">Bathrooms</label>
      <input type="number" id="bathrooms" name="bathrooms" class="form-control" placeholder="# of Bath" min="0"
        max="50" required>
    </div>
    <div class="col-md-6">
      <label for="sqft">Sq. Feet</label>
      <input type="number" id="sqft" name="sqft" class="form-control" min="0" max="20000" placeholder="Sqft"
        required>
    </div>
    <div class="col-md-6">
      <label for="cost">Price</label>
      <input type="number" id="cost" name="cost" class="form-control" min="0" max="50000000"
        placeholder="ex: 500000" required>
    </div>
    <div class="col-12">
      <label for="address">Address</label>
      <input type="text" id="address" name="address" class="form-control" minlength="5" maxlength="100"
        placeholder="Address">
    </div>
    <div class="col-12">
      <label for="description">Description</label>
      <input type="text" id="description" name="description" class="form-control" maxlength="100"
        placeholder="Describe your house">
    </div>
    <div class="col-12">
      <label for="imgUrl">Image URL</label>
      <input type="url" id="imgUrl" name="imgUrl" class="form-control" maxlength="300"
        placeholder="Image URL here">
    </div>
    <div class="p-2 text-end">
      <button type="button" class="btn">Cancel</button>
      <button class="btn btn-success">Submit</button>
    </div>
  </form>`
  }
}