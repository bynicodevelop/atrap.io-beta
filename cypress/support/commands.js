import "cypress-file-upload"

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/firestore"
import { attachCustomCommands } from "cypress-firebase"

const fbConfig = {
  apiKey: Cypress.env("apiKey"),
  authDomain: `${Cypress.env("appId")}.firebaseapp.com`,
  databaseURL: `https://${Cypress.env("appId")}.firebaseio.com`,
  projectId: Cypress.env("appId"),
  storageBucket: `${Cypress.env("appId")}.appspot.com`,
}

firebase.initializeApp(fbConfig)

attachCustomCommands({ Cypress, cy, firebase })
