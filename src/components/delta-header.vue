<template>
    <div class="component-header row">
      <div class="logo-container column">
        <img class="delta-car-care-logo" src="../assets/logo.png" />
      </div>
      <div v-if="parentPage!=='contactus'" class="offer-container column">
        <div id="offer-div" @click="$emit('my-event')">
          <span id="offer">Click for Offer</span>
        </div>
      </div>
      <div class="address-container column">
        <div class="phone-container row">
          <div class="column">
            <img class="phone-call-icon" src="../assets/phone-call-3.png" />
          </div>
          <div class="column-spec">
            <ul class="telephone-ul">
              <li><a href="tel:+91-81110 99669" class="phone-number">81110 99669</a></li>
            </ul>
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
            <ul class="directions-ul">
              <li>
                <a class="phone-number" href="https://www.google.com/maps/place/Delta+Car+Care+-+Car+Wash+in+Thanjavur+%7C+Car+Detailing+(Interior%2FExterior+Cleaning)+%7C+Car+Polish/@10.8281488,79.127246,17z/data=!3m1!4b1!4m6!3m5!1s0x3baac700159ad561:0xd0000ec250a922bf!8m2!3d10.8281488!4d79.1298209!16s%2Fg%2F11vpv2gzch?entry=ttu" target="_blank">Get Directions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="menu-container column">
        <ul class="primary-nav">
          <li v-if="this.parentPage !== 'home'" class="home">
            <router-link :to="{path: '/'}" class="home">Home</router-link>
          </li>
          <li class="services">
            <router-link :to="{path: '/car-care-combos'}" class="carCombos">Combos</router-link>
          </li>
          <li class="contactus">
            <router-link :to="{path: '/contact-us'}" class="contactus">Book Appointments</router-link>
          </li>
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
    mounted() {
      // 47CFE5DE
      if(this.parentPage !== 'contactus') {
        var blink = document.getElementById('offer'); 

        setInterval(function () { 
          blink.style.opacity = 
              (blink.style.opacity == 0 ? 1 : 0); 
        }, 1000); 
      }
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
    .offer-container {
      margin-top: 40px;
      #offer-div {
        background: #3397EA;
        width: 70px;
        height: 50px;
        border-radius: 45%;
        text-align: center;
        #offer { 
            font-size: 14px; 
            font-weight: bold; 
            font-family: sans-serif; 
            color: red;
            vertical-align: sub;
        } 
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
      .home,
      .carCombos,
      .contactus {
        text-decoration: none;
      }
    }
    .telephone-ul,
    .directions-ul  {
      padding-left: 0px;
      li {
        width: fit-content;
        list-style: none;
        border: 2px solid #00a5e5 !important;
        border-radius: 20px;
        padding: 5px 15px 5px 15px;
        line-height: 15px;
        background-color: #3397EA;
        margin-right: 8px;
        a {
          text-decoration: none;
        }
      }
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
      color: white;
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
      .contactus {
        text-decoration: none;
        margin-top: 10px;
      }
    }
  }
</style>