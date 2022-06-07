<template>
  <div class="textarea">
    <label 
      class="textarea-text" 
      :for="id"
    >
      {{ label }}
    </label>
    <textarea
      :id="id"
      v-model="html"
      class="textarea-inner"
      :required="required"
      :placeholder="placeholder"
      rows="8"
      @input="$emit('htmlTemplate', html)"
    />
  </div>
</template>

<script>
export default {
  name: "DefaultTextarea",
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "Название",
    },
    required: {
      type: Boolean,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: null,
    },
    placeholder: {
      type: String,
      default: "Введите данные",
    },
    id: {
      type: String,
      default: "input",
    },
    value: {
      type: String,
      default: null,
    }
  },
  emits: ['htmlTemplate'],
  data() {
    return {
      html: `
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
    }
  },
  mounted() {
    this.$emit('htmlTemplate', this.html)
  },
};
</script>

<style scoped lang="scss">
.textarea {
  display: flex;
  flex-direction: column;
  width: 100%;
  &-text {
    @include m.font(v.$font-inter, v.$font-reg-size, v.$font-medium);
    color: c.$indigo-gray;
  }
  &-inner {
    @include m.font(v.$font-inter, v.$font-small-size, v.$font-medium);
    line-height: 22px;
    resize: none;
    margin-top: 4px;
    border: 1px solid c.$gray;
    border-radius: 4px;
    padding: 5px 16px;
  }
}
</style>
