import { CssProperty, Style } from 'tns-core-modules/ui/core/properties';
import { ShadowedLabel as Common } from './shadowed-label.common';
import { Color } from 'tns-core-modules/color/color';
export declare class ShadowedLabel extends Common {
    /**
     * Set the shadow opacity of the card view. ** iOS Only **
     */
    textShadow: any;
}

export declare const textShadowProperty: CssProperty<Style, number>;

export interface TextShadow {
    offsetX: number;
    offsetY: number;
    blurRadius: number;
    color: Color;
}
