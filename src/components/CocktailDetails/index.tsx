import React, { FC } from 'react'
import Image from 'next/image'

import { Drink } from '../../../pages/api/types'
import styles from './CocktailDetails.module.css'

type CocktailDetailsProps = {} & Drink

const concatIngredient = (ingredient?: string, measure?: string) => {
  return ingredient ? `${ingredient} - ${measure}` : null
}

const CocktailDetails: FC<CocktailDetailsProps> = ({
  strDrink,
  strImageSource,
  strDrinkThumb,
  strInstructions,
  strCategory,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strIngredient7,
  strIngredient8,
  strIngredient9,
  strIngredient10,
  strIngredient11,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
  strMeasure6,
  strMeasure7,
  strMeasure8,
  strMeasure9,
  strMeasure10,
  strMeasure11,
}) => {
  const imageSrc = strImageSource || strDrinkThumb
  const ingredients = [
    concatIngredient(strIngredient1, strMeasure1),
    concatIngredient(strIngredient2, strMeasure2),
    concatIngredient(strIngredient3, strMeasure3),
    concatIngredient(strIngredient4, strMeasure4),
    concatIngredient(strIngredient5, strMeasure5),
    concatIngredient(strIngredient6, strMeasure6),
    concatIngredient(strIngredient7, strMeasure7),
    concatIngredient(strIngredient8, strMeasure8),
    concatIngredient(strIngredient9, strMeasure9),
    concatIngredient(strIngredient10, strMeasure10),
    concatIngredient(strIngredient11, strMeasure11),
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
          <>
            <h2>Ingredients</h2>
            <ul className={styles.alignLeft}>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}

export default CocktailDetails
