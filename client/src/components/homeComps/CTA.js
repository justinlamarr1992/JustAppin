import React, { useState, useEffect, useRef } from "react";

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

import emailjs from "@emailjs/browser";

const CTA = () => {
  const form = useRef();

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
      // console.log(users);
    })
    .catch((err) => {
      console.log(err.message);
    });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(name, company, email, phone);

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

    emailjs
      .sendForm(
        "service_jt33rcj",
        "template_4hjt8ag",
        form.current,
        "7oECvuwI7rBxcI-1K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="cta">
      <h2 className="call-title">Build My Site</h2>
      <h4 className="call-text">Get in Touch</h4>
      <form ref={form} onSubmit={sendEmail} className="forms">
        <input
          className="form-input1"
          type="text"
          value={name}
          name="user_name"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-input2"
          type="text"
          value={company}
          name="user_company"
          placeholder="Your Company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          className="form-input3"
          type="email"
          value={email}
          name="user_email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input4"
          type="tel"
          value={phone}
          name="user_phone"
          placeholder="Your Phone"
          onChange={(e) => setPhone(e.target.value)}
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
        <button className="form-button" type="submit" value="Send">
          Get My Website
        </button>
      </form>
    </section>
  );
};
export default CTA;
