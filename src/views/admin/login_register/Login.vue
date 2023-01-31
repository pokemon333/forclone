<template>
    <div class="container">
        <div class="flex justify-center">
            <div class="w-1/3 h-screen rounded">
                <form @submit.prevent="login" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    class="flex flex-col justify-center w-full my-24 text-gray-500 rounded-lg bg-gray-50">
                    <h1 class="p-2 mx-auto my-6 text-3xl text-gray-500">Sign In</h1>
                    <div class="flex flex-col">
                        <label class="px-2 py-1 m-2 mb-0" for="email">Email</label>
                        <input type="text"
                            class="px-2 py-1 m-4 my-0 border-b-2 rounded caret-gray-400 h-2/3 focus:outline-none"
                            v-model="loginData.email">
                    </div>

                    <div class="flex flex-col">
                        <label class="px-2 py-1 m-2 mb-0" for="password">Password</label>
                        <input type="password"
                            class="px-2 py-1 m-4 my-0 border-b-2 rounded caret-gray-400 h-2/3 focus:outline-none"
                            v-model="loginData.password">
                    </div>

                    <div class="flex justify-between my-4">
                        <div class="flex flex-col m-4">
                            <a href="#" class="my-2 hover:text-gray-600">Forgot password?</a>
                            <router-link :to="{ name: 'AdminRegister' }" class="hover:text-gray-600">Don't have an
                                account?</router-link>
                        </div>
                        <button
                            class="px-4 py-1 m-4 mt-10 bg-gray-300 rounded h-2/3 hover:bg-gray-400 hover:text-white">sign
                            in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from '../../../ApiService'
import JWTService from '../../../JWTService.js'

export default {
    mounted() {
        if (JWTService.getToken()) {
            this.$router.push('/');
        }
    },

    data() {
        return {
            loginData: {
                email: "",
                password: ""
            }
        }
    },

    methods: {
        login() {
            ApiService.post('login', this.loginData)
                .then((response) => {
                    JWTService.saveToken(response.data.data.token);
                    if (JWTService.getToken()) {
                        window.location.assign("http://localhost:5173/admin");
                    } else {
                        console.log('error');
                    }
                })
                .catch((response) => {
                    console.log(response);
                })
        }
    }
}
</script>

<style>

</style>