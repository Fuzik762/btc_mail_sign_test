<template>
  <div class="employee__head">
    <router-link
      :to="{name: 'ListEmployee'}" 
      class="employee__head-text"
    >
      <IconBase
        width="8" 
        height="12" 
        viewBox="0 0 8 12" 
        icon-color="black"
        icon-name="iconBackArrow"
      />
      Новый сотрудник
    </router-link>
  </div>
  <div class="employee__inner">
    <form class="employee__form">
      <DataRow> 
        <template #head>
          ОСНОВНЫЕ ДАННЫЕ
        </template>
        <DefaultInput
          id="create_name"
          type="text"
          :required="true"
          placeholder="Фамилия Имя Отчество"
          label="ФИО"
        />
        <DefaultInput
          id="create_company"
          type="text"
          :required="true"
          placeholder="БТК (IT)"
          label="Компания"
        />
        <DefaultInput
          id="create_position"
          type="text"
          :required="true"
          placeholder="Разработчик"
          label="Должность"
        />
      </DataRow>
      <DataRow>
        <template #head>
          КОНТАКТЫ
        </template>
        <DefaultInput
          id="create_email"
          type="email"
          :required="true"
          placeholder="Email"
          label="Email"
        />
        <DefaultInput
          id="create_tnumber"
          type="tel"
          :required="true"
          placeholder="Номер телефона"
          label="Телефон"
        />
      </DataRow>
      <DataRow v-if="isEditPage">
        <template #head>
          КОНТАКТЫ
        </template>
        <DefaultInput
          id="edit_status"
          type="text"
          :required="true"
          placeholder="Статус"
          label="Статус"
        />
        <DefaultInput
          id="edit_holiday"
          type="date"
          :required="true"
          placeholder="Дата"
          label="В отпуске до"
        />
      </DataRow>
      <DataRow> 
        <template #head>
          ШАБЛОН
        </template>
        <TemplateButton label="Шаблон для IT" />
        <TemplateButton label="Шаблон для строительства" />
      </DataRow>
      <DefaultButton 
        type="submit"
        label="Добавить сотрудника" 
      />
    </form>
    <div
      v-if="isEditPage" 
      class="employee__link"
    >
      <DefaultInput 
        id="copy_link"
        type="url"
        label="Ссылка для вставки в письмо"
        value="https://example.com"
        :readonly="true"
      />
      <DefaultButton label="Скопировать ссылку" />
    </div>
  </div>
</template>

<script>
import DefaultInput from "@/components/ui/DefaultInput.vue"
import DefaultButton from "@/components/ui/DefaultButton.vue"
import TemplateButton from "@/components/ui/TemplateButton.vue"
import DataRow from "@/components/DataRow.vue"
import IconBase from "@/components/ui/IconBase.vue"
export default {
  name: "CreateEmployee",
  components: { 
    DefaultInput,
    DefaultButton, 
    DataRow,
    IconBase,
    TemplateButton,
  },
  computed: {
    isEditPage() {
      if(this.$route.params.id) {
        return true;
      }
      return false;
    }
  },
}
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

  &__link {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
