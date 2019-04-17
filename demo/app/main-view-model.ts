import { Observable } from 'tns-core-modules/data/observable';
import { ShadowedLabel } from 'nativescript-shadowed-label';

export class HelloWorldModel extends Observable {
  public message: string;
  private shadowedLabel: ShadowedLabel;

  constructor() {
    super();

    this.shadowedLabel = new ShadowedLabel();
    this.message = this.shadowedLabel.message;
  }
}
