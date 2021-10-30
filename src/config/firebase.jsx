import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    // 各人の認証情報を記述
    apiKey: "AIzaSyCAF34hpjtI0nybowXVr9K7lqWw7cYASOs",
    authDomain: "chat-52937.firebaseapp.com",
    projectId: "chat-52937",
    storageBucket: "chat-52937.appspot.com",
    messagingSenderId: "321444361510",
    appId: "1:321444361510:web:30d2a8887ffc7c128b3de7"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

export default firebase