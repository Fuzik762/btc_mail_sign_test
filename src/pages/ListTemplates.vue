<template>
  <div class="employee__head">
    <h3 class="employee__head-text">
      Шаблоны
    </h3>
    <DefaultButton
      class="employee__head-button"
      label="Добавить шаблон"
      icon="plus"
      @click="$router.push({ name: 'CreateTemplates' })"
    />
  </div>
  <div class="employee__inner">
    <TemplateItem />
    <TemplateItem />
  </div>
</template>

<script>
import DefaultButton from '@/components/ui/DefaultButton.vue'
import TemplateItem from '@/components/TemplateItem.vue'
export default {
  name: "ListTemplates",
  components: { DefaultButton, TemplateItem },
};
</script>

<style lang="scss">
.employee {
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid c.$gray;
    padding: 16px 18px;
    &-text {
      display: flex;
      align-items: center;
      gap: 15px;
      text-decoration: none;
      color: c.$black;
      @include m.font(v.$font-inter, v.$font-med-size, v.$font-semibold);
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px 18px;
  }
}
</style>
