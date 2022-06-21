<template>
  <div class="employee">
    <div class="employee__head">
      <h3 class="employee__head-text">
        Сотрудники
      </h3>
      <DefaultButton
        class="employee__head-button"
        label="Добавить сотрудника"
        icon="plus"
        @click="$router.push({name: 'CreateEmployee'})"
      />
    </div>
    <div class="toolbar">
      <div class="toolbar__search">
        <img
          class="toolbar__search-icon" 
          src="@/assets/icons/search__icon.svg"
        >
        <input
          v-model="searchInput"
          class="toolbar__search-input"
          type="text"
          placeholder="Поиск по ФИО, Должности, email, телефону"
          @keyup.enter="searchEmployee"
        >
        <DefaultButton
          class="toolbar__search-button"
          label="Поиск"
          @click="searchEmployee"
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
              icon-color="black"
              icon-name="iconDrowdownArrow"
            />
          </div>
        </div>
        <div
          v-show="showFilterMenu" 
          class="filter__menu"
        > 
          <DefaultCheckbox
            id="filter_all"
            name="filter"
            label="Все"
          />
          <DefaultCheckbox
            id="filter_fired"
            name="filter"
            label="Уволен"
            text-color="fired"
            @checked="setFilter($event)"
          />
          <DefaultCheckbox
            id="filter_holiday"
            name="filter"
            label="В отпуске"
            text-color="holiday"
            @checked="setFilter($event)"
          />
          <DefaultCheckbox
            id="filter_work"
            name="filter"
            label="Работает"
            text-color="work"
            @checked="setFilter($event)"
          />
        </div>
      </div>
    </div>
    <TableEmployee 
      v-if="staff.length"
      :staff="staff"
      @staff-order="staffOrderByInput($event)"
    />
  </div>
  <DefaultPagination 
    :limit-records="limitRecords"
    :total-count="totalCount"
    :total-page="totalPage"
    :current-page="currentPage"
    @from-record="pageChange($event)"
  />
</template>

<script>
import DefaultButton from "@/components/ui/DefaultButton.vue"
import DefaultCheckbox from "@/components/ui/DefaultCheckbox.vue"
import DefaultPagination from "@/components/ui/DefaultPagination.vue"
import IconBase from "@/components/ui/IconBase.vue"
import TableEmployee from "@/components/TableEmployee.vue"
import { GET_STAFF } from "@/graphql/queries"

export default {
  name: "ListEmployee",
  apollo: {
    staff: {
      query: GET_STAFF,
      variables() {
        return { 
          limit: this.limitRecords,
        }
      },
      update(data) {
        this.totalPage = Math.ceil(data.getStaff.totalCount / this.limitRecords)
        this.totalCount = data.getStaff.totalCount
        return data.getStaff.staff
      }
    }
  },
  components: { 
    DefaultButton,
    DefaultCheckbox,
    DefaultPagination, 
    TableEmployee, 
    IconBase, 
  },
  data() {
    return {
      status: "Все",
      showFilterMenu: false,
      staff: [],
      totalPage: 0,
      totalCount: 0,
      searchInput: "",
      filter: [],
      limitRecords: 10,
      currentPage: 1,
    }
  },
  methods: {
    searchEmployee() {
      this.currentPage = 1
      this.$apollo.queries.staff.refetch({
        searchString: this.searchInput
      })
    },
    setFilter(value) {
      this.currentPage = 1
      if(!this.filter.includes(value)) {
        this.filter.push(value)
      } else {
        let idx = this.filter.indexOf(value)
        this.filter.splice(idx, 1);
      }
      this.$apollo.queries.staff.refetch({
        statusFilter: this.filter
      })
    },
    pageChange(currentPage) {
      this.currentPage = currentPage
      this.$apollo.queries.staff.refetch({
        offset: this.limitRecords * (currentPage - 1)
      })
    },
    staffOrderByInput([id, order]) {
      this.$apollo.queries.staff.refetch({
        orderBy: {
          [id]: order
        }
      })
    }
  },
}
</script>

<style scoped lang="scss">
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
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: v.$medium-screen) {
    flex-wrap: wrap;
  }
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
      border: 1px solid c.$gray;
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
    border: 1px solid c.$dark-gray;
    border-radius: 4px;
    padding: 6px 10px;
    background-color: c.$white-gray;
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
    box-shadow: v.$checkbox-shadow;
    background-color: c.$white;
  }
}

</style>
