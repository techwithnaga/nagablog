// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nagablog-be2b9.firebaseapp.com",
  projectId: "nagablog-be2b9",
  storageBucket: "nagablog-be2b9.appspot.com",
  messagingSenderId: "754413952438",
  appId: "1:754413952438:web:e0bf5aede93fed0337f517",
  measurementId: "G-DZBC6B9ZBZ",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export const uploadImage = (file, fileName) => {
  return new Promise((resolve) => {
    console.log("UPLOADING : " + fileName);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    // uploadImageAsPromise(e.target.files[i], newName);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // setValues({ ...values, [name]: [...values.] });
          resolve(downloadURL);
        });
      }
    );
  });
};

export const deleteImage = (fileName) => {
  return new Promise((resolve) => {
    const desertRef = ref(storage, fileName);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        resolve("success");
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error);
      });
  });
};
