import React, { useState, useEffect } from "react";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  orderBy,
  serverTimestamp,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";

const CTA = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // GRABBING DATA FROM FIRESTORE
  // Initializr Firebase Service
  const db = getFirestore();
  // firebase collection ref
  const colRef = collection(db, "justappin_users");

  // queries
  const q = query(colRef, orderBy("createdAt"));
  // the way with speicif artist/title/blah const q = query(colRef, where("author","==", "AUTHOR NAME"),orderBy("createdAt"));

  // get collection data
  getDocs(q)
    .then((snapshot) => {
      // console.log(snapshot.docs);
      let users = [];
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      console.log(users);
    })
    .catch((err) => {
      console.log(err.message);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    // ADD DOCUMENTS TO FIRESTORE
    addDoc(colRef, {
      name,
      company,
      email,
      phone,
      createdAt: serverTimestamp(),
    }).then(() => {
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
    });
  };

  return (
    <div id="cta">
      <h5 className="call-title">Contact</h5>
      <h4 className="call-text">Get in Touch</h4>
      <form onSubmit={handleSubmit} className="forms">
        <input
          className="form-input1"
          type="text"
          value={name}
          name="name"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-input2"
          type="text"
          value={company}
          name="company"
          placeholder="Your Company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          className="form-input3"
          type="email"
          value={email}
          name="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input4"
          type="tel"
          value={phone}
          name="phone"
          placeholder="Your Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default CTA;
