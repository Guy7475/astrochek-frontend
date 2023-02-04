// import axios from 'axios'
import { utilService } from './util-service';
import { httpService } from './http-service';
import fontColorContrast from "font-color-contrast";


const KEY = 'generic_db';
const ENDPOINT = 'location';

// const BASE_URL =
// process.env.NODE_ENV !== 'development' ? '/api/location' : '//localhost:3030/api/location/'

export const locationService = {
  query,
  getById,
  remove,
  save,
  getEmptyLocation,
  scssMsg,
  errMsg,
};

async function query(filterBy = {}) {
  return await httpService.get(ENDPOINT, filterBy);
  // return axios.get(BASE_URL, { params: { filterBy } }).then((res) => res.data)
}

async function getById(_id) {
  return await httpService.get(`${ENDPOINT}/${_id}`);
  // return axios.get(BASE_URL + _id).then((res) => res.data)
}

async function remove(_id) {
  return await httpService.delete(`${ENDPOINT}/${_id}`);
  // return axios.delete(BASE_URL + _id).then((res) => res.data)
}

async function save(location) {
  return location._id
    ? await httpService.put(`${ENDPOINT}/${location._id}`, location)
    : await httpService.post(ENDPOINT, location);
}

function _createLocations() {
  let locations = utilService.loadFromStorage(KEY);
  if (!locations || !locations.length) {
    locations = _createFakeLocations();
    utilService.saveToStorage(KEY, locations);
  }
  return locations;
}

function getEmptyLocation() {
  return Promise.resolve({
    "title": "",
    "_id": null,
  });
}

function scssMsg(msg) {
  let elModal = document.querySelector(".success-modal");
  elModal.innerText = msg;
  elModal.style.visibility = 'visible';
  setTimeout(() => {
    elModal.style.visibility = 'hidden';
  }, 1500);
}

function errMsg(msg) {
  let elModal = document.querySelector(".error-modal");
  elModal.innerText = msg;
  elModal.style.visibility = 'visible';
  setTimeout(() => {
    elModal.style.visibility = 'hidden';
  }, 5000);
}

function _createFakeLocations() {
  return [
    {
      "title": "Body & Mind",
      "_id": utilService.makeId(),
      "createdAt": 1589983468418,
      "groups": [
        {
          "title": "fitness",
          "_id": utilService.makeId(),
          "color": "#8558ec",
          "isCollapsed": true,
          "tasks": [
            {
              "_id": utilService.makeId(),
              "title": "task 1",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            },
            {
              "_id": utilService.makeId(),
              "title": "task 2",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            },
            {
              "_id": utilService.makeId(),
              "title": "task 3",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            }
          ]
        },
        {
          "title": "food",
          "_id": utilService.makeId(),
          "color": "#7668ec",
          "isCollapsed": true,
          "tasks": [
            {
              "_id": utilService.makeId(),
              "title": "task 1",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            },
            {
              "_id": utilService.makeId(),
              "title": "task 2",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            },
            {
              "_id": utilService.makeId(),
              "title": "task 3",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            }
          ]
        },
        {
          "title": "health",
          "_id": utilService.makeId(),
          "color": "#8338ec",
          "isCollapsed": true,
          "tasks": [
            {
              "_id": utilService.makeId(),
              "title": "task 1",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            },
            {
              "_id": utilService.makeId(),
              "title": "task 2",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            },
            {
              "_id": utilService.makeId(),
              "title": "task 3",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            }
          ]
        }
      ]
    },
    {
      "title": "Programming",
      "_id": utilService.makeId(),
      "createdAt": 1589983468418,
      "groups": [
        {
          "title": "JS",
          "_id": utilService.makeId(),
          "color": "#8558ec",
          "isCollapsed": true,
          "tasks": [
            {
              "_id": utilService.makeId(),
              "title": "task 1",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            },
            {
              "_id": utilService.makeId(),
              "title": "task 2",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            },
            {
              "_id": utilService.makeId(),
              "title": "task 3",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            }
          ]
        },
        {
          "title": "Python",
          "_id": utilService.makeId(),
          "color": "#7668ec",
          "isCollapsed": true,
          "tasks": [
            {
              "_id": utilService.makeId(),
              "title": "task 1",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            },
            {
              "_id": utilService.makeId(),
              "title": "task 2",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            },
            {
              "_id": utilService.makeId(),
              "title": "task 3",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            }
          ]
        },
        {
          "title": "Projects",
          "_id": utilService.makeId(),
          "color": "#8338ec",
          "isCollapsed": true,
          "tasks": [
            {
              "_id": utilService.makeId(),
              "title": "task 1",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            },
            {
              "_id": utilService.makeId(),
              "title": "task 2",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            },
            {
              "_id": utilService.makeId(),
              "title": "task 3",
              "dateAdded": "2022-02-28T21:00:00.000Z",
              "dueDate": "2022-03-28T21:00:00.000Z",
              "dateDone": "",
              "isDone": false,
              "isCollapsed": true,
            }
          ]
        }
      ]
    }
  ];
}





