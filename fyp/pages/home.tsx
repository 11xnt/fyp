import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'
import TournamentCard from '../components/tournamentCard'
import Head from 'next/head'
import PlayerCard from '../components/playerCard'

const tourCardList = [1, 2, 3]
const teamCardList = [1, 2, 3, 4, 5, 6]

export default function Home() {
		return (
			<>
				<Head>
					<title>Home Page</title>
					<meta name="description" content="Generated by create next app" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Menu/>
				<main className={styles.main}>
				<h2>Featured Tournaments</h2>
					<div className={styles.grid}>
					{
						tourCardList.map(() => <TournamentCard key={""}/>)
					}
					</div>
				<h2>Recommended Players</h2>
					<div className={styles.grid}>
					{
						teamCardList.map(() => <PlayerCard key={""}/>)
					}
					</div>
				</main>
			</>
		)
	}