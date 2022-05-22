<template lang='pug'>
form.login__form(@submit.prevent='test')
  img.login__logo(src='@/assets/images/pen__sign.svg')
  .login__header
    h2.login__header-text Авторизация
  <Input label='Email' :required='true' placeholder='example@email.com'/>
  <Input type='password' label='Пароль' :required='true' placeholder='*********' />
  <Button class='login__submit' type='submit' label='Войти' />
</template>

<script>
import Input from '@/components/ui/input.vue';
import Button from '@/components/ui/button.vue';

export default {
  name: 'Auth-Login',
  components: { Input, Button },
  props: {
  },
};
</script>

<style scoped lang="scss">
$indigo-dark: #1E293B;
$purple-deep: #6366F1;
$grey: #E2E8F0;

.login {
  &__form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 344px;
    min-height: 300px;
  }
  &__header {
    &-text {
      font-size: 30px;
      color: $indigo-dark;
    }
  }
  &__submit {
    align-self: flex-end;
  }
}
</style>
