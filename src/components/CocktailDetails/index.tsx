import React, { FC } from 'react'
import Image from 'next/image'

import { Drink } from '../../../pages/api/types'
import styles from './CocktailDetails.module.css'

type CocktailDetailsProps = {} & Drink

const CocktailDetails: FC<CocktailDetailsProps> = ({
  strDrink,
  strImageSource,
  strDrinkThumb,
  strInstructions,
  strCategory,
  stringredient1,
  stringredient2,
  stringredient3,
  stringredient4,
  stringredient5,
  stringredient6,
  stringredient7,
  stringredient8,
  stringredient9,
  stringredient10,
  stringredient11,
}) => {
  const imageSrc = strImageSource || strDrinkThumb
  const ingredients = [
    stringredient1,
    stringredient2,
    stringredient3,
    stringredient4,
    stringredient5,
    stringredient6,
    stringredient7,
    stringredient8,
    stringredient9,
    stringredient10,
    stringredient11,
  ].filter((i) => i)

  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <h1>
          {strDrink} {strCategory ? ` - ${strCategory}` : ''}
        </h1>
        <Image
          src={imageSrc}
          alt="cocktail image"
          width={450}
          height={450}
          layout="fixed"
        />
      </div>

      <div className={styles.details}>
        <h2>Instructions</h2>
        <p>{strInstructions}</p>
        {ingredients.length > 0 && (
          <div>
            <h2>Ingredients</h2>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default CocktailDetails
