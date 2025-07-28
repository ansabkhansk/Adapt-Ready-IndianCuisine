import { useState, useMemo, useEffect } from "react";
import { TagPicker, TagPickerList, TagPickerControl, TagPickerInput, TagPickerGroup, TagPickerOption, Button, Tag, Avatar, useTagPickerFilter, Text, List, ListItem } from '@fluentui/react-components';
import type { TagPickerProps } from '@fluentui/react-components';
import { } from "@fluentui/react-icons";
import { useDishSuggesterStyles } from './styles';
import type { DishesT } from '../../types/Dishes';
import rawData from '../../data/indian_food.json';
import { normalizeData } from '../../utils/normalizeData';


const extractUniqueIngredients = (data: DishesT[]): string[] => {
  const allIngredients = data.flatMap((dish) =>
    dish.ingredients.split(",").map((item) => item.trim())
  );
  return Array.from(new Set(allIngredients));
};

export default function DishSuggest() {
  const styles = useDishSuggesterStyles();
  const [query, setQuery] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [matchedDishes, setMatchedDishes] = useState<DishesT[]>([]);
  const dishesData = normalizeData(rawData);


  useEffect(() => {
    getMatchingDishes();
  }, [selectedItems]);

  // Filter available options
  const ingredientOptions = extractUniqueIngredients(rawData);

  const indexMap = useMemo(() => {
    const map = new Map();
    dishesData.forEach((dish, i) => map.set(dish.name, i));
    return map;
  }, [dishesData]);

  const onOptionSelect: TagPickerProps["onOptionSelect"] = (_, data) => {
    if (data.value === "no-matches") {
      return;
    }
    setSelectedItems(data.selectedOptions);
    setQuery("");
  };

  const handleAllClear: React.MouseEventHandler = (_) => {
    setSelectedItems([]);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const getMatchingDishes = (): void => {
    const selectedSet = new Set(selectedItems.map(item => item.toLowerCase()));

    const matchedData = dishesData.filter((dish) => {
      const dishIngredients = dish.ingredients
        .split(',')
        .map((i) => i.trim().toLowerCase());

      return dishIngredients.every((ingredient) => selectedSet.has(ingredient));
    });

    setMatchedDishes(matchedData);
  };

  const children = useTagPickerFilter({
    query,
    options: ingredientOptions,
    noOptionsElement: (
      <TagPickerOption value="no-matches">
        We couldn't find any matches
      </TagPickerOption>
    ),
    renderOption: (option) => (
      <TagPickerOption
        media={
          <Avatar shape="square" aria-hidden name={option} color="colorful" />
        }
        key={option}
        value={option}
        className={styles.pickItemOption}
      >
        {option}
      </TagPickerOption>
    ),

    filter: (option) =>
      !selectedItems.includes(option) &&
      option.includes(query.toLowerCase())
  });

  const handleDishDisplay = (name: string, id: string) => {
    window.open(`/details/${name}/${id}`, '_blank');
  }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Dish Suggester</h2>

        <div className={styles.suggestionBox}>
          <TagPicker
            selectedOptions={selectedItems}
            onOptionSelect={onOptionSelect}
            size="extra-large"
          >
            <TagPickerControl
              secondaryAction={
                <Button
                  appearance="transparent"
                  size="small"
                  shape="rounded"
                  onClick={handleAllClear}
                  className={styles.clearButton}
                >
                  All Clear
                </Button>
              }
            >
              <TagPickerGroup aria-label="Selected Ingredients">
                {selectedItems.map((option) => (
                  <Tag
                    key={option}
                    shape="rounded"
                    media={<Avatar aria-hidden name={option} color="colorful" />}
                    value={option}
                    className={styles.selectedTag}
                  >
                    {option}
                  </Tag>
                ))}
              </TagPickerGroup>
              <TagPickerInput
                aria-label="Select Ingredients"
                onChange={(e) => handleInput(e)}
                placeholder={selectedItems.length === 0 ? "Select Ingredients" : ""}
              />
            </TagPickerControl>
            <TagPickerList className={styles.listWrapper}>{children}</TagPickerList>
          </TagPicker>
        </div>

        <Text size={400} weight="semibold">Suggested Dishes</Text>

        <List className={styles.suggestDishesListContaienr}>
          {matchedDishes.length > 0 ? (
            matchedDishes.map((dish) => (
              <ListItem
                key={dish.name}
                className={styles.suggestDishItem}
                onClick={() => handleDishDisplay(dish.name, indexMap.get(dish.name))}
              >
                <Text>{dish.name}</Text>
              </ListItem>
            ))
          ) : (
            <ListItem>
              <Text>No dishes found</Text>
            </ListItem>
          )}
        </List>
      </div>
    </div>
  )
}