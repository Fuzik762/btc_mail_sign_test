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
