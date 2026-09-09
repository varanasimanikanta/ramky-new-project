import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR8VaMxL8_9CXJGwdxzyDCZ7ngMkPlPdQ",
  authDomain: "ramky-infrastructure.firebaseapp.com",
  projectId: "ramky-infrastructure",
  storageBucket: "ramky-infrastructure.firebasestorage.app",
  messagingSenderId: "354063760413",
  appId: "1:354063760413:web:89d480b9b09413ea949af4",
  measurementId: "G-FW8WCSG8D9",
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);

export function initializeFirebaseAnalytics() {
  if (typeof window === "undefined") return;

  void isSupported()
    .then((supported) => {
      if (supported) getAnalytics(firebaseApp);
    })
    .catch(() => undefined);
}
