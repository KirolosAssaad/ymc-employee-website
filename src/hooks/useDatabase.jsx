import { db } from "../firebase";

export function insert(collection, data) {
  return new Promise((resolve, reject) => {
    db.collection(collection).add(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}


export function get(collection, data) {
  return new Promise((resolve, reject) => {
    db.collection(collection).get(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
