import { CardType, NavbarLink } from './types';

export const capitalize = (string: string) =>
  string[0].toUpperCase() + string.substring(1);

export const getNavbarLinks = (): Array<NavbarLink> =>
  Object.values(CardType).reduce((total: Array<NavbarLink>, type) => {
    const label = `${capitalize(type)}`;
    const path = `/${type}`;
    total.push({ path, label });
    return total;
  }, []);
