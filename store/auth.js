import { defineStore } from "pinia";
import JWTService from "../src/JWTService";
import ApiService from "../src/ApiService";
export const useAuthStore = defineStore("auth",  {
    state: () => {
        return {
            user: {},
            authenicated: !!JWTService.getToken(), 
            errors: {},
        }
    },
    
    actions: {
        setAuth(user){
            this.user= user,
            this.authenicated = true;
        },
        purgeAuth(){
            this.user= {};
            this.authenicated= false;;
            JWTService.destroyToken();
        },
        setError(error){
            this.errors = error;
        },
        verifyAuth() {
            if (JWTService.getToken()) {
                ApiService.setHeader();
                ApiService.get("user")
                    .then(({ data }) => {
                        this.setAuth(data);
                    })
                    .catch(({ response }) => {
                        this.setError(response);
                        this.purgeAuth();

                    });
                } else {
                    this.purgeAuth();
                }
        },
    },
});