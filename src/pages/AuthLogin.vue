<template>
  <form 
    class="login__form" 
    @submit.prevent="test"
  >
    <img 
      class="login__logo" 
      src="@/assets/images/pen__sign.svg" 
    >
    <div class="login__header">
      <h2 class="login__header-text">  
        Авторизация
      </h2>
    </div>
    <DefaultInput 
      label="Email" 
      :required="true" 
      placeholder="example@email.com" 
    />
    <DefaultInput 
      type="password" 
      label="Пароль" 
      :required="true" 
      placeholder="*********" 
    />
    <DefaultButton 
      class="login__submit" 
      type="submit" 
      label="Войти" 
    />
  </form>
</template>

<script>
import DefaultInput from '@/components/ui/DefaultInput.vue';
import DefaultButton from '@/components/ui/DefaultButton.vue';

export default {
  name: 'AuthLogin',
  components: { DefaultInput, DefaultButton },
  props: {
  },
};
</script>

<style lang="scss">
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
      @include font($font-inter, $font-head-size, $font-bold);
      color: $indigo-dark;
    }
  }
  &__submit {
    align-self: flex-end;
  }
}
</style>