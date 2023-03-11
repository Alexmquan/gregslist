import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // NOTE the type is Car but the [] tells it that it is an array of cars
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'toyota', model: 'tacoma', year: 2025, color: '#000', description: "It's so new, it doesn't exist yet", img: 'https://trailtacoma.com/wp-content/uploads/2022/03/Taco_Tuesday_Midnight_Black_tacoma07.jpg', price: 5 }),
    new Car({ make: 'Subaru', model: 'tsunami', year: 2027, color: '#16161d', description: "Cool car, cool color", img: 'https://www.cnet.com/a/img/resize/d028f516616211e789c534381db4ddcb742a3f0b/hub/2019/03/06/a84a4a02-09a1-4616-809d-3ca4c63fede1/subaru-viziv-adrenaline-concept-geneva-2019.jpg?auto=webp&fit=crop&height=675&width=1200', price: 12 })
  ]
  //DONE WITH TEST DATA moving to local

  cars = loadState('cars', [Car])

  /** @type {import('./Models/House').House[]} */

  houses = [
    new House({ year: 1990, bedrooms: 3, bathrooms: 2, address: '333 N scary Ln. spookyville, Idaho', sqft: 1500, cost: 200000, description: 'This is a good house to live in because it is a nice house', imgUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' }),
    new House({ year: 1990, bedrooms: 3, bathrooms: 2, address: '1933 W. Chesapeake Dr. Charleston, Idaho', sqft: 1500, cost: 200000, description: 'This is a good house to live in because it is a nice house', imgUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' })

  ]

  houses = loadState('houses', [House])

  /** @type {import('./Models/Job').Job[]} */

  jobs = [
    new Job({ type: 'Outdoors', pay: 40000, labor: 'yes', temporary: 'yes', description: 'pulling weeds from a very large estate', position: 'Head Gardener', imgUrl: 'https://images.unsplash.com/photo-1657664042448-c955b411d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FyZGVuZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' }),
    new Job({ type: 'IT', pay: 70000, labor: 'no', temporary: 'no', description: 'Fixing by broken website', position: 'Junior Web Developer', imgUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' })
  ]


  /** @type {import('./Models/House').House|null} */
  activeHouse = null

  /** @type {import('./Models/Job').Job|null} */
  activeJob = null
}


export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
