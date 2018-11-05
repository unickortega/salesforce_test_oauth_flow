<template>
  <div>
    <div class="container">
        <div class="text-center">
            <strong>Sign Up</strong>
            <div>Fill up needed info to register.</div>
        </div>
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Name</label>
                        <input class="form-control" name="name" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" name="email" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }">
                        <has-error :form="form" field="email"/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }">
                        <has-error :form="form" field="password"/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="c_password" v-model="form.c_password" :class="{ 'is-invalid': form.errors.has('c_password') }">
                        <has-error :form="form" field="c_password"/>
                    </div>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import HasError from '~/components/HasError'
export default {
    data: () => ({
        form: new Form({
            name: '',
            email: '',
            password: '',
            c_password: ''
        }),
        remember: false,
    }),
    components: {
        HasError
    },
    middleware: 'guest',
    layout: 'basic',
    methods: {
        async login(){
            console.log(this.form)
            const {data} = await this.form.post('/api/register')
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