<template>
  <form 
    class="login" 
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
      id="auth_email" 
      label="Email" 
      :required="true" 
      placeholder="example@email.com" 
    />
    <DefaultInput
      id="auth_password" 
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 28px;
  max-width: 344px;
  width: 100%;
  
  &__header {
    &-text {
      @include m.font(v.$font-inter, v.$font-head-size, v.$font-bold);
      color: c.$indigo-dark;
    }
  }
  &__submit {
    align-self: flex-end;
  }
}
</style>
