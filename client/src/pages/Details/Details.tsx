import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Text, Skeleton, SkeletonItem, Divider } from '@fluentui/react-components';
import { useDetailStyles } from './styles';
import rawData from '../../data/indian_food.json';
import DishImage from "./DishImage";
import useWikipediaSummary from './FetchSummary';
import type { DishesT } from '../../types/Dishes';


export default function Details() {
  const styles = useDetailStyles();
  const { id } = useParams();
  const [dish, setDish] = useState<DishesT | null>(null);
  const { summary, loading, error } = useWikipediaSummary(dish?.name);

  useEffect(() => {
    const numericId = Number(id);

    if (!isNaN(numericId) && rawData[numericId]) {
      setDish(rawData[numericId]);
    } else {
      setDish(null);
    }
  }, [id, rawData]);

  if (!dish) return <div>Dish not found</div>;  
  

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <div className={styles.left}>
            <div className={styles.dishDetails}>
              <h1>{dish.name}</h1>
              <div className={styles.dishDesc}>
                {loading && <Skeleton className={styles.skeleton} aria-label="Loading Content"><SkeletonItem /></Skeleton>}
                {error && <Text>{error}</Text>}
                {summary && <Text>{summary}</Text>}
              </div>
              <div className={styles.dishIngredients}>
                <Text>Ingredients:</Text>{' '}
                <Text>{dish.ingredients}</Text>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            {/* TODO: Image will come from backend if needed, Currently showing fallback error image */}
            <DishImage dishName={dish.name} imageUrl={dish.image} />
          </div>
        </div>
        <div className={styles.extraInfo}>
          <div className={styles.infoRow}>
            <div className={styles.infoItem}>
              <Text weight="semibold" size={400}>{dish.prep_time === -1 ? 'N/A' : `${dish.prep_time} mins`}</Text>
              <Text size={200}>Prep Time</Text>
            </div>
            <Divider vertical appearance="strong" className={styles.separator} />

            <div className={styles.infoItem}>
              <Text weight="semibold" size={400}>{dish.cook_time === -1 ? 'N/A' : `${dish.cook_time} mins`}</Text>
              <Text size={200}>Cook Time</Text>
            </div>
            <Divider vertical appearance="strong" className={styles.separator} />

            <div className={styles.infoItem}>
              <Text weight="semibold" size={400}>{dish.flavor_profile}</Text>
              <Text size={200}>Flavour</Text>
            </div>
            <Divider vertical appearance="strong" className={styles.separator} />

            <div className={styles.infoItem}>
              <Text weight="semibold" size={400}>{dish.course}</Text>
              <Text size={200}>Course</Text>
            </div>
            <Divider vertical appearance="strong" className={styles.separator} />

            <div className={styles.infoItem}>
              <Text weight="semibold" size={400}>{dish.diet}</Text>
              <Text size={200}>Diet</Text>
            </div>
          </div>

          <div className={styles.origin}>
            <div>
              <div className={styles.dishIngredients}>
                <Text>State:</Text>{' '}
                <Text>{dish.state === -1 ? 'Unknown' : dish.state}</Text>
              </div>
            </div>
            <div>
              <div className={styles.dishIngredients}>
                <Text>Region:</Text>{' '}
                <Text>{dish.region === -1 ? 'Unknown' : dish.region}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
