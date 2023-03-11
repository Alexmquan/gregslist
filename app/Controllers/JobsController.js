import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { jobsService } from "../Services/JobsService.js";

function _drawJobs() {
  let jobs = appState.jobs
  template = ''
  jobs.forEach(j => template += j.jobTemplate)
  setHTML('listings', template)
}

function _drawJobForm() {

}
export class JobsController {
  constructor() {
    _drawJobs(
      appState.on('cars', _)
    )
  }

  create
  // showJobs() {
  //   _drawJobs()
  // }

}