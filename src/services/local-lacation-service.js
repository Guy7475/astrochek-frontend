import { utilService } from './util-service';
import { storageService } from './async-storage-service';

const KEY = 'location_db';

export const locationService = {
  query,
  getById,
  remove,
  save,
  getEmptyLocation,
  scssMsg,
  errMsg,
};

const gLocations = _createLocations();

async function query(filterBy = {}) {
  return storageService.query(KEY);
}

async function getById(_id) {
  return storageService.getById(KEY, _id);
}

async function remove(_id) {
  return storageService.remove(KEY, _id);
}

async function save(location) {
  return location._id ? storageService.put(KEY, location) : storageService.post(KEY, location);
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
  return Promise.resolve(
    {
      "keyExample": "valueExample"
    }
  );
}

function _createFakeLocations() {
  return [
    {
      title: "Kiryat Ono",
      lat: 32.05,
      long: 34.86
    },
    {
      title: "Beer Sheva",
      lat: 31.25,
      long: 34.79
    },
  ];
}

function scssMsg(msg) {
  let elModal = document.querySelector(".success-modal");
  console.log(elModal);
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