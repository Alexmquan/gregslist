import { generateId } from "../Utils/generateId.js"
import { appState } from "../AppState.js"

export class Job {
  constructor(data) {
    this.id = generateId()
    this.type = data.type
    this.pay = data.pay
    this.labor = data.labor
    this.temporary = data.temporary
    this.description = data.description
    this.position = data.position
    this.imgUrl = data.imgUrl
  }

  get jobTemplate() {
    return `
    <div class="col-4">
    <div class="row">
      <div class="card text-center">
        <img
          src="${this.imgUrl}"
          alt="" height="200">
        <div class="col-12">
          <h5>${this.position} | ${this.type}</h5>
          <h5>Labor: ${this.labor} | Temp: ${this.temporary}</h5>
          <h5>Pay: ${this.pay}</h5>
          <p>Description: ${this.description}</p>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
        </div>
      </div>
    </div>
  </div>`
  }
}