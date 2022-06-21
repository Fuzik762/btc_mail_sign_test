<template>
  <div class="pagination">
    <button 
      class="pagination__first-page pagination-btn"
      :disabled="currentPage === 1"
      @click="pageChange(1)"
    />
    <button
      class="pagination__prev-page pagination-btn"
      :disabled="currentPage === 1"
      @click="pageChange(currentPage - 1)"
    />
    <div class="pagination__pages">
      {{ fromRecord }}-{{ toRecord }} из {{ totalCount }}
    </div>
    <button 
      class="pagination__next-page pagination-btn"
      :disabled="currentPage === totalPage"
      @click="pageChange(currentPage + 1)"
    />
    <button 
      class="pagination__last-page pagination-btn"
      :disabled="currentPage === totalPage"
      @click="pageChange(totalPage)"
    />
  </div>
</template>

<script>
export default {
  name: "DefaultPagination",
  props: {
    limitRecords: {
      type: Number,
      default: 1,
    },
    totalCount: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 1,
    },
    currentPage: {
      type: Number,
      default: 1,
    }

  },
  emits: ['fromRecord'],
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
    pageChange(currentPage) {
      this.$emit("fromRecord", currentPage)
    },
  },
}
</script>

<style lang="scss" scoped>
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
    background-color: inherit;
    height: 16px;
    width: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>