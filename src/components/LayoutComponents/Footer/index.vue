<template>
  <div :class="$style.footer">
    <div :class="$style.inner">
      <div class="row">
        <div class="col-lg-9">
          <p>
            <strong>
              Clean UI React Admin Template - Best Solution for Your App!
            </strong>
          </p>
        </div>
      </div>
      <div :class="$style.bottom">
        <div class="row">
          <div class="col-sm-6">
            <a
              href="https://themeforest.net/item/clean-ui-react-admin-template/21938700"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-4"
            >
              <a-button type="danger">Buy Now 24$</a-button>
            </a>
          </div>
          <div class="col-sm-6">
            <div :class="$style.copyright">
              <img
                src="resources/images/mediatec.png"
                rel="noopener noreferrer"
                alt="Mediatec Software"
              />
              <span>
                © 2019
                <a
                  href="http://mediatec.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mediatec Software
                </a>
                <br />
                All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "./style.module.scss";
</style>
