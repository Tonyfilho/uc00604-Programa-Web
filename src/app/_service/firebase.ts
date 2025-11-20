
// Importe outros serviços conforme necessário

import { Injectable } from "@angular/core";
import { key } from "./key";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

 
@Injectable({
  providedIn: 'root',
})
export class Firebase {
  private app;
  public auth;
  public firestore;
  public storage;
 
  constructor() {
    const firebaseConfig = {
      apiKey: key,
      authDomain: 'get-starting-environment.firebaseapp.com',
      projectId: 'get-starting-environment',
      storageBucket: 'get-starting-environment.firebasestorage.app',
      messagingSenderId: '223284266927',
      appId: '1:223284266927:web:46cfc8da479d5e5695d15a',
    };
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }
}