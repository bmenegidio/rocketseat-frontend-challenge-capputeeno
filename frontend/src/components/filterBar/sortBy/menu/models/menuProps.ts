import { SortByOptions } from '@/contexts/filterContext/models/sortByOptions';

export interface MenuProps {
  onItemClick: (sortBy: SortByOptions) => void;
}
