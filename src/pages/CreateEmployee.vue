<template>
  <div class="employee__wrapper">
    <div class="employee__head">
      <router-link
        to="/list-employee" 
        class="employee__head-text"
      >
        <IconBase
          width="8" 
          height="12" 
          viewBox="0 0 8 12" 
          icon-color="black"
        >
          <IconBackArrow />
        </IconBase>
        Новый сотрудник
      </router-link>
    </div>
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
      <DataRow> 
        <template #head>
          ШАБЛОН
        </template>
        <TemplateButton label="Шаблон для IT" />
        <TemplateButton label="Шаблон для строительства" />
      </DataRow>
      <DefaultButton label="Добавить сотрудника" />
    </form>
  </div>
</template>

<script>
import DefaultInput from "@/components/ui/DefaultInput.vue"
import DefaultButton from "@/components/ui/DefaultButton.vue"
import TemplateButton from "@/components/ui/TemplateButton.vue"
import DataRow from "@/components/DataRow.vue"
import IconBase from "@/components/ui/IconBase.vue"
import IconBackArrow from "@/components/icons/IconBackArrow.vue"
export default {
  name: "CreateEmployee",
  components: { 
    DefaultInput,
    DefaultButton, 
    DataRow,
    IconBase,
    IconBackArrow,
    TemplateButton,
  },
}
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
      display: flex;
      align-items: center;
      gap: 15px;
      text-decoration: none;
      color: c.$black;
      @include m.font(v.$font-inter, v.$font-med-size, v.$font-semibold);
    }
  }
  &__data {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding-top: 24px;
    padding-bottom: 24px;
    &-head {
      @include m.font(v.$font-inter, v.$font-small-size, v.$font-semibold);
      color: c.$deep-dark-gray;
    }
    &-content {
      display: flex;
      gap: 24px;
    }
  }
}
</style>