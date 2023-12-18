// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvz8Qisd87WKhBx4cCUAyBaR23F2RVY7U",
  authDomain: "project0304-3ae26.firebaseapp.com",
  projectId: "project0304-3ae26",
  storageBucket: "project0304-3ae26.appspot.com",
  messagingSenderId: "994782413522",
  appId: "1:994782413522:web:1f5124361af658d00fa30b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getDatas(collectionName, options) {
  // throw new Error("에러가 아니라 기능입니다.");
  // const querySnapshot = await getDocs(collection(db, collectionName));
  let docQuery;
  if (options.lq === undefined) {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      limit(options.limit)
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      startAfter(options.lq),
      limit(options.limit)
    );
  }
  const querySnapshot = await getDocs(docQuery);

  //쿼리 query
  //orderBy, limit, startAfter
  const result = querySnapshot.docs;
  const lastQuery = result[result.length - 1];

  //[snapshot1, snapshot2, 000,snapshot10];
  //result[0].data();
  const reviews = result.map((doc) => doc.data());

  const option = "";

  return { reviews, lastQuery };
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
};
