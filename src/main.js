import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { localize, setLocale } from '@vee-validate/i18n';
import ru from '@vee-validate/i18n/dist/locale/ru.json';
import AllRules from '@vee-validate/rules';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { useToast } from "vue-toastification";

const toast = useToast();

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({
    ru,
  }),
});

setLocale('ru');

const toastOptions = {
  maxToasts: 3,
};

const app = createApp(App).use(router);

app.component('FormValidate', Form);
app.component('FieldValidate', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(Toast, toastOptions);

app.mount('#app');