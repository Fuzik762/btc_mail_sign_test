<template>
  <div class="table__wrapper">
    <table class="table">
      <thead class="table__head">
        <tr>
          <th
            v-for="head in tableHeaders"
            :id="head.id"
            :key="head.id" 
            class="table__head-text"
            @click="sortOrder(head.id)"
          >
            {{ head.title }}
            <img 
              v-if="head.order"
              :src="require(`@/assets/icons/${head.order}__icon.svg`)" >
          </th>
        </tr>
      </thead>
      <tbody class="table__content">
        <tr 
          v-for="employee in staff" 
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
            {{ employee.phone }}
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
              :to="{name: 'EditEmployee', params: {id: employee.id}}"
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
  props: {
    staff: {
      type: Array,
      default: () => [],
    }
  },
  emits: ["staffOrder"],
  data() {
    return {
      tableHeaders: [
        {title: "ФИО", id: "name", order: "asc"}, 
        {title: "Компания", id: "company", order: "asc"}, 
        {title: "Должность", id: "position", order: "asc"}, 
        {title: "Почта", id: "email", order: "asc"}, 
        {title: "Телефон", id: "phone", order: "asc"},
        {title: "Статус", id: "status", order: "asc"},
        {title: "", id: null}
      ],
    }
  },
  methods: {
    getStatus(status) {
      if(status === 'В отпуске') return "holiday";
      if(status === 'Уволен') return "fired";
      return "work";
    },
    sortOrder(id) {
      let obj = this.tableHeaders.find(head => head.id === id)
      if(obj["order"] === "asc") {
        obj["order"] = "desc"
      } else {
        obj["order"] = "asc"
      }
      if(id) this.$emit("staffOrder", [id, obj["order"]]);
    }
  }
}
</script>

<style scoped lang="scss">
.table {
  padding: 0px 12px;
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  @media (max-width: v.$extra-large-screen) {
    white-space: nowrap;
  }
  &__wrapper {
    overflow-x: auto;
    height: 100%;
    @media (max-width: v.$extra-large-screen) { 
      overflow-x: auto;
    }
  }
  
  
  &__head {
    background-color: c.$head-table-bg;
    &-text {
      @include m.font(v.$font-inter, v.$font-small-size, v.$font-semibold);
      color: c.$deep-dark-gray;
      text-transform: uppercase;
      text-align: left;
      padding: 10px 20px;
      cursor: pointer;
      &:last-child {
        cursor: auto;
      }
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
