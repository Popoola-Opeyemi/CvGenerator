<template>
  <div class="contact-us">
    <div class="columns">
      <div class="column">
        <div class="left">
          <div class="office">
            <span class="icon">
              <i class="mdi mdi-map-marker"></i>
            </span>
            <span class="text-location">San Francisco</span>
          </div>
          <div class="email">
            <span class="icon">
              <i class="mdi mdi-email"></i>
            </span>
            <span class="text-email is-col-navy">
              hi@favcode54.org
            </span>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="right">
          <a href="" class="social-link">
            <i class="mdi mdi-facebook"></i>
          </a>
          <a href="" class="social-link">
            <i class="mdi mdi-twitter"></i>
          </a>
          <a href="" class="social-link">
            <i class="mdi mdi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-us {
  padding: 0px 70px;
  .left {
    color: #3b4473;
    .text {
      &-location {
        color: black;
      }
    }
  }
  .right {
    text-align: right;
    a.social-link {
      background-color: white;
      box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.05);
      width: 50px;
      height: 50px;
      display: inline-block;
      text-align: center;
      line-height: 50px;
      margin: 0 0.3rem;
      border-radius: 5px;
      // color: #167df0;
      color: #3b4473;
      transition: all 0.3s ease;
    }
  }

  // justify-content: space-between;
}
@media (max-width: 1199px) {
  .contact-us {
    padding: 30px 0px;
    .left {
      text-align: center;
      color: #3b4473;
      .text {
        &-location {
          color: black;
        }
      }
    }
    .right {
      text-align: center;
    }

    // justify-content: space-between;
  }
}
</style>
