import { Label } from 'tns-core-modules/ui/label/label';
import { CssProperty, Style } from 'tns-core-modules/ui/core/properties';
import { Color } from 'tns-core-modules/color/color';
// import { Style } from 'tns-core-modules/ui/styling/style';

export class ShadowedLabel extends Label {
    get textShadow() {
        return this.style.textShadow;
    }

    set textShadow(value: any) {
        this.style.textShadow = value;
    }
}

export const textShadowProperty = new CssProperty<Style, string | TextShadow>({
    name: 'textShadow',
    cssName: 'text-shadow',
    valueConverter: value => {
        console.log('--------------- textShadow Value!! : ' + value);
        return {
            offsetX: 4,
            offsetY: 4,
            blurRadius: 4,
            color: new Color('black')
        };
    }
});
textShadowProperty.register(Style);

// Augmenting Style definition so it includes our myOpacity property
declare module 'tns-core-modules/ui/styling/style' {
    interface Style {
        textShadow: string | TextShadow;
    }
}

export interface TextShadow {
    offsetX: number;
    offsetY: number;
    blurRadius: number;
    color: Color;
}
