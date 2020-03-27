<template>
  <div>
    <div class="text-center mb-5">
      <h1 class="mb-5">
        <strong>Welcome to {{ settings.logo }}</strong>
      </h1>
      <p>
        Pluggable enterprise-level application framework.
        <br />An excellent front-end solution for web applications built upon Ant Design.
        <br />Credentials for testing purposes -
        <strong>admin@mediatec.org</strong> /
        <strong>cleanui</strong>
      </p>
    </div>
    <div class="card" :class="$style.container">
      <div class="text-dark font-size-24 mb-4">
        <strong>Sign in to your account</strong>
      </div>
      <a-form class="mb-4" :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            size="large"
            placeholder="Email"
            v-decorator="['email', { initialValue: 'admin@mediatec.org', rules: [{ required: true, message: 'Please input your username!' }]}]"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            size="large"
            placeholder="Password"
            type="password"
            v-decorator="['password', {initialValue: 'mediatec', rules: [{ required: true, message: 'Please input your Password!' }]}]"
          />
        </a-form-item>
        <a-button type="primary" htmlType="submit" size="large" class="text-center w-100">
          <strong>Sign in</strong>
        </a-button>
      </a-form>
      <router-link to="/auth/forgot-password" class="kit__utils__link font-size-16">Forgot Password?</router-link>
    </div>
    <div class="text-center pt-2 mb-auto">
      <span class="mr-2">Don't have an account?</span>
      <router-link to="/auth/register" class="kit__utils__link font-size-16">Sign up</router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'CuiLogin',
  computed: mapState(['settings']),
  data: function () {
    return {
      form: this.$form.createForm(this),
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$nprogress.start()
          this.$auth.login(values.email, values.password)
            .then(() => {
              this.$nprogress.done()
              this.$router.push('/')
              this.$notification.success({
                message: 'Logged In',
                description: 'You have successfully logged in to Air UI Vue Admin Template!',
              })
            })
            .catch((error) => {
              this.$nprogress.done()
              this.$notification.warning({
                message: error.code,
                description: error.message,
              })
            })
        }
      })
    },
  },
}
</script>
<style lang="scss" module>
@import "@/components/system/Auth/style.module.scss";
</style>
