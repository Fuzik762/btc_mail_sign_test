<template>
  <div class="templates__head">
    <router-link
      :to="{name: 'ListTemplates'}" 
      class="templates__head-text"
    >
      <IconBase
        width="8" 
        height="12" 
        viewBox="0 0 8 12" 
        icon-color="black"
        icon-name="iconBackArrow"
      />
      {{ isEditPage ? 'Редактирование шаблона' : 'Новый шаблон' }}
    </router-link>
    <DefaultButton 
      v-if="isEditPage"
      label="Удалить шаблон" 
      icon-color="delete"
      @click="deleteTemplate(template.id)"
    />
  </div>
  <form 
    class="templates__form" 
  >
    <DefaultInput 
      name="name_template"
      :value="template.name"
      @update:model-value="template.name = $event"
    />
    <TemplateTextarea 
      label="HTML код" 
      :value="template.htmlCode"
      @update:model-value="template.htmlCode = $event" 
    />
    <TemplateItem 
      :id="template.id"
      template-head="Превью" 
      :html="template.htmlCode" 
    />
    <DefaultButton
      type="button" 
      label="Сохранить шаблон"
      @click="onSubmit" 
    />
  </form>
</template>

<script>
import IconBase from '@/components/ui/IconBase.vue'
import DefaultInput from '@/components/ui/DefaultInput.vue'
import DefaultButton from '@/components/ui/DefaultButton.vue'
import TemplateItem from '@/components/TemplateItem.vue'
import TemplateTextarea from '@/components/ui/TemplateTextarea.vue'
import { useToast } from "vue-toastification";
import { GET_TEMPLATE } from '@/graphql/queries'
import { CREATE_TEMPLATE, UPDATE_TEMPLATE, DELETE_TEMPLATE } from '@/graphql/mutations'

const toast = useToast();

export default {
  name: "CreateEditTemplates",
  components: {
    IconBase,
    DefaultInput,
    DefaultButton,
    TemplateItem,
    TemplateTextarea,
  },
  apollo: {
    template: {
      query: GET_TEMPLATE,
      variables() {
        return {
          id: Number(this.$route.params.id)
        }
      },
      result({ data }) {
        if(data) {
          this.template = {
            ...data.getTemplate.template
          };
        }
      },
      update: data => data.getTemplate.template,
      skip() {
        return !this.isEditPage;
      }
    }
  },
  data() {
    return {
      template: {
        name: "",
        id: null,
        htmlCode: `
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    </head>

    <body>
      <table>
        <tbody>
          <tr>
            <td style="width:110px;vertical-align:top;padding-right:30px;border-right:3px solid rgb(66,181,236)">
              <img
                src="http://btc-solutions.ru/wp-content/uploads/2019/04/btc_logo_bl-1.jpg" alt="btc logo"
                style="width:123px;height:123px">
            </td>
            <td style="padding-left:20px">
              <table>
                <tbody style="font-size:15px">
                  <tr>
                    <td><span style="font-size:26px">{{employee.name}}</span></td>
                  </tr>
                  <tr>
                    <td><span style="color:rgb(74,74,74)">{{employee.position}}, BTC Solutions</span></td>
                  </tr>
                  <tr>
                    <td><a href="tel:{{employee.phone}}" style="color:rgb(74,74,74)" target="_blank">{{employee.phone}}</a> 
                      | <a href="mailto:{{employee.email}}" style="color:rgb(74,74,74)" target="_blank">{{employee.email}}</a>
                      | <a href="http://btc-solutions.ru" style="color:rgb(74,74,74)" target="_blank">btc-solutions.ru</a></td>
                  </tr>
                  <tr style="color:rgb(74,74,74)">
                    <td style="padding-top:11px">
                      <a href="https://vk.com/btc_solutions" target="_blank">
                        <img
                          src="http://btc-solutions.ru/wp-content/uploads/2019/04/vk-2.png" alt="vk">
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr style="font-size:11px;color:rgb(76,76,76);">
            <td colspan="2">
              <span>Прежде, чем распечатать это письмо, подумайте об окружающей среде / Before printing, think about the environment</span>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    <style>
      a {
        color: #f77a1e;
      }
    </style>
  </html>`,
      },
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
    async onSubmit() {
      if(this.isEditPage) {
        await this.$apollo.mutate({
          mutation: UPDATE_TEMPLATE,
          variables: {
            ...this.template
          }
        }).then(() => {
          toast.success('Шаблон успешно изменён!');
          this.$router.push({ name: 'ListTemplates' });
        });
      } else {
        await this.$apollo.mutate({
          mutation: CREATE_TEMPLATE,
          variables: {
            name: this.template.name,
            htmlCode: this.template.htmlCode,
          }
        }).then(() => {
          toast.success('Шаблон успешно добавлен!');
          this.$router.push({ name: 'ListTemplates' });
        });
      }
    },
    async deleteTemplate(id) {
      await this.$apollo.mutate({
        mutation: DELETE_TEMPLATE,
        variables: {
          id: id
        }
      }).then((data) => {
        if(data.data.deleteTemplate.status) {
          toast.success('Шаблон успешно удалён!');
          this.$router.push({ name: 'ListTemplates' });
        } else {
          toast.error(data.data.deleteTemplate.errors[0].message);
        }
      });
    }
  }
}
</script>

<style lang="scss">
.templates {
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

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px 18px;
    margin-top: 30px;
  }

  &__link {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>