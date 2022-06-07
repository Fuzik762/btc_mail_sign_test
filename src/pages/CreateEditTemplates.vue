<template>
  <div class="templates__head">
    <router-link
      :to="{name: 'ListTemplates'}" 
      class="templates__head-text"
    >
      <IconBase
        width="8" 
        height="12" 
        viewBox="0 0 8 12" 
        icon-color="black"
        icon-name="iconBackArrow"
      />
      Новый шаблон
    </router-link>
    <DefaultButton 
      v-if="isEditPage"
      label="Удалить шаблон" 
      icon-color="delete"
    />
  </div>
  <form class="templates__form">
    <DefaultInput />
    <DefaultTextarea 
      label="HTML код" 
      @html-template="editTemplate($event)" 
    />
    <TemplateItem 
      template-head="Превью" 
      :html="htmlCode" 
    />
    <DefaultButton
      type="submit" 
      label="Сохранить шаблон"
    />
  </form>
</template>

<script>
import IconBase from '@/components/ui/IconBase.vue'
import DefaultInput from '@/components/ui/DefaultInput.vue'
import DefaultButton from '@/components/ui/DefaultButton.vue'
import TemplateItem from '@/components/TemplateItem.vue'
import DefaultTextarea from '@/components/ui/TemplateTextarea.vue'
import { useToast } from "vue-toastification";

const toast = useToast();
export default {
  name: "CreateEditTemplates",
  components: {
    IconBase,
    DefaultInput,
    DefaultButton,
    TemplateItem,
    DefaultTextarea,
  },
  data() {
    return {
      htmlCode: null,
    }
  },
  computed: {
    isEditPage() {
      if(this.$route.params.id) {
        return true;
      }
      return false;
    }
  },
  methods: {
    editTemplate(html) {
      this.htmlCode = html;
    },
    onSubmit() {
      if(this.isEditPage) {
        toast.success('Шаблон успешно изменён!');
      } else {
        toast.success('Шаблон успешно добавлен!');
      }
    }
  }
}
</script>

<style lang="scss">
.templates {
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

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px 18px;
    margin-top: 30px;
  }

  &__link {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>