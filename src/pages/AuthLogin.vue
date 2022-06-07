<template>
  <FormValidate
    class="login__form"
    :validation-schema="schema" 
    @submit="onSubmit"
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
      name="email"
      type="email" 
      label="Email" 
      :required="true" 
      placeholder="example@email.com" 
    />
    <DefaultInput
      id="auth_password" 
      name="password"
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
  </FormValidate>
</template>

<script>
import DefaultInput from '@/components/ui/DefaultInput.vue';
import DefaultButton from '@/components/ui/DefaultButton.vue';
import { useToast } from "vue-toastification";

const toast = useToast();

export default {
  name: 'AuthLogin',
  components: { DefaultInput, DefaultButton },
  data() {
    const schema = {
        email: "required|email",
        password: "required|min:6"
    };
    
    return {
      schema,
    }
  },
  methods: {
    onSubmit() {
      toast.success('Вы успешно вошли в систему');
      this.$router.push({ name: 'ListEmployee' });
    }
  }
};
</script>

<style lang="scss">
.login {
  &__form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 28px;
    max-width: 344px;
    width: 100%;
  }
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