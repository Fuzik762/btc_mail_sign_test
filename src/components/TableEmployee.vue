<template>
  <div class="table__wrapper">
    <table class="table">
      <thead class="table__head">
        <tr>
          <th
            v-for="head in tableHeaders" 
            :key="head" 
            class="table__head-text"
          >
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody class="table__content">
        <tr 
          v-for="employee in tableEmployee" 
          :key="employee.id"
          class="table__content-row"
        >
          <td class="table__content-name table__content-cell">
            {{ employee.name }}
          </td>
          <td class="table__content-company table__content-cell">
            {{ employee.company }}
          </td>
          <td class="table__content-position table__content-cell">
            {{ employee.position }}
          </td>
          <td class="table__content-email table__content-cell">
            {{ employee.email }}
          </td>
          <td class="table__content-tnumber table__content-cell">
            {{ employee.tnumber }}
          </td>
          <td 
            class="table__content-status table__content-cell"
            :class="getStatus(employee.status)"
          >
            {{ employee.status }}
          </td>
          <td class="table__content-show table__content-cell">
            <router-link
              class="table__content-show-link"
              :to="{name: 'EditEmployee', params: {id: '123'}}"
            >
              Просмотр
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableEmployee",
  data() {
    return {
      tableHeaders: ["ФИО", "КОМПАНИЯ", "ДОЛЖНОСТЬ", "ПОЧТА", "ТЕЛЕФОН", "СТАТУС", ""],
      tableEmployee: [{name: "Фамилия Имя Отчество", company: "БТК (IT)", position: "Разработчик", email: "developer@btc.com", tnumber: "+796010202020", status: "В отпуске", id: "1"},
        {name: "Фамилия Имя Отчество", company: "БТК (IT)", position: "Разработчик", email: "developer@btc.com", tnumber: "+796010202020", status: "Работает", id: "2"}],
    }
  },
  methods: {
    getStatus(status) {
      if(status === 'В отпуске') return "holiday";
      if(status === 'Уволен') return "fired";
      return "work";
    }
  }
}
</script>

<style scoped lang="scss">
.table {
  padding: 0px 12px;
  border-collapse: collapse;
  width: 100%;
  @media (max-width: v.$extra-large-screen) {
    white-space: nowrap;
    &__wrapper {
      overflow-x: auto
    }
  }
  
  &__head {
    background-color: c.$head-table-bg;
    &-text {
      @include m.font(v.$font-inter, v.$font-small-size, v.$font-semibold);
      color: c.$deep-dark-gray;
      text-align: left;
      padding: 10px 20px;
    }
  }
  &__content {
    &-cell {
      padding: 10px 20px;
    }
    &-row {
      border-bottom: 1px solid c.$gray;
    }
    &-name,
    &-status {
      @include m.font(v.$font-inter, v.$font-reg-size, v.$font-medium);
    }
    &-company,
    &-position,
    &-email,
    &-tnumber {
      @include m.font(v.$font-inter, v.$font-reg-size, v.$font-regular);
      color: c.$indigo-gray;
    }
    &-show {
      text-align: right;
      &-link {
        @include m.font(v.$font-inter, v.$font-reg-size, v.$font-medium);
        text-decoration: none;
        color: c.$purple;
        cursor: pointer;
      }
    }
  }
}
</style>
