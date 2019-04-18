import { Label } from 'tns-core-modules/ui/label/label';
import { Property, CssProperty, Style } from 'tns-core-modules/ui/core/properties';
import { Color } from 'tns-core-modules/color/color';

export class ShadowedLabel extends Label {
    textShadow: number;
}

export const textShadowProperty = new CssProperty<Style, number>({
    name: 'textShadow',
    cssName: 'text-shadow',
    valueConverter: value => {
        console.log('--------------- textShadow Value!! : ' + value);
        return 17; /*{
            offsetX: 4,
            offsetY: 4,
            blurRadius: 4,
            color: new Color('black')
        };*/
    }
});
textShadowProperty.register(Style);

// export interface TextShadow {
//     offsetX: number;
//     offsetY: number;
//     blurRadius: number;
//     color: Color;
// }
