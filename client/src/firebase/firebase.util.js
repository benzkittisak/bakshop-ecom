import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Firebase Configuration
const config = {
  apiKey: "AIzaSyACRZ8EMw90TTnHCqqgWtk8U1EPqJjlsFk",
  authDomain: "plant-ecom.firebaseapp.com",
  projectId: "plant-ecom",
  storageBucket: "plant-ecom.appspot.com",
  messagingSenderId: "959610779882",
  appId: "1:959610779882:web:69a9c09c4cc705b29ebf93",
};

export const createProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating account ", error.message);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((res, rej) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      res(userAuth);
    }, rej);
  });
};

export const createOrderDocument = async (userAuth, orderData) => {
  if (!orderData) return;
  const orderedAt = new Date();
  let amount = 0;
  orderData.map(({ price, quantity }) => {
    amount += price * quantity;
  });
  const orderRef = firestore
    .collection("orders")
    .doc(`${userAuth.id}`)
    .collection("my_order")
    .doc();
  try {
    await orderRef.set({
      orderNo: Date.now(),
      date: orderedAt,
      deliveryAddress: userAuth.address ? userAuth.address : "",
      amount: amount,
      status: [{ statusName: "pending" }],
      orderItems: orderData.map((item) => item),
    });
  } catch (error) {
    console.log("error adding order : ", error.message);
  }

  return;
};

export const updateProfileDocument = async (userAuth) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.id}`);
  const snapShot = await userRef.get();
  if (snapShot.exists) {
    try {
      let { displayName, email, phoneNumber, image } = userAuth;
      if (!image) image = "";
      userRef.set({
        ...snapShot.data(),
        displayName,
        email,
        phoneNumber,
        image,
      });
    } catch (error) {
      console.log("error updating data ", error.message);
    }
  }

  return userAuth;
};

export const updateProfileImage = async (userAuth, imageFile) => {
  if (!userAuth || !imageFile) return;
  const userRef = firestore.doc(`users/${userAuth.id}`);
  const snapShot = await userRef.get();

  if(!imageFile) {
    console.error('ไม่พบรูปภาพ กรุณาเลือกรูปภาพก่อนอัปโหลด');
    return;
  }

  const uploadTask = storage.ref(`images/${userAuth.id}/${imageFile.name}`).put(imageFile);

  uploadTask.on('state_changed' , (snapShot) => {
    // console.log(snapShot);
  } , error => {
    console.log(error);
  } , () => {
    storage.ref('images').child(userAuth.id).child(imageFile.name).getDownloadURL()
    .then(firebaseUrl => {
      if (snapShot.exists) {
        try {
          userRef.set({
            ...snapShot.data(),
            image:firebaseUrl
          })
          return {...userAuth , image:firebaseUrl}
        } catch (error) {
          console.log("cannot updating profile image ", error.message);
        }
      }
    })
  })  
  return userAuth
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();

googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
