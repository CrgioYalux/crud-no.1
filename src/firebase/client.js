import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjkJr94tJ6CoASKDdqwzfEYDbwe9v22ws",
  authDomain: "crud-number-one.firebaseapp.com",
  projectId: "crud-number-one",
  storageBucket: "crud-number-one.appspot.com",
  messagingSenderId: "891452723291",
  appId: "1:891452723291:web:e8c2f990a7c7fc58076f7e",
  measurementId: "G-NN74LL1N3P"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const addTask = (task) => {
    const {content, priority, createdAt} = task
    return db.collection('tasks').add({
        content,
        priority,
        createdAt
    })
}

export const deleteTask = (id) => {
    return db.collection('tasks').doc(id).delete()
}

export const editTask = (id, newTask) => {
    return db.collection('tasks').doc(id).update({...newTask})
}

export const fetchTasks = () => {
    return db.collection('tasks')
        .get()
        .then(({docs}) => {
            return docs.map(doc => {
                const data = doc.data()
                const id = doc.id
                return {
                    ...data,
                    id
                }
            })
        })
}