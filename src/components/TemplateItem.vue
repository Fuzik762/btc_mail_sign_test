<template>
  <div class="template">
    <div class="head">
      <h4 class="head__text">
        {{ templateHead }}
      </h4>
      <router-link
        v-if="$route.meta.editTemplates"
        class="head__link" 
        :to="{ name: 'EditTemplates', params: { id: idTemplate }}"
      >
        Редактировать
      </router-link>
    </div>
    <div class="inner">
      <div class="logo">
        <IconBase 
          class="logo-img"
          width="148" 
          height="148" 
          viewBox="0 0 94 44" 
          icon-color="white"
          icon-name="iconBtcLogo"
        />
      </div>
      <div class="content">
        <div class="content__name">
          [{{ nameSurname }}]
        </div>
        <div class="content__work">
          <div class="content__work-position">
            [{{ position }}],
          </div>
          <div class="content__work-company">
            [{{ company }}]
          </div>
        </div>
        <div class="content__contacts">
          [{{ phoneOne }}], [{{ phoneTwo }}], [{{ email }}], [{{ website }}]
        </div>
        <div class="content__text">
          [{{ text }}]
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/ui/IconBase.vue'
export default {
  name: "TemplateItem",
  components: {
    IconBase,
  },
  props: {
    templateHead: {
      type: String,
      default: "Шаблон для IT"
    },
    nameSurname: {
      type: String,
      default: "Name&Surname"
    }, 
    position: {
      type: String,
      default: "position"
    }, 
    company: {
      type: String,
      default: "company"
    }, 
    phoneOne: {
      type: String,
      default: "phone_number1"
    }, 
    phoneTwo: {
      type: String,
      default: "phone_number2"
    }, 
    email: {
      type: String,
      default: "email"
    }, 
    website: {
      type: String,
      default: "website"
    }, 
    text: {
      type: String,
      default: "text"
    },
    idTemplate: {
      type: Number,
      default: 1,
    }
  }
}
</script>

<style scoped lang="scss">
  .template {
    margin-bottom: 38px;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__text {
      @include m.font(v.$font-inter, v.$font-med-size, v.$font-semibold);
      color: c.$deep-dark-gray;
    }
    &__link {
      @include m.font(v.$font-inter, v.$font-med-size, v.$font-semibold);
      text-decoration: none;
      color: c.$purple;
    }
  }
  .inner {
    display: flex;
    gap: 30px;
    margin-top: 16px;
    padding: 20px 5px;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    &-img {
      padding: 20px;
      background-color: c.$black;
    }
  } 
  .content {
    border-left: 7px solid c.$light-blue;
    line-height: 40px;
    padding-left: 30px;
    color: c.$template-text;
    &__name {
      @include m.font(v.$font-inter, 24px, v.$font-semibold);
      color: c.$black;
    }
    &__work, &__text {
      display: flex;
      @include m.font(v.$font-inter, 18px, v.$font-regular);
    }
    &__contacts {
      display: flex;
      @include m.font(v.$font-inter, 24px, v.$font-regular);
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    &__text {
      text-decoration: underline;
      text-underline-offset: 2px;
    }

  }
</style>
