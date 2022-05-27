<template>
  <div class="dashboard__wrapper">
    <div class="dashboard__sidebar">
      <IconBase
        class="dashboard__sidebar-logo"
        width="110" 
        height="77" 
        viewBox="0 0 110 77"
        icon-name="pen_sign" 
        icon-color="white"
      >
        <IconSignPen />
      </IconBase>
      <nav class="menu">
        <ul class="menu__links">
          <li class="menu__item menu__item_active">
            <img 
              class="menu__icon" 
              src="@/assets/icons/employee__icon.svg"
            >
            <router-link 
              class="menu__link" 
              to="/list-employee"
            >
              Сотрудники
            </router-link>
          </li>
          <li class="menu__item">
            <img 
              class="menu__icon" 
              src="@/assets/icons/templates__icon.svg" 
            >
            <router-link 
              class="menu__link" 
              to="/list-templates"
            >
              Шаблоны
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="dashboard__content">
      <div class="dashboard__navbar">
        <img
          class="dashboard__navbar-alert"
          src="@/assets/icons/alert__icon.svg"
          alt="Уведомления"
        >
        <div class="vr" />
        <div class="user__toolbar">
          <img
            class="user__logo"
            src="@/assets/icons/user__icon.svg"
            alt="Иконка профиля"
          >
          <div 
            class="user__toolbar-menu" 
            @click="isLogout = !isLogout"
          >
            Администратор
            <img
              class="user__toolbar-menu__icon"
              src="@/assets/icons/dropdown__icon.svg"
            >
          </div>
          <div 
            v-if="isLogout === true" 
            class="user__toolbar-logout"
          >
            Выйти из учетной записи
          </div>
        </div>
      </div>
      <div class="dashboard__frame">
        <div class="dashboard__frame-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/ui/IconBase.vue"
import IconSignPen from "@/components/icons/IconSignPen.vue"
export default {
  name: "DashboardLayout",
  components: { IconBase, IconSignPen },
  data() {
    return {
      isLogout: {
        type: Boolean,
        default: false,
      },
    };
  },
};
</script>

<style lang="scss">
.dashboard {
  &__wrapper {
    display: flex;
  }

  &__sidebar {
    width: 20%;
    height: 100vh;
    max-width: 240px;
    padding: 24px 16px;
    background-color: $indigo-dark;
    &-logo {
      display: flex;
      justify-content: flex-start;
    }
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__navbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    padding-right: 32px;
    padding-bottom: 16px;
    padding-top: 16px;
    border-bottom: 1px solid $gray;
    &-alert {
      cursor: pointer;
      width: 32px;
      height: 32px;
    }
  }

  &__frame {
    height: 100%;
    padding: 36px;
    &-content {
      width: 100%;
      height: 100%;
      border: 1px solid $gray;
    }
  }
}

.menu {
  margin-top: 24px;

  &__links {
    list-style: none;
  }

  &__item {
    width: 100%;
    padding: 8px 12px;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    &_active {
      background-color: $indigo-deep-dark;
    }
  }

  &__link {
    @include font($font-inter, $font-reg-size, $font-medium);
    text-decoration: none;
    color: $white;
  }
}

.user {
  &__logo {
    width: 32px;
    height: 32px;
  }

  &__toolbar {
    display: flex;
    align-items: center;
    gap: 8px;
    &-menu {
      @include font($font-inter, $font-reg-size, $font-medium);
      color: $indigo-gray;
      position: relative;
      cursor: pointer;
    }
    &-logout {
      @include font($font-inter, $font-med-size, $font-bold);
      cursor: pointer;
      position: absolute;
      top: 40px;
      right: 25px;
      background-color: $white;
      border: 1px solid $light-gray;
      border-radius: 6px;
      box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
      padding: 10px;
      color: $red;
    }
  }
}

.vr {
  width: 1px;
  height: 24px;
  background-color: $gray;
}
</style>