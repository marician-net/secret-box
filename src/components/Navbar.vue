<template>
  <nav :class="page == 'docs' ? 'navbar docs-layout' : 'navbar default-layout'">
    <router-link to="/" class="logo">
      <img
        v-if="$store.state.darkMode"
        src="/Logo White.png"
        alt="Secret Box Logo"
      />
      <img v-else src="/Logo Black.png" alt="Secret Box Logo" />
      <h4 v-if="page == 'docs'">Secret Boxes Guide</h4>
    </router-link>
    <div class="btn-menu" @click="toggleMenu = !toggleMenu">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.7953 0H2.20472C1.61999 0 1.05921 0.217737 0.645748 0.605312C0.232282 0.992887 0 1.51855 0 2.06667C0 2.61478 0.232282 3.14044 0.645748 3.52802C1.05921 3.9156 1.61999 4.13333 2.20472 4.13333H29.7953C30.38 4.13333 30.9408 3.9156 31.3542 3.52802C31.7677 3.14044 32 2.61478 32 2.06667C32 1.51855 31.7677 0.992887 31.3542 0.605312C30.9408 0.217737 30.38 0 29.7953 0Z"
          fill="black"
        />
        <path
          d="M29.7953 9.74268H2.20472C1.61999 9.74268 1.05921 9.96041 0.645748 10.348C0.232282 10.7356 0 11.2612 0 11.8093C0 12.3575 0.232282 12.8831 0.645748 13.2707C1.05921 13.6583 1.61999 13.876 2.20472 13.876H29.7953C30.38 13.876 30.9408 13.6583 31.3542 13.2707C31.7677 12.8831 32 12.3575 32 11.8093C32 11.2612 31.7677 10.7356 31.3542 10.348C30.9408 9.96041 30.38 9.74268 29.7953 9.74268Z"
          fill="black"
        />
        <path
          d="M32 21.5525C32 21.0044 31.7677 20.4787 31.3542 20.0912C30.9408 19.7036 30.38 19.4858 29.7953 19.4858H2.20472C1.61999 19.4858 1.05921 19.7036 0.645748 20.0912C0.232282 20.4787 0 21.0044 0 21.5525C0 22.1006 0.232282 22.6263 0.645748 23.0139C1.05921 23.4014 1.61999 23.6192 2.20472 23.6192H29.7953C30.38 23.6192 30.9408 23.4014 31.3542 23.0139C31.7677 22.6263 32 22.1006 32 21.5525Z"
          fill="black"
        />
      </svg>
    </div>
    <ul
      :class="toggleMenu ? 'navbar__navbar-list show' : 'navbar__navbar-list'"
    >
      <li class="navbar__close-btn" @click="toggleMenu = !toggleMenu">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L18.7742 18.7742"
            stroke="#14142B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 18.7744L18.7742 6.00022"
            stroke="#14142B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </li>
      <li class="nav-dropdown">
        <div
          class="nav-dropdown-link"
          @click="toggleDropdown = !toggleDropdown"
        >
          <span>Boxes</span>
          <svg v-if="!toggleDropdown" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9 9L17 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8.5L8 1.5L15 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <ul
          :class="
            toggleDropdown
              ? 'navbar-dropdown show font-gobold'
              : 'navbar-dropdown font-gobold'
          "
        >
          <li @click="to('/secret/counter')">
            <img src="/img/box-gray.png" alt="Secret Counter" />
            <h4>Secret Counter</h4>
          </li>
          <li>
            <img src="/img/box-blue.png" alt="Figment learn" />
            <h4>Figment learn</h4>
          </li>
          <li>
            <img src="/img/box-orange.png" alt="Richie Rich" />
            <h4>Richie Rich</h4>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/docs">Docs</router-link>
      </li>
      <li>
        <router-link to="/updates">Updates</router-link>
      </li>
      <li>
        <router-link to="/tutorials">Tutorial</router-link>
      </li>
      <li>
        <router-link to="/support">Support</router-link>
      </li>
      <li v-if="page == 'docs'">
        <div class="search-form">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.84394"
              cy="7.84442"
              r="5.99237"
              stroke="#200E32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0117 12.3235L14.3611 14.6667"
              stroke="#200E32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input type="text" placeholder="Search .." />
        </div>
      </li>
      <li @click="$store.commit('darkModeToggle')">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8066 7.62361L20.1842 6.54352C19.6576 5.6296 18.4907 5.31432 17.5755 5.83872V5.83872C17.1399 6.09534 16.6201 6.16815 16.1307 6.04109C15.6413 5.91402 15.2226 5.59752 14.9668 5.16137C14.8023 4.88415 14.7139 4.56839 14.7105 4.24604V4.24604C14.7254 3.72922 14.5304 3.2284 14.17 2.85767C13.8096 2.48694 13.3145 2.27786 12.7975 2.27808H11.5435C11.0369 2.27807 10.5513 2.47991 10.194 2.83895C9.83666 3.19798 9.63714 3.68459 9.63958 4.19112V4.19112C9.62457 5.23693 8.77245 6.07681 7.72654 6.0767C7.40418 6.07336 7.08843 5.98494 6.8112 5.82041V5.82041C5.89603 5.29601 4.72908 5.61129 4.20251 6.52522L3.53432 7.62361C3.00838 8.53639 3.31937 9.70261 4.22997 10.2323V10.2323C4.82187 10.574 5.1865 11.2056 5.1865 11.8891C5.1865 12.5725 4.82187 13.2041 4.22997 13.5458V13.5458C3.32053 14.0719 3.0092 15.2353 3.53432 16.1454V16.1454L4.16589 17.2346C4.41262 17.6798 4.82657 18.0083 5.31616 18.1474C5.80575 18.2866 6.33061 18.2249 6.77459 17.976V17.976C7.21105 17.7213 7.73116 17.6516 8.21931 17.7822C8.70746 17.9128 9.12321 18.233 9.37413 18.6717C9.53867 18.9489 9.62708 19.2646 9.63043 19.587V19.587C9.63043 20.6435 10.4869 21.5 11.5435 21.5H12.7975C13.8505 21.5001 14.7055 20.6491 14.7105 19.5962V19.5962C14.7081 19.088 14.9088 18.6 15.2681 18.2407C15.6274 17.8814 16.1154 17.6807 16.6236 17.6831C16.9451 17.6917 17.2596 17.7798 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1544 20.1476 17.2438V17.2438L20.8066 16.1454C21.0617 15.7075 21.1317 15.186 21.0012 14.6964C20.8706 14.2067 20.5502 13.7894 20.111 13.5367V13.5367C19.6717 13.284 19.3514 12.8666 19.2208 12.3769C19.0902 11.8873 19.1602 11.3658 19.4153 10.928C19.5812 10.6383 19.8213 10.3982 20.111 10.2323V10.2323C21.0161 9.70289 21.3264 8.54349 20.8066 7.63277V7.63277V7.62361Z"
            stroke="#200E32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="12.175"
            cy="11.8891"
            r="2.63616"
            stroke="#200E32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </li>
      <li class="navbar__social">
        <Social />
      </li>
    </ul>
  </nav>
</template>

<script>
import Social from "./common/Social.vue";

export default {
  props: ["page"],
  components: {
    Social,
  },
  data: () => {
    return {
      toggleMenu: false,
      toggleDropdown: false,
    };
  },
  methods: {
    resetToggle() {
      this.toggleMenu = false;
      this.toggleDropdown = false;
    },
    to(link) {
      this.$router.push(link);
      this.toggleMenu = false;
      this.toggleDropdown = false;
    },
  },
  watch: {
    $route() {
      this.resetToggle();
    },
  },
};
</script>

<style lang="scss">
.navbar {
  z-index: 1200;
  padding: 0 10%;
  display: flex;
  width: 100vw;
  height: 135px;
  background: var(--theme-bg);
  color: var(--theme-color);
  justify-content: center;
  align-items: center;
  left: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;

  @media (max-width: 1024px) {
    height: 80px;
  }

  & .btn-menu {
    display: none;
  }
  & a {
    padding: 3px 5px;
  }
  & .logo {
    display: flex;
    z-index: 1204;
    & h4 {
      padding: 16px;
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
  & .logo img {
    height: 70px;
    @media (max-width: 414px) {
      height: 40px;
    }
  }
  &__navbar-list {
    width: 100%;
    left: 0;
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    & li {
      padding: 30px 16px;
      & a:hover {
        border-bottom: 2px solid var(--primary);
      }
    }
    @media (max-width: 1024px) {
      display: none;
      position: fixed;
      background: var(--primary);
      width: 100%;
      margin: 0;
      top: 0;
      left: 0;
      padding: 24px;
      padding-top: 80px;
      &.show {
        display: block;
      }
    }
  }

  &__social {
    display: none;
  }

  &__close-btn {
    display: none;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    justify-items: center;
    top: 0;
    & .btn-menu {
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      background: var(--primary);
      padding: 18px;
      height: 80px;
    }

    &__social {
      display: block;
    }

    &__close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      display: block;
      display: flex;
      width: 100%;
      & svg {
        margin-left: auto;
      }
    }
  }

  & .nav-dropdown {
    cursor: pointer;
    position: relative;
    & span {
      padding-right: 10px;
    }
    & .nav-dropdown-link{
      &:hover {
        border-bottom: 2px solid var(--primary);
      }
    }
  }
  & .navbar-dropdown {
    display: none;
    position: absolute;
    background: white;
    color: var(--background);
    list-style: none;
    margin-left: -50%;
    width: 300px;
    border: 1px solid var(--dark-1);
    border-radius: 15px;
    margin-top: 15px;
    & li {
      display: flex;
      align-items: center;
      align-content: center;
      & h4 {
        padding-left: 20px;
      }
      &:hover {
        background: var(--primary);
        border-radius: 15px;
        cursor: pointer;
      }
      & a {
        display: flex;
      }
    }
    &.show {
      display: block;
    }
    @media (max-width: 1024px) {
      margin-left: 0;
    }
  }

  & .search-form {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 10px;
    padding: 0 16px;
    background: white;
    & input {
      width: 90%;
      padding: 16px;
      border-radius: 10px;
      border: 0;
      &:focus {
        outline: none;
      }
    }
  }
}



.default-layout {
  margin-top: 50px;
  @media (max-width: 1024px) {
    margin-top: 0;
  }
}
.docs-layout .logo {
  width: 35%;
  @media (max-width:1552px){
    width:50%
  }
   @media (max-width: 1024px) {
    width: auto;
  }
  @media (max-width:1282px){
    width: 20%;
    h4{
      display: none;
    }
  }
}
.docs-layout .search-form {
  @media (max-width:1552px){
    display: none;
  }
}
</style>
