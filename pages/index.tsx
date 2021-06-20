import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import cache from '../src/cache'
import CocktailDetails from '../src/components/CocktailDetails'
import styles from '../styles/Home.module.css'
import { Drink } from './api/types'

export default function Home(props: { drink: Drink }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drink of the day</title>
        <meta name="description" content="Recommended drink of the day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to drink of the day</h1>
        <p className={styles.description}>
          NextJS app to suggest a cocktail hitting{' '}
          <a href="https://www.thecocktaildb.com/api.php?" target="_blank">
            thecocktaildb API
          </a>{' '}
          and caching the value in redis
        </p>
        <CocktailDetails {...props.drink} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const cocktailKey = new Date().toDateString()
  const expires = process.env.EXPIRES_IN
    ? parseInt(process.env.EXPIRES_IN, 10)
    : 60 * 60 * 24

  const fetcher = async () => {
    const drinks = await fetch('http://localhost:3000/api/drinks')
    const drinksJson = await drinks.json()
    return drinksJson
  }
  console.log('cocktailKey', cocktailKey)
  const response = await cache.fetch(cocktailKey, fetcher, expires)
  return {
    props: {
      drink: response.drinks[0],
    },
  }
}
