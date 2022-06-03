<template>
  <label 
    class="checkbox" 
    :for="id"
    :class="textColor"
  >
    <input 
      :id="id" 
      class="checkbox-input" 
      type="checkbox" 
      :name="propName" 
    >
    <span class="checkbox-flag" />
    {{ label }}
  </label>
</template>

<script>
export default {
  name: "DefaultCheckbox",
  props: {
    propName: {
      type: String,
      default: "name",
    },
    id: {
      type: String,
      default: "checkbox",
    },
    label: {
      type: String,
      default: "Флажок",
    },
    textColor: {
      type: String,
      default: "black"
    }
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  @include m.font(v.$font-inter, v.$font-reg-size, v.$font-medium);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  &-input {
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
  }
  &-flag {
    &::before {
      content: "";
      display: block;
      width: 14px;
      height: 14px;
      border: 1px solid c.$purple;
      border-radius: 4px;
    }
  }
  &-input:checked + &-flag::before {
    background-image: url("@/assets/icons/checkbox-checked__icon.svg");
  }
}
</style>
