<template>
  <div>
    <div class="flex-center position-ref full-height">
        <div class="content">
            <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                <div class="absolute-center w-100 p-3" style="max-width:400px;">
                    <div class="text-center">
                    <strong>Sign In</strong>
                    <div>Welcome back! Please login to your account.</div>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" name="email" v-model="form.email">
                        <has-error :form="form" field="email"/>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" v-model="form.password">
                    </div>
                    <input id="remember" type="checkbox" name="remember" v-model="remember"/>
                    <label for="remember">remember</label>
                    <div class="pull-right">
                        <router-link :to="{name:'password.forgot'}">Forgot password?</router-link>
                    </div>
                    <div>
                        <v-button :loading="form.busy">
                            Login
                        </v-button>
                    </div>
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
    middleware: 'guest',
    layout: 'basic',
    methods: {
        async login(){
            const {data} = await this.form.post('/api/login').catch(err => {
                if(error.response.data.error == "Already authenticated."){
                    window.location.href = '/home'
                }
            })

            // save token
            this.$store.dispatch('saveToken', {
                token: data.token,
                remember: this.remember
            })

            // fetch user
            await this.$store.dispatch('fetchUser')

            // redirect to user dashboard
            this.$router.push({ name: 'dashboard' })
        }
    }
}
</script>