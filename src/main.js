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
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createApolloProvider } from '@vue/apollo-option'


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

const httpLink = createHttpLink({
  uri: 'https://api.esign-trainees.dev.k8s.btc-s.ru/graphql',
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token_apollo");
  operation.setContext({
    headers: {
      authorization: token ? `Basic ${token}` : null
    }
  })

  return forward(operation)
})

const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const app = createApp(App).use(router);

app.component('FormValidate', Form);
app.component('FieldValidate', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(Toast, toastOptions);
app.use(apolloProvider);

app.mount('#app');