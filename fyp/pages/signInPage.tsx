import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'
import Home from './home'
import React from 'react'
import UserForm from '../components/forms/user'
import { useSession, signIn, signOut } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

function add(theForm: any, key: any, value: any) {
  // Create a hidden input element, and append it to the form:
  var br = document.createElement('br');
  br.id = 'br2';


  var label = document.createElement('label');
  label.htmlFor = key;
  label.innerHTML = "Institute: ";
  label.id = "Institute2";
  var input = document.createElement('select');
  // input.type = 'hidden';
  input.name = key; // 'the key/name of the attribute/field that is sent to the server
  input.value = value;
  input.id = key;
  var submit = document.getElementById("submit");
  theForm.insertBefore(input, submit);
  theForm.insertBefore(label, input);
  theForm.insertBefore(br, submit);
}

function remove(theForm: any, key: any) {
  var input = document.getElementById(key);
  var label = document.getElementById("Institute2");
  var br = document.getElementById("br2");
  theForm.removeChild(input);
  theForm.removeChild(label);
  theForm.removeChild(br);
}

export default function SignInPage() {

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [player, setPlayer] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<any>) => {
    const inputName = e.target.name
    const inputVal = e.target.value

    if (inputName === "name") {
        setName(inputVal)
    } else if (inputName === "email") {
        setEmail(inputVal)
    } else if (inputName === "password") {
        setPassword(inputVal)
    } else if (inputName === "player") {
      var foo = document.getElementById("player") as HTMLInputElement;
        if(foo.checked) {
          add(e.target.form, "institute", "institute")
        } else {
          remove(e.target.form, "institute")
        }
    }
  }

    return (
      <>
      <Head>
      <title>Admin Page</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.credCenter}>
          <div className={styles.credCard}>
            <div>
              <h1>Sign in</h1>
              <form>

                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email"/>
                <br/>

                <label htmlFor="password">Password: </label>
                <input type="text" id="password" name="password"/>
                <br/>

                <button type="submit">Submit</button>
                <br/>

              </form>

              <br/>
              <h2>Or</h2>
              <br/>

              <h2>Sign In with Connected Accounts</h2>
              {/* Add connected account login */}
              <button onClick={() => signIn("github")}>Sign in</button>

            </div>
            
            <div>
              <h1>Sign up</h1>
              <form key={"signUp"}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username"/>
                <br/>

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email"/>
                <br/>

                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password"/>
                <br/>

                <label htmlFor="cPassword">Confirm Password: </label>
                <input type="password" id="cPassword" name="cPassword"/>
                <br/>

                <label htmlFor="player">Are you a player?: </label>
                <input type="checkbox" id="player" name="player" onChange={handleChange}/>
                <br/>

                <br/>
                <br/>
                <button id="submit" type="submit">Submit</button>
                <br/>
              </form>
            </div>
          </div>
        </div>
      </main>
      </>
    )
}
