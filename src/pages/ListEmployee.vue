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
    <button 
      class="pagination__first-page pagination-btn"
      :disabled="currentPage === 1"
      @click="pageChange(currentPage = 1)"
    />
    <button
      class="pagination__prev-page pagination-btn"
      :disabled="currentPage === 1"
      @click="pageChange(currentPage - 1)"
    />
    <div class="pagination__pages">
      {{ fromRecord }}-{{ toRecord }} из {{ totalPage }}
    </div>
    <button 
      class="pagination__next-page pagination-btn"
      :disabled="currentPage === totalPage"
      @click="pageChange(currentPage + 1)"
    />
    <button 
      class="pagination__last-page pagination-btn"
      :disabled="currentPage === totalPage"
      @click="pageChange(currentPage = totalPage)"
    />
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
      limitRecords: 10,
    }
  },
  computed: {
    fromRecord() {
      if(this.currentPage === 1) {
        return 1;
      } else {
        return (this.limitRecords * (this.currentPage - 1)) + 1
      }
    },
    toRecord() {
      if(this.currentPage === this.totalPage) {
        return this.totalCount;
      } else {
        return this.limitRecords * this.currentPage
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
        offset: this.fromRecord - 1
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
  &__next-page { 
    background-image: url("@/assets/icons/next-page__icon.svg");
  }
  &__prev-page {
    background-image: url("@/assets/icons/prev-page__icon.svg");
  }
  &__first-page {
    background-image: url("@/assets/icons/first-page__icon.svg");
  }
  &__last-page {
    background-image: url("@/assets/icons/last-page__icon.svg");
  }
  &-btn {
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    height: 16px;
    width: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
