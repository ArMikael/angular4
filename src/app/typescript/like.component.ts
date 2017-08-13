export class LikeComponent {
  constructor(private _isSelected: boolean , private _likesCounter: number) {

  }

  get isSelected() {
    return this._isSelected;
  }

  set isSelected(value) {
    if (value) {
      this._isSelected = value;
    }
  }

  get likesCount() {
    return this._likesCounter;
  }

  set likesCount(count) {
    if (count) {
      this._likesCounter = count;
    }
  }

  onClick() {
    this._likesCounter += (this._isSelected) ? -1 : +1;
    this._isSelected = !this._isSelected;
  }
}
