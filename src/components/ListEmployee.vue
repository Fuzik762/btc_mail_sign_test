<template>
  <div class="employee__wrapper">
    <div class="employee__head">
      <h3 class="employee__head-text">
        Сотрудники
      </h3>
      <DefaultButton
        class="employee__head-button"
        label="Добавить сотрудника"
        :has-icon="true"
      />
    </div>
    <div class="employee__toolbar">
      <div class="employee__toolbar__search">
        <img
          class="employee__toolbar__search-icon" 
          src="@/assets/icons/search__icon.svg"
        >
        <input
          class="employee__toolbar__search-input"
          type="text"
          placeholder="Поиск по ФИО, Должности, email, телефону"
        >
        <DefaultButton
          class="employee__toolbar__search-button"
          label="Поиск"
        />
      </div>
      <div 
        class="employee__filter"
        @click="showFilterMenu = !showFilterMenu"
      >
        <img
          class="employee__filter-icon" 
          src="@/assets/icons/filter__icon.svg"
        >
        <div class="employee__filter-text">
          Статус: {{ status }}
          <svg 
            width="11" 
            height="8" 
            viewBox="0 0 11 8" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M5.4 7.4001L0 2.0001L1.4 0.600098L5.4 4.6001L9.4 0.600098L10.8 2.0001L5.4 7.4001Z" 
              fill="#000000"
            />
          </svg>
        </div>
        <div
          v-if="showFilterMenu" 
          class="employee__filter__menu"
        >
          <label
            class="employee__filter__menu-item"
            for="filter_all"
          >
            <input
              id="filter_all"
              class="employee__filter__menu-check"
              type="checkbox"
              name="filter" 
            >
            <span class="employee__filter__menu-check_style" /> 
            Все
          </label>
          <label
            class="employee__filter__menu-item fired"
            for="filter_fired"
          >
            <input
              id="filter_fired"
              class="employee__filter__menu-check"
              type="checkbox"
              name="filter"
            > 
            <span class="employee__filter__menu-check_style" />
            Уволен
          </label>
          <label
            class="employee__filter__menu-item holiday"
            for="filter_holiday"
          >
            <input
              id="filter_holiday"
              class="employee__filter__menu-check"
              type="checkbox"
              name="filter" 
            > 
            <span class="employee__filter__menu-check_style" />
            В отпуске
          </label>
          <label
            class="employee__filter__menu-item work"
            for="filter_work"
          >
            <input
              id="filter_work"
              class="employee__filter__menu-check"
              type="checkbox"
              name="filter" 
            > 
            <span class="employee__filter__menu-check_style" />
            Работает
          </label>
        </div>
      </div>
    </div>
    <table class="employee__table">
      <thead class="employee__table__head">
        <tr>
          <th
            v-for="head in tableHeaders" 
            :key="head" 
            class="employee__table__head-text"
          >
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody class="employee__table__content">
        <tr>
          <td class="employee__table__content-name">
            Фамилия Имя Отчество
          </td>
          <td class="employee__table__content-company">
            БТК (IT)
          </td>
          <td class="employee__table__content-position">
            Разработчик
          </td>
          <td class="employee__table__content-email">
            developer@btc.com
          </td>
          <td class="employee__table__content-tnumber">
            +796010202020
          </td>
          <td class="employee__table__content-status holiday">
            В отпуске
          </td>
          <td class="employee__table__content-show">
            <router-link
              class="employee__table__content-show-link"
              to="/list-employee/:id"
            >
              Просмотр
            </router-link>
          </td>
        </tr>
        <tr>
          <td class="employee__table__content-name">
            Фамилия Имя Отчество
          </td>
          <td class="employee__table__content-company">
            БТК (IT)
          </td>
          <td class="employee__table__content-position">
            Разработчик
          </td>
          <td class="employee__table__content-email">
            developer@btc.com
          </td>
          <td class="employee__table__content-tnumber">
            +796010202020
          </td>
          <td class="employee__table__content-status work">
            Работает
          </td>
          <td class="employee__table__content-show">
            <router-link
              class="employee__table__content-show-link"
              to="/list-employee/:id"
            >
              Просмотр
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="pagination">
    <img 
      src="@/assets/icons/first-page__icon.svg" 
      class="pagination__first-page"
    >
    <img 
      src="@/assets/icons/prev-page__icon.svg" 
      class="pagination__prev-page"
    >
    <div class="pagination__pages">
      1-10 из 276
    </div>
    <img 
      src="@/assets/icons/next-page__icon.svg" 
      class="pagination__next-page"
    >
    <img 
      src="@/assets/icons/last-page__icon.svg" 
      class="pagination__last-page"
    >
  </div>
</template>

<script>
import DefaultButton from "@/components/ui/DefaultButton.vue"
export default {
  name: "ListEmployee",
  components: { DefaultButton },
  data() {
    return {
      status: "Все",
      tableHeaders: ["ФИО", "КОМПАНИЯ", "ДОЛЖНОСТЬ", "ПОЧТА", "ТЕЛЕФОН", "СТАТУС", ""],
      showFilterMenu: false,
    }
  },
}
</script>