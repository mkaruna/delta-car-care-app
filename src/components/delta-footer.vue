<template>
    <div class="component-footer row">
      <div class="logo-container column">
        <img class="delta-car-care-logo" src="../assets/logo.png" />
      </div>
      <div class="location-container column">
        <span class="location-text header-text">Location</span>
        <div class="location row">
          <div class="location column">
            <div>Manakarambai Thiruvayaru Roundaanaa</div>
            <div>Trichy By-Pass Road, Palliagraharam</div>
            <div>Thanjavur, Tamilnadu - 613003</div>
          </div>
        </div>
      </div>
      <div class="hours-container column">
        <span class="hours-text header-text">Hours</span>
        <div class="hours column">
          <div>Monday to Saturday 9.00 AM to 7.00 PM</div>
          <div>Sunday Closed</div>
        </div>
      </div>
      <div class="quick-links-container column">
        <span class="quick-link header-text">Quick Links</span>
        <ul class="ordered-list">
          <li id="promotions" class="item-list">Promotions</li>
          <li id="appointment" class="item-list">Appointment</li>
        </ul>
      </div>
      <div class="about-us-container column">
        <span class="about-us header-text">About US</span>
        <ul class="ordered-list">
          <li id="our-story" class="item-list">Our Story</li>
          <li id="misson" class="item-list">Misson</li>
          <li id="community" class="item-list">Community</li>
          <li id="faqs" class="item-list">FAQs</li>
        </ul>
      </div>
      <div class="contact-us-container column">
        <div class="connect-us header-text">Connect</div>
        <div class="connect-social">
          <i class="facebook-icon" onclick="open()"></i>
          <!-- <i class="facebook-icon" href="https://www.facebook.com/deltacarcare2024?mibextid=LQQJ4d" target="_blank"></i> -->
          <i class="twitter-icon"></i>
          <i class="instagram-icon"></i>
          <i class="youtube-icon"></i>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: "delta-footer",
    
    data() {
        return {
            name: "delta-footer",
        };
    },

    methods: {
      open() {
        window.open("https://www.facebook.com/deltacarcare2024?mibextid=LQQJ4d", "_blank", "noreferrer");
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

.component-footer {
    background-color: #000435;
    padding-top: 20px;
    width: 100%;
    color: rgba(255,255,255,0.8);

    display: flex;
    flex-wrap: wrap;
    .column {
      flex-grow: 2;
    }

    .header-text {
      font-size: 18px !important;
      color: #FFFFFF;
      margin-bottom: 16px;
    }
    .connect-social {
      display: flex;
      flex-wrap: wrap;
      .facebook-icon {
        width: 48px;
        height: 48px;
        border: none;
        background: url("../assets/facebook-icon.svg") no-repeat 0 0;
      }
      .twitter-icon {
        width: 48px;
        height: 48px;
        border: none;
        background: url("../assets/twitter-icon.svg") no-repeat 0 0;
      }
      .instagram-icon {
        width: 48px;
        height: 48px;
        border: none;
        background: url("../assets/instagram-icon.svg") no-repeat 0 0;
      }
      .youtube-icon {
        width: 48px;
        height: 48px;
        border: none;
        background: url("../assets/youtube-icon.svg") no-repeat 0 0;
      }
    }
    .location-text,
    .hours-text {
      font-size: 18px;
      margin-bottom: 10px;
      padding-left: 10px;
    }
    .location,
    .hours {
      display: block;
      flex-wrap: wrap;
    }
    .location,
    .hours {
      padding-top: 10px;
    }
    @media screen and (max-width: 400px) {
      .about-us-container,
      .contact-us-container {
        margin-top: 20px;
      }

        .location-container,
        .hours-container {
          display: none;
        }
        gap: 20px 20px;
    }
  }
</style>