import { useState, useMemo, useEffect, useRef } from 'react';
import { SearchBox, Link, Avatar, Image, Menu, MenuTrigger, MenuList, MenuItem, MenuPopover, MenuItemLink, PopoverSurface, PopoverTrigger, Popover } from '@fluentui/react-components';
import type { SearchBoxChangeEvent, InputOnChangeData } from '@fluentui/react-components';
import { ArrowExitRegular, bundleIcon, PersonInfoRegular, PersonInfoFilled, ArrowExitFilled, PeopleTeamRegular, PeopleTeamFilled } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';
import rawData from '../../data/indian_food.json';
import { userHeaderStyles } from './styles';
import type { HeaderProps } from '../../types/Header';
import type { DishesT } from '../../types/Dishes';

import { useAuth } from '../../context/AuthContext';


const AvatarWithMenu = (userName: string ) => {
  const { logout, user } = useAuth();
  const styles = userHeaderStyles();

  const onLogout = () => {
    console.log('Logging out...');
    logout();
  };

  console.log(user)
  // user.role = 'viewer';

  const PersonIcon = bundleIcon(PersonInfoFilled, PersonInfoRegular);
  const ArrowExitIcon = bundleIcon(ArrowExitFilled, ArrowExitRegular);
  const PeopleIcon = bundleIcon(PeopleTeamFilled, PeopleTeamRegular);

  return (
    <Menu hasIcons openOnHover hoverDelay={0}>
      <MenuTrigger>
        <div className={styles.avatarWrapper} style={{ cursor: 'pointer' }}>
          <Avatar name={userName || ''} size={40} />
        </div>
      </MenuTrigger>
      <MenuPopover className={styles.menuPopover}>
        <MenuList>
          {/* TODO: View User Profile and able to edit */}
          {/* <MenuItemLink className="menuItems" href='/profile' icon={<PersonIcon />}>View Profile</MenuItemLink> */}
          {/* TODO: Add admin and manager roles */}
          {/* {(user?.role === 'admin' || user?.role === 'manager') && <MenuItemLink className="menuItems" href='/viewUser' icon={<PeopleIcon />}>Users</MenuItemLink>} */}
          <MenuItem className="menuItems"  onClick={onLogout} icon={<ArrowExitIcon />}>Logout</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};


const DishSearch = () => {
  const dishesData: DishesT[] = rawData;
  const styles = userHeaderStyles();
  const [query, setQuery] = useState<string>('');
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const navigate = useNavigate();
  const justNavigatedRef = useRef(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const indexMap = useMemo(() => {
    const map = new Map();
    dishesData.forEach((dish, i) => map.set(dish.name, i));
    return map;
  }, [dishesData]);

  const filteredDishes = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return [];

    return dishesData.filter((dish) => {
      return (
        dish.name.toLowerCase().includes(q) ||
        dish.ingredients.toLowerCase().includes(q) ||
        (dish.state ?? '').toString().toLowerCase().includes(q)
      );
    });
  }, [debouncedQuery]);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedQuery(query), 200);
    return () => clearTimeout(timeout);
  }, [query]);


  const onChange : (event: SearchBoxChangeEvent, data: InputOnChangeData) => void = (_, data) => { 
    setQuery(data.value);
    if (data.value.trim() !== '') {
      if (!isMenuOpen) {
        setMenuOpen(true);
      }
    } else {
      setMenuOpen(false);
    }
  };

  const onSelectDish = (dishName: string, index: number) => {
    setQuery('');
    setMenuOpen(false);
    justNavigatedRef.current = true;
    navigate(`/details/${dishName}/${index}`);
  };

  const onFocus = () => {
    if (justNavigatedRef.current) {
      searchRef.current?.blur();
    }
    if (query.trim() && !isMenuOpen && !justNavigatedRef.current) {
      setTimeout(() => {
        setMenuOpen(true);
      }, 50);
    }
    justNavigatedRef.current = false;
  };

  return (
    <div className={styles.searchWrapper}>
      <Popover
        open={isMenuOpen}
        trapFocus={false}
        unstable_disableAutoFocus={true}
        onOpenChange={(_, data) => setMenuOpen(data.open)}
      >
        <PopoverTrigger>
          <SearchBox
            size="large"
            placeholder="Search dishes by name, ingredients or origin"
            value={query}
            onChange={onChange}
            onFocus={onFocus}
            autoFocus={false}
            ref={searchRef}
            input={{
              onKeyDown: (e) => {
                if (e.key === ' ') {
                  e.stopPropagation(); // stop default toggle behavior
                }
              },
            }}
          />
        </PopoverTrigger>
        <PopoverSurface className={styles.menuPopover} autoFocus={false}>
          <MenuList autoFocus={false}>
            {query.trim() && filteredDishes.length > 0 ? (
              filteredDishes.map((dish, index) => (
                <MenuItem key={index} onClick={() => onSelectDish(dish.name, indexMap.get(dish.name))} className='menuItems'>
                  {dish.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>No Dishes found</MenuItem>
            )}
          </MenuList>
        </PopoverSurface>
      </Popover>
    </div>
  );
};


const Header = ({ isLoggedIn, userName }: HeaderProps) => {
  const styles = userHeaderStyles();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href='/'>
          <Image
            src='/src/assets/logo.webp'
            alt='logo'
            fit='cover'
          />
        </Link>
      </div>

      {/* Search Bar */}
      {DishSearch()}

      {/* Right Side Links */}
      <div className={styles.rightSection}>
        <Link className={styles.link} href='/dishes'>
          Dishes
        </Link>
        
        <Link className={styles.link} href='/dishSuggester'>
          Dish Suggester
        </Link>

        {!isLoggedIn ? (
          <Link className={styles.link} onClick={() => navigate('/')}>
            Login
          </Link>
        ) : (
          AvatarWithMenu(userName || '')
        )}
      </div>
    </header>
  );
};

export default Header;
