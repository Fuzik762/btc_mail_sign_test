<template>
  <div class="template">
    <IconBase 
      width="94" 
      height="44" 
      viewBox="0 0 94 44" 
      icon-color="black"
    >
      <IconBtcLogo />
    </IconBase>
    <span class="template-text">
      {{ label }}
    </span>
  </div>
</template>

<script>
import IconBase from "@/components/ui/IconBase.vue"
import IconBtcLogo from "@/components/icons/IconBtcLogo.vue"
export default {
  name: "DefaultInput",
  components: {
    IconBase,
    IconBtcLogo,
  },
  props: {
    label: {
      type: String,
      default: "Шаблон",
    }
  },
};
</script>

<style scoped lang="scss">
.template {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 124px;
  width: 124px;
  padding-top: 25px;
  padding-bottom: 10px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  border: 1px solid c.$white-gray;
  border-radius: 10px;
  :focus-visible {
    outline: 4px solid c.$purple;
  }
  &-text {
    padding-left: 15px;
    padding-right: 15px;
    @include m.font(v.$font-inter, v.$font-small-size, v.$font-semibold);
    color: c.$white;
  }
}
</style>