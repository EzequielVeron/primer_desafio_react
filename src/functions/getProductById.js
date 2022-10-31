import React from "react";
import { Stack, Container, Row, Col, Button } from "react-bootstrap";
import firebaseApp from "../Firebase/credenciales";
import {getFirestore, updateDoc, doc, collection, getDocs, query, getDoc} from 'firebase/firestore';
import {db} from '../Firebase/credenciales';



const firestore = getFirestore(firebaseApp);



export const getItems= async ()  => {
  const colRef = collection(db, 'product');
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
};

const getArrayFromCollection = (collection) => {
  return collection.docs.map( doc => {
      return { ...doc.data (), id:doc.id };
  });
}


export const getItemById = async (id) => {
  const colRef = collection(db, 'product');
  const result = await getDoc(doc(colRef, id));
  return result.data();
}





  export default getItems;