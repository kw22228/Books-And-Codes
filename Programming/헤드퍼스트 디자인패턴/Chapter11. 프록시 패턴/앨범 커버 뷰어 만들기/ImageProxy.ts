import { IIcon } from './interface/index';

class ImageProxy implements IIcon {
  _imageIcon;
  imageUrl: URL;
  retrievalThread;
  retrieving = false;

  constructor(url: URL) {
    this.imageUrl = url;
  }
  get iconWidth() {
    if (this._imageIcon) return this._imageIcon.getIconWidth();
    return 800;
  }
  get iconHeight() {
    if (this._imageIcon) return this._imageIcon.getIconHeight();
    return 600;
  }

  set imageIcon(imageIcon) {
    this._imageIcon = imageIcon;
  }

  paintIcon(c, g, x, y): void {
    if (this._imageIcon) this._imageIcon.paintIcon(c, g, x, y);
    else {
      g.drawString('앨범 커버를 불러오는 중입니다.', x + 300, y + 190);
      if (!this.retrieving) {
        this.retrieving = true;
      }
    }
  }
}
