<template>
  <div>
    <div class="flex-center position-ref full-height">
        <div class="content">
            <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                <div class="absolute-center w-100 p-3" style="max-width:400px;">
                    <div class="text-center">
                    <blockquote style="font-size:12px; margin-top:10px;">Welcome back! Please login to your account.</blockquote>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" name="email" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" v-model="form.password">
                    </div>
                    <input type="checkbox" name="remember" v-model="remember"/>
                    <label>remember</label>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
export default {
    data: () => ({
        form: new Form({
            email: '',
            password: '',
        }),
        remember: false,
    }),
    methods: {
        async login(){
            const {data} = await this.form.post('/api/login').catch(err => {
                if(error.response.data.error == "Already authenticated."){
                    window.location.href = '/home'
                }
            })

            console.log(this.$store)
            // save token
            this.$store.dispatch('saveToken', {
                token: data.token,
                remember: this.remember
            })

            // fetch user
            await this.$store.dispatch('fetchUser')

            console.log(this.$store)
        }
    }
}
</script>

<style lang="scss" scoped>
  .full-height {
      height: 100vh;
  }

  .flex-center {
      align-items: center;
      display: flex;
      justify-content: center;
  }

  .position-ref {
      position: relative;
  }

  .top-right {
      position: absolute;
      right: 10px;
      top: 18px;
  }

  .content {
      text-align: center;
  }

  .title {
      font-size: 84px;
  }

  .links > a {
      color: #636b6f;
      padding: 0 25px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: .1rem;
      text-decoration: none;
      text-transform: uppercase;
  }

  .m-b-md {
      margin-bottom: 30px;
  }
</style>