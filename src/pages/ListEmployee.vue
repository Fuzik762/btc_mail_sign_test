<template>
  <div class="employee__wrapper">
    <div class="employee__head">
      <h3 class="employee__head-text">
        Сотрудники
      </h3>
      <DefaultButton
        class="employee__head-button"
        label="Добавить сотрудника"
        icon="plus"
      />
    </div>
    <div class="toolbar">
      <div class="toolbar__search">
        <img
          class="toolbar__search-icon" 
          src="@/assets/icons/search__icon.svg"
        >
        <input
          class="toolbar__search-input"
          type="text"
          placeholder="Поиск по ФИО, Должности, email, телефону"
        >
        <DefaultButton
          class="toolbar__search-button"
          label="Поиск"
        />
      </div>
      <div class="filter">
        <div 
          class="filter__button"
          @click="showFilterMenu = !showFilterMenu"
        >
          <img
            class="filter__button-icon" 
            src="@/assets/icons/filter__icon.svg"
          >
          <div class="filter__button-text">
            Статус: {{ status }}
            <IconBase 
              width="11" 
              height="8" 
              viewBox="0 0 11 8" 
              icon-name="dropdown_arrow"
              icon-color="black"
            >
              <IconDropdownArrow />
            </IconBase>
          </div>
        </div>
        <div
          v-if="showFilterMenu" 
          class="filter__menu"
        >
          <label
            class="filter__menu-item"
            for="filter_all"
          >
            <input
              id="filter_all"
              class="filter__menu-check"
              type="checkbox"
              name="filter" 
            >
            <span class="filter__menu-check_style" /> 
            Все
          </label>
          <label
            class="filter__menu-item fired"
            for="filter_fired"
          >
            <input
              id="filter_fired"
              class="filter__menu-check"
              type="checkbox"
              name="filter"
            > 
            <span class="filter__menu-check_style" />
            Уволен
          </label>
          <label
            class="filter__menu-item holiday"
            for="filter_holiday"
          >
            <input
              id="filter_holiday"
              class="filter__menu-check"
              type="checkbox"
              name="filter" 
            > 
            <span class="filter__menu-check_style" />
            В отпуске
          </label>
          <label
            class="filter__menu-item work"
            for="filter_work"
          >
            <input
              id="filter_work"
              class="filter__menu-check"
              type="checkbox"
              name="filter" 
            > 
            <span class="filter__menu-check_style" />
            Работает
          </label>
        </div>
      </div>
    </div>
    <TableEmployee />
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
import TableEmployee from "@/components/TableEmployee.vue"
import IconBase from "@/components/ui/IconBase.vue"
import IconDropdownArrow from "@/components/icons/IconDropdownArrow.vue"
export default {
  name: "ListEmployee",
  components: { 
    DefaultButton, 
    TableEmployee, 
    IconBase, 
    IconDropdownArrow 
  },
  data() {
    return {
      status: "Все",
      showFilterMenu: false,
    }
  },
}
</script>

<style scoped lang="scss">
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
      @include font($font-inter, $font-med-size, $font-semibold);
    }
  }
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 15px;
  &__search {
    position: relative;
    width: 100%;
    max-width: 450px;
    display: flex;
    align-items: center;
    gap: 15px;
    &-icon {
      position: absolute;
      width: 16px;
      height: 16px;
      z-index: 1;
      left: 10px;
    }
    &-input {
      width: 100%;
      padding: 8px 32px;
      border: 1px solid $gray;
      border-radius: 4px;
    }
  }
}

.filter {
  position: relative;
  &__button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid $dark-gray;
    border-radius: 4px;
    padding: 6px 10px;
    background-color: $white-gray;
  }
  &__menu {
    position: absolute;
    width: 100%;
    max-width: 160px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    top: 20px;
    right: 10px;
    padding: 12px 24px;
    box-shadow: 0 0 8px 0 rgba($color: #000000, $alpha: 0.25);
    background-color: $white;
    &-item {
      @include font($font-inter, $font-reg-size, $font-medium);
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    &-check {
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0 0 0 0);
      &_style {
        &::before {
          content: "";
          display: block;
          width: 14px;
          height: 14px;
          border: 1px solid $purple;
          border-radius: 4px; 
        }
      }
    }
    &-check:checked + &-check_style::before {
      background-image: url("@/assets/icons/checkbox-checked__icon.svg");
    }
  }
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding-right: 30px;
  padding-top: 16px;
  padding-bottom: 14px;
  background-color: $deep-light-gray;
  &__pages {
    @include font($font-inter, $font-small-size, $font-bold);
    color: $black-gray;
  }
  &__next-page,
  &__prev-page,
  &__first-page,
  &__last-page {
    cursor: pointer;
  }
}
</style>