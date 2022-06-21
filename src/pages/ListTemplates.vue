<template>
  <div class="templates">
    <div class="templates__head">
      <h3 class="templates__head-text">
        Шаблоны
      </h3>
      <DefaultButton
        class="templates__head-button"
        label="Добавить шаблон"
        icon="plus"
        @click="$router.push({ name: 'CreateTemplates' })"
      />
    </div>
    <TemplateItem 
      v-for="template in templates" 
      :id="template.id"
      :key="template.id"
      :name="template.name"
      :html="template.htmlCode"
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
import DefaultButton from '@/components/ui/DefaultButton.vue'
import DefaultPagination from '@/components/ui/DefaultPagination.vue'
import TemplateItem from '@/components/TemplateItem.vue'
import { GET_TEMPLATES } from '@/graphql/queries'

export default {
  name: "ListTemplates",
  components: { DefaultButton, TemplateItem, DefaultPagination },
  apollo: {
    templates: {
      query: GET_TEMPLATES,
      result({ data }) {
        if(data) {
          this.templates = {
            ...data.getTemplates.templates
          };
        }
      },
      variables() {
        return {
          limit: this.limitRecords,
        }
      },
      update(data) {
        this.totalPage = Math.ceil(data.getTemplates.totalCount / this.limitRecords)
        this.totalCount = data.getTemplates.totalCount
        return data.getTemplates.templatesf
      }
    }
  },
  data() {
    return {
      templates: [],
      totalPage: 0,
      totalCount: 0,
      limitRecords: 3,
      currentPage: 1,
    }
  },
  methods: {
    pageChange(currentPage) {
      this.currentPage = currentPage
      this.$apollo.queries.templates.refetch({
        offset: this.limitRecords * (currentPage - 1)
      })
    },
  }
};
</script>

<style lang="scss">
.templates {
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
</style>
