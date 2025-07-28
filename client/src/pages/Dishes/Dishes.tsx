import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, Dropdown, Option, mergeClasses, Button } from '@fluentui/react-components';
import { ChevronRightRegular, ChevronLeftRegular,TextSortAscendingRegular, TextSortAscendingFilled, TextSortDescendingFilled } from "@fluentui/react-icons";
import { useDishesStyles } from './styles';
import type { DishesT } from '../../types/Dishes';
import rawData from '../../data/indian_food.json';
import { normalizeData } from '../../utils/normalizeData';


const Dishes = () => {
  const navigate = useNavigate();
  const styles = useDishesStyles();
  const dishesData = normalizeData(rawData);
  const [dishes, _] = useState<DishesT[]>(dishesData);
  const [sortBy, setSortBy] = useState<'name' | 'prep_time' | 'cook_time' | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [filters, setFilters] = useState({
    diet: '',
    flavor_profile: '',
    state: '',
    region: '',
    course: ''
  });

  const filteredDishes = useMemo(() => {
    return dishes.filter((recipe) => {
      return (
        (!filters.diet || recipe.diet === filters.diet) &&
        (!filters.flavor_profile || recipe.flavor_profile === filters.flavor_profile) &&
        (!filters.state || recipe.state === filters.state) &&
        (!filters.region || recipe.region === filters.region) &&
        (!filters.course || recipe.course === filters.course)
      );
    });
  }, [dishes, filters]);


  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortBy, sortDirection]);

  const handleSortChange = (key: 'name' | 'prep_time' | 'cook_time') => {
    if (sortBy === key) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(key);
      setSortDirection('asc');
    }
  };

  const displayedDishes = useMemo(() => {
    const sorted = [...filteredDishes];
    if (sortBy) {
      sorted.sort((a, b) => {
        const aVal = a[sortBy];
        const bVal = b[sortBy];

        if (aVal === null && bVal === null) return 0;
        if (aVal === null) return 1;
        if (bVal === null) return -1;

        if (typeof aVal === 'string' && typeof bVal === 'string') {
          return sortDirection === 'asc'
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        }

        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
        }

        return 0;
      });
    }
    return sorted;
  }, [filteredDishes, sortBy, sortDirection]);


  const paginatedDishes = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return displayedDishes.slice(start, start + itemsPerPage);
  }, [displayedDishes, currentPage]);

  const indexMap = useMemo(() => {
    const map = new Map();
    dishesData.forEach((dish, i) => map.set(dish.name, i));
    return map;
  }, [dishesData]);

  const handleDishDisplay = (name: string, id: string) => {
    navigate(`/details/${name}/${id}`);
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Dishes</h2>

        {/* Filters */}
        <div className={styles.filterWrapper}>
          {['diet', 'flavor_profile', 'state', 'region', 'course'].map((field) => (
            <Dropdown
              listbox={{ className: styles.dropdownList }}
              key={field}
              placeholder={`Filter by ${field}`}
              value={filters[field as keyof typeof filters]}
              onOptionSelect={(_, data) => {
                setFilters((prev) => ({ ...prev, [field]: data.optionValue || '' }));
              }}
            >
              <Option value="">All</Option>
              {[...new Set(dishesData.map((r) => r[field as keyof typeof filters]))]
                .filter((val) => val !== '' && val !== null && val !== undefined)
                .map((val) => (
                  <Option key={val} value={String(val)}>{String(val)}</Option>
                ))}
            </Dropdown>
          ))}
        </div>

        {/* Table */}
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <Table sortable aria-label="Recipe table" className={styles.table}>
              <TableHeader>
                <TableRow className={styles.tableRow}>
                  <TableHeaderCell
                    className={mergeClasses(styles.tableHeading, styles.sortable)}
                    onClick={() => handleSortChange('name')}>
                    Dish Name
                    {sortBy === 'name' ? (
                      sortDirection === 'asc' ? <TextSortAscendingFilled /> : <TextSortDescendingFilled />
                    ) : (
                      <TextSortAscendingRegular style={{ opacity: 0.4 }} />
                    )}
                  </TableHeaderCell>
                  <TableHeaderCell className={styles.tableHeading}>Diet</TableHeaderCell>
                  <TableHeaderCell
                    className={mergeClasses(styles.tableHeading, styles.sortable)}
                    onClick={() => handleSortChange('prep_time')}>
                    Prep Time
                    {sortBy === 'prep_time' ? (
                      sortDirection === 'asc' ? <TextSortAscendingFilled /> : <TextSortDescendingFilled />
                    ) : (
                      <TextSortAscendingRegular style={{ opacity: 0.4 }} />
                    )}
                  </TableHeaderCell>
                  <TableHeaderCell
                    className={mergeClasses(styles.tableHeading, styles.sortable)}
                    onClick={() => handleSortChange('cook_time')}>
                    Cook Time
                    {sortBy === 'cook_time' ? (
                      sortDirection === 'asc' ? <TextSortAscendingFilled /> : <TextSortDescendingFilled />
                    ) : (
                      <TextSortAscendingRegular style={{ opacity: 0.4 }} />
                    )}
                  </TableHeaderCell>
                  <TableHeaderCell className={styles.tableHeading}>Flavor</TableHeaderCell>
                  <TableHeaderCell className={styles.tableHeading}>Course</TableHeaderCell>
                  <TableHeaderCell className={styles.tableHeading}>State</TableHeaderCell>
                  <TableHeaderCell className={styles.tableHeading}>Region</TableHeaderCell>
                </TableRow>
              </TableHeader>
            </Table>
          </div>
          <div className={styles.tableBodyWrapper}>
            <Table className={styles.table}>
              <TableBody>
                {paginatedDishes.map((recipe, idx) => (
                  <TableRow key={idx} onClick={() => handleDishDisplay(recipe.name, indexMap.get(recipe.name))} className={styles.tableBodyRow}>
                    <TableCell className={styles.tableBody}>{recipe.name}</TableCell>
                    <TableCell className={styles.tableBody}>{recipe.diet}</TableCell>
                    <TableCell className={styles.tableBody}>{recipe.prep_time != null ? `${recipe.prep_time} mins` : ''}</TableCell>
                    <TableCell className={styles.tableBody}>{recipe.cook_time != null ? `${recipe.cook_time} mins` : ''}</TableCell>
                    <TableCell className={styles.tableBody}>{recipe.flavor_profile}</TableCell>
                    <TableCell className={styles.tableBody}>{recipe.course}</TableCell>
                    <TableCell className={styles.tableBody}>{recipe.state}</TableCell>
                    <TableCell className={styles.tableBody}>{recipe.region}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination */}
        <div className={styles.paginationWrapper}>
          <Button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          ><ChevronLeftRegular /></Button>
          <span>{currentPage} of {Math.ceil(filteredDishes.length / itemsPerPage)}</span>
          <Button
            disabled={currentPage === Math.ceil(filteredDishes.length / itemsPerPage)}
            onClick={() => setCurrentPage(currentPage + 1)}
          ><ChevronRightRegular /></Button>
        </div>
      </div>
    </div>
  );
};

export default Dishes;