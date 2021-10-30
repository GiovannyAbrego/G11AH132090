import React, {useState, useEffect} from 'react'; 
import {StyleSheet, View, ScrollView, Alert} from 'react-native'; 
import moment from 'moment'; 
import AddBirthday from './AddBirthday'; 
import ActionBar from './ActionBar'; 
import Birthday from './Birthday'; 
import firebase from '../utils/firebase'; 
import 'firebase/firestore'; 

firebase.firestore().settings({experimentalForceLongPolling: true}); 
const db = firebase.firestore(firebase); 

export default function ListBirthday(props){
    const {user}=props;
    const [showList, setShowList] = useState(true); 
    const [birthday, setBirthday] = useState([]); 
    const [pasatBirthday, setPasatBirthday] = useState([]); 
    const [reloadData, setReloadData] = useState(false)

    useEffect(()=>{
        setBirthday([]);
        setPasatBirthday([]);
        db.collection(user.uid)
            .orderBy('dateBirth','asc')
            .get()
            .then((response)=>{
                const itemsArray=[];
                response.forEach((doc)=>{
                    const data = doc.data();
                    data.id = doc.id;
                    itemsArray.push(data);
                })
            })
    });
}