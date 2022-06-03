<template>
  <div class="dashboard__wrapper">
    <div class="dashboard__sidebar">
      <IconBase
        class="dashboard__sidebar-logo"
        width="110" 
        height="77" 
        viewBox="0 0 110 77"
        icon-name="iconSignPen" 
        icon-color="white"
      />
      <nav class="menu">
        <ul class="menu__links">
          <li 
            class="menu__item"
            :class="{ 'menu__item_active' : choosenLinkItem === 'employee'}"
          >
            <img 
              class="menu__icon" 
              src="@/assets/icons/employee__icon.svg"
            >
            <router-link 
              class="menu__link" 
              :to="{name: 'ListEmployee'}"
            >
              Сотрудники
            </router-link>
          </li>
          <li 
            class="menu__item"
            :class="{ 'menu__item_active' : choosenLinkItem === 'templates'}"  
          >
            <img 
              class="menu__icon" 
              src="@/assets/icons/templates__icon.svg" 
            >
            <router-link 
              class="menu__link" 
              :to="{name: 'ListTemplates'}"
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
            v-if="isLogout" 
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
export default {
  name: "DashboardLayout",
  components: { IconBase },
  data() {
    return {
      isLogout: false,
    };
  },
  computed: {
    choosenLinkItem() {
      if(this.$route.path.includes('employee')) {
        return 'employee';
      }
      if(this.$route.path.includes('templates')) {
        return 'templates';
      }
      return false;
    },
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
    background-color: c.$indigo-dark;
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
    border-bottom: 1px solid c.$gray;
    &-alert {
      cursor: pointer;
      width: 32px;
      height: 32px;
    }
  }

  &__frame {
    height: 100%;
    padding: 36px;
    background-color: c.$main-gray-bg;
    &-content {
      width: 100%;
      height: 100%;
      border: 1px solid c.$gray;
      background-color: c.$white;
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
      background-color: c.$indigo-deep-dark;
    }
  }

  &__link {
    @include m.font(v.$font-inter, v.$font-reg-size, v.$font-medium);
    text-decoration: none;
    color: c.$white;
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
      @include m.font(v.$font-inter, v.$font-reg-size, v.$font-medium);
      color: c.$indigo-gray;
      position: relative;
      cursor: pointer;
    }
    &-logout {
      @include m.font(v.$font-inter, v.$font-med-size, v.$font-bold);
      cursor: pointer;
      position: absolute;
      top: 40px;
      right: 25px;
      background-color: c.$white;
      border: 1px solid c.$light-gray;
      border-radius: 6px;
      box-shadow: v.$dropdown-shadow;
      padding: 10px;
      color: c.$red;
    }
  }
}

.vr {
  width: 1px;
  height: 24px;
  background-color: c.$gray;
}
</style>