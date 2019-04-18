import { ShadowedLabel as Common } from './shadowed-label.common';
export declare class ShadowedLabel extends Common {
    /**
     * Set the shadow opacity of the card view. ** iOS Only **
     */
    textShadow: number;
}

export declare const textShadowProperty: CssProperty<Style, number>;
