import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD7bhsCQdoF8hWooTnuyRXVt_GMnM6sf2g',
	authDomain: 'beer-store-db.firebaseapp.com',
	databaseURL: 'https://beer-store-db.firebaseio.com',
	projectId: 'beer-store-db',
	storageBucket: 'beer-store-db.appspot.com',
	messagingSenderId: '375992864022',
	appId: '1:375992864022:web:7a4dd6ff413ef079b35437',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
