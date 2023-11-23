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
  dataField,
  updataDatas,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAIqf-V36HFaxkG0xwee9GvsCSk16fk5po",
  authDomain: "test-5cf3b.firebaseapp.com",
  projectId: "test-5cf3b",
  storageBucket: "test-5cf3b.appspot.com",
  messagingSenderId: "453678311261",
  appId: "1:453678311261:web:57cd464eb142b96945aab4",
  measurementId: "G-N7B2248ZEK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot;
}

async function addDatas(collectionName, dataObj) {
  //문서 ID 부여
  // await setDoc(doc(db, "member", "member1"), dataObj);

  //문서 ID 자동
  await addDoc(collection(db, "member"), dataObj);
}

async function deleteDatas(collectionName, docId) {
    await deleteDoc(doc(db, collectionName, docId));
  }
  
  async function updateDatas(collectionName, docId, updateInfoObj) {
    const docRef = await doc(db, collectionName, docId);
    const docData = await getDoc(docRef);
    console.log(docData);
    debugger;
    // 문서 필드 데이터 수정
    await updateDoc(docRef, updateInfoObj);
  }

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  addDatas,
  deleteDoc,
  deleteDatas,
  updateDoc,
};
