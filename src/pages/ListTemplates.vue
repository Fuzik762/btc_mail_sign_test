<template>
  <div class="employee__wrapper">
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
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: calc(100% - 45px);
    padding: 16px 18px;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-text {
      @include m.font(v.$font-inter, v.$font-med-size, v.$font-semibold);
    }
  }
}
</style>
