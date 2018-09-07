import Vue from 'vue'
// import wrap from '@vue/web-component-wrapper'
// import VueWebComponent from "./components/VueWebComponent";
import myCustomElement from "./components/myCustomElement";
import VueWebComponent from '../node_modules/vue-web-component/src/index';

// const CustomElement = wrap(Vue, VueWebComponent);
Vue.config.productionTip = false;
Vue.config.devtools = false;
customElements.define("my-custom-element", VueWebComponent(myCustomElement));


