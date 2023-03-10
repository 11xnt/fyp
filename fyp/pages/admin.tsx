import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'
import Head from 'next/head'
import { useState } from 'react'
import React from 'react'
import TournamentForm from '../components/forms/tournament'
import TeamForm from '../components/forms/team'
import GameForm from '../components/forms/game'
import UserForm from '../components/forms/user'
import InstituteForm from '../components/forms/institute'


export default function Admin() {

		return (
			<>
				<Head>
					<title>Admin Page</title>
					<meta name="description" content="Generated by create next app" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<main>
				<Menu/>
				<div className={styles.container}>
					<div className={`${styles.containerItem} ${styles.containerItem4}`}>
						<h2>Add Tournament</h2>
						<TournamentForm/>
					</div>

					<div className={`${styles.containerItem} ${styles.containerItem3}`}>
						<h2>Insert Team</h2>
						{/* {insert form} */}
						<TeamForm/>
					</div>

					<div className={`${styles.containerItem} ${styles.containerItem3}`}>
						<h2>Insert User</h2>
						{/* {insert form} */}
						<UserForm/>
					</div>

					<div className={`${styles.containerItem} ${styles.containerItem3}`}>
						<h2>Insert Game</h2>
						<GameForm/>
					</div>

					<div className={`${styles.containerItem} ${styles.containerItem3}`}>
						<h2>Insert Institute</h2>
						<InstituteForm/>
					</div>
				</div>
				</main>
			</>
		)
	}