export interface ImageFrameProps {
  id?: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  slideLength?: number;
  activeId?: number;
  show?: string;
  setCount?: (count: number) => void;
  ref?: React.RefObject<HTMLImageElement>;
}

export type FloatNavButtonsProps = {
  handleCloseMenus: (event: React.MouseEvent | MouseEvent) => void;
  handleNewsMenu: () => void;
  handleMatricMenu: () => void;
  handleCalendarMenu: () => void;
  userType: string;
};