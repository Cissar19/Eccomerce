
import { initializeApp } from "firebase/app";
import { getFirestore,doc,getDoc, getDocs, collection, query,where} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBa5YUCtYzlXTHiWgjCMHK57zQV4QoZPew",
  authDomain: "dbentregafinal.firebaseapp.com",
  projectId: "dbentregafinal",
  storageBucket: "dbentregafinal.appspot.com",
  messagingSenderId: "989857798361",
  appId: "1:989857798361:web:fd656a5fb40dd54fe346c8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getSingleItem(itemid){
    const docRef = doc(db, "products", itemid)
    const snapshot = await getDoc(docRef)

    const docData = snapshot.data()
    docData.id = snapshot.id
    return docData
}
 
export async function getItems(){
    const productsCollection = collection(db, "products")
    const querySnapshot = await getDocs(productsCollection)

    const dataDocs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))
    return dataDocs
}


export async function getItemsByCategory(categoryid){
    const productsCollectionRef = collection(db,"products");
    const q = query(productsCollectionRef, where("category", "==", categoryid))
    const querySnapshot = await getDocs(q);
    const dataDocs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))
    return dataDocs
} 