<template>
  <div class="template">
    <div class="template__head">
      <h4 class="template__head-text">
        {{ templateHead }}
      </h4>
      <router-link
        v-if="$route.meta.editTemplates"
        class="template__head-link" 
        :to="{ name: 'EditTemplates', params: { id: id }}"
      >
        Редактировать
      </router-link>
    </div>
    <div class="template__inner">
      <div v-html="html" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TemplateItem",
  props: {
    html: {
      type: String,
      default: null,
    },
    id: {
      type: Number,
      default: null,
    },
    templateHead: {
      type: String,
      default: null,
    }
  },
};
</script>

<style lang="scss">
  .template {
    margin-bottom: 38px;
    &__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-text {
        @include m.font(v.$font-inter, v.$font-med-size, v.$font-semibold);
        color: c.$deep-dark-gray;
      }
      &-link {
        @include m.font(v.$font-inter, v.$font-med-size, v.$font-semibold);
        text-decoration: none;
        color: c.$purple;
      }
    }
    &__inner {
      display: flex;
      gap: 30px;
      margin-top: 16px;
      padding: 20px 5px;
    }
  }
</style>
