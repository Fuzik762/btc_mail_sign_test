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
  <div class="pagination">
    <img 
      src="@/assets/icons/first-page__icon.svg" 
      class="pagination__first-page"
      :disabled="currentPage === 1"
      @click="pageChange(currentPage = 1)"
    >
    <img 
      src="@/assets/icons/prev-page__icon.svg" 
      class="pagination__prev-page"
      :disabled="currentPage === 1"
      @click="pageChange(currentPage - 1)"
    >
    <div class="pagination__pages">
      {{ fromRecord }}-{{ toRecord }} из {{ totalPage }}
    </div>
    <img 
      src="@/assets/icons/next-page__icon.svg" 
      class="pagination__next-page"
      :disabled="currentPage === totalPage"
      @click="pageChange(currentPage + 1)"
    >
    <img 
      src="@/assets/icons/last-page__icon.svg" 
      class="pagination__last-page"
      :disabled="currentPage === totalPage"
      @click="pageChange(currentPage = totalPage)"
    >
  </div>
</template>

<script>
import DefaultButton from "@/components/ui/DefaultButton.vue"
import DefaultCheckbox from "@/components/ui/DefaultCheckbox.vue"
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
          limit: this.windowHeigthLimit
        }
      },
      update(data) {
        this.totalPage = Math.ceil(data.getStaff.totalCount / this.windowHeigthLimit)
        this.totalCount = data.getStaff.totalCount
        return data.getStaff.staff
      }
    }
  },
  components: { 
    DefaultButton,
    DefaultCheckbox, 
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
      currentPage: 1,
    }
  },
  computed: {
    windowHeigthLimit() {
      return Math.round(window.innerHeight / 60)
    },
    fromRecord() {
      if(this.currentPage === 1) {
        return 1;
      } else {
        return (this.windowHeigthLimit * (this.currentPage - 1)) + 1
      }
    },
    toRecord() {
      if(this.currentPage === this.totalPage) {
        return this.totalCount;
      } else {
        return this.windowHeigthLimit * this.currentPage
      }
    }
  },
  methods: {
    searchEmployee() {
      this.$apollo.queries.staff.refetch({
        searchString: this.searchInput
      })
    },
    setFilter(value) {
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
    pageChange(value) {
      this.currentPage = value;
      this.$apollo.queries.staff.refetch({
        offset: this.fromRecord
      })
    },
    staffOrderByInput([id, order]) {
      console.log(id, order)
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
  height: calc(100% - 45px);
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

.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding-right: 30px;
  padding-top: 16px;
  padding-bottom: 14px;
  background-color: c.$deep-light-gray;
  &__pages {
    @include m.font(v.$font-inter, v.$font-small-size, v.$font-bold);
    color: c.$black-gray;
  }
  &__next-page,
  &__prev-page,
  &__first-page,
  &__last-page {
    cursor: pointer;
  }
}
</style>
