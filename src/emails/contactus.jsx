import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import * as React from "react";

export default function Email(firstName,lastName,email,phoneNumber,message) {
  return (
    <Html>
      <h2>Cet e-mail vient de Contact-Us</h2>
              <p>Voila les infos :</p>
              <ul>
              <li><strong>Prenom: </strong> {{ firstName }}</li>
              <li><strong>Nom: </strong> {{ lastName }}</li>\
              <li><strong>Email: </strong> {{ email }}</li>\
              <li><strong>Telephone: </strong> {{ phoneNumber }}</li>
              <li><strong>Message: </strong> {{ message }}</li>
              </ul>\
              <p>- The B2Academy Team</p>'
    </Html>
  );
}

