import Vue from "nativescript-vue";
import Home from "./components/Home";

Vue.registerElement('ShadowedLabel', () => require('nativescript-shadowed-label').ShadowedLabel);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
