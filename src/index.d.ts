import { CssProperty, Style } from 'tns-core-modules/ui/core/properties';
import { ShadowedLabel as Common } from './shadowed-label.common';
import { Color } from 'tns-core-modules/color/color';
import { dip } from 'tns-core-modules/ui/core/view';

export declare class ShadowedLabel extends Common {
    textShadow: any;
}

export declare const textShadowProperty: CssProperty<Style, TextShadow>;

export interface TextShadow {
    offsetX: dip;
    offsetY: dip;
    blurRadius: dip;
    color: Color;
}
