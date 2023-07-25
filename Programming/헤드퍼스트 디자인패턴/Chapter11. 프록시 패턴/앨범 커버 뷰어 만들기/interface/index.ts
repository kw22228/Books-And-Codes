export interface IIcon {
  get iconWidth(): number;
  get iconHeight(): number;
  paintIcon(c, g, x, y): void;
}
