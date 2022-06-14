<template>
  <div class="employee">
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
        {{ isEditPage ? 'Редактирование сотрудника' : 'Новый сотрудник' }}
      </router-link>
    </div>
    <FormValidate 
      class="employee__form"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <DataRow> 
        <template #head>
          Оcновные данные
        </template>
        <DefaultInput
          id="create_name"
          name="name"
          type="text"
          :required="true"
          placeholder="Фамилия Имя Отчество"
          label="ФИО"
        />
        <DefaultInput
          id="create_company"
          name="company"
          type="text"
          :required="true"
          placeholder="БТК (IT)"
          label="Компания"
        />
        <DefaultInput
          id="create_position"
          name="position"
          type="text"
          :required="true"
          placeholder="Разработчик"
          label="Должность"
        />
      </DataRow>
      <DataRow>
        <template #head>
          Контакты
        </template>
        <DefaultInput
          id="create_email"
          name="email"
          type="email"
          :required="true"
          placeholder="Email"
          label="Email"
        />
        <DefaultInput
          id="create_phone"
          name="phone"
          type="tel"
          :required="true"
          placeholder="Номер телефона"
          label="Телефон"
        />
      </DataRow>
      <DataRow v-if="isEditPage">
        <template #head>
          Контакты
        </template>
        <DefaultInput
          id="edit_status"
          name="status"
          type="text"
          :required="true"
          placeholder="Статус"
          label="Статус"
        />
        <DefaultInput
          id="edit_vocationEndDate"
          name="vocationEndDate"
          type="date"
          :required="true"
          placeholder="Дата"
          label="В отпуске до"
        />
      </DataRow>
      <DataRow> 
        <template #head>
          Шаблон
        </template>
        <TemplateItem 
          v-for="template in templates"
          :key="template.id"
          :id="template.id"
          :html="template.htmlCode"
          :class="{ active : isActive === template.id }"
          @click="isActive = template.id"
        />
      </DataRow>
      <DefaultButton 
        type="submit"
        :label="isEditPage ? 'Сохранить изменения' : 'Добавить сотрудника'" 
      />
    </FormValidate>
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
      <DefaultButton 
        label="Скопировать ссылку" 
        @click="onCopy"
      />
    </div>
  </div>
</template>

<script>
import DefaultInput from "@/components/ui/DefaultInput.vue"
import DefaultButton from "@/components/ui/DefaultButton.vue"
import TemplateItem from "@/components/TemplateItem.vue"
import DataRow from "@/components/DataRow.vue"
import IconBase from "@/components/ui/IconBase.vue"
import { useToast } from "vue-toastification";

const toast = useToast();
export default {
  name: "CreateEmployee",
  components: { 
    DefaultInput,
    DefaultButton, 
    DataRow,
    IconBase,
    TemplateItem,
  },
  data() {
    const schema = {
      name: "required|alpha_spaces",
      company: "required|alpha_dash",
      position: "required|alpha_spaces",
      email: "required|email",
      phone: { regex: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ },
    };

    return {
      schema,
      submitButton: 'Добавить сотрудника',
      isActive: null,
      templates: [
        {
          id: 'it',
          name: 'Шаблон для IT',
          htmlCode: '<div style="width: 150px; height: 150px; color: red"> Шаблон it </div>'
        },
        {
          id: 'build',
          name: 'Шаблон для Строительства',
          htmlCode: '<div style="width: 150px; height: 150px; color: black"> Шаблон it </div>'
        },
      ]  
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
    onSubmit() {
      if(this.isEditPage) {
        toast.success("Данные успешно изменены!");
      } else {
        toast.success("Сотрудник успешно добавлен!");
      }
      this.$router.push({ name: 'ListEmployee' });
    },
    onCopy() {
      toast.success("Ссылка скопирована!");
    }
  },
}
</script>

<style lang="scss">
.employee {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 18px;
  
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

  &__link {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.active {
  outline: 3px solid c.$purple;
}
</style>
