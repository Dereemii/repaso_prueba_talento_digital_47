import firebase from 'firebase';
import {firebaseConfig} from './firebaseConf.js'

export const firebaseApp = firebase.initializeApp(firebaseConfig)