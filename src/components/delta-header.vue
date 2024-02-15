<template>
    <div class="component-header row">
      <div class="logo-container column">
        <img class="delta-car-care-logo" src="../assets/logo.png" />
      </div>
      <div class="address-container column">
        <div class="phone-container row">
          <div class="column">
            <img class="phone-call-icon" src="../assets/phone-call-3.png" />
          </div>
          <div class="column">
            <span class="phone-number">81110 99669</span>
          </div>
        </div>
        <div class="location-container row">
          <div class="column">
            <img class="location-icon" src="../assets/icons-location.png" />
          </div>
          <div class="column">
            <p class="phone-number">Manakarambai-Thiruvayaru Roundaanaa</p>
            <p class="phone-number">Trichy By-Pass Road, Palliagraharam</p>
            <p class="phone-number">Thanjavur, Tamilnadu - 613003</p>
          </div>
        </div>
      </div>
      <div class="menu-container column">
        <ul class="primary-nav">
          <li v-if="this.parentPage !== 'home'" class="home">
            <router-link :to="{path: '/'}" class="home">Home</router-link>
          </li>
          <li class="services">
            <router-link :to="{path: '/car-care-services'}" class="carservices">Services</router-link>
          </li>
          <li class="contactus">
            <router-link :to="{path: '/contact-us'}" class="contactus">Contact Us</router-link>
          </li>
          <li class="shop">Shop</li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
    name: "delta-header",
    props: {
      parentPage: {
        default: "home",
        type: String,
      },
    },
    data() {
        return {
            name: "delta-header",
        };
    },
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
.column {
  padding: 0 10px 0 10px;
}
.delta-car-care-logo {
    width: 200px;
    height: 100px;
  }
  .ordered-list {
    list-style: none;
    padding: 0px;
    .item-list {
      padding-bottom: 5px;
    }
  }
  .component-header {
    background-color: #000435;
    padding-bottom: 10px;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .logo-container,
    .address-container {
      flex-grow: 2;
      float: left;
    }
    .address-container {
      padding-top: 20px;
      display: grid;
      .phone-container,
      .location-container {
        display: inline-flex;
      }
      .phone-container {
        align-items: baseline;
      }
    }

    .primary-nav li {
      list-style: none;
      border: 2px solid #00a5e5 !important;
      border-radius: 20px;
      padding: 5px 15px 5px 15px;
      line-height: 15px;
      background-color: #3397EA;
      margin-right: 8px;
      display: inline-block;
    }
    .phone-call-icon {
      width: 48px;
      height: 48px;
      border: none;
      vertical-align: middle;
    }
    .location-icon {
      width: 40px;
      height: 40px;
      border: none;
      vertical-align: middle;
    }
    .phone-number {
      margin: 0 0 5px 0;
    }

    @media screen and (max-width: 400px) {
      .phone-container {
        border-top: 1px solid white;
      }
      .location-container {
        border-bottom: 1px solid white;
      }
      .primary-nav {
        padding-left: 0px;
        padding-top: 10px;
      }
    }
  }
</style>