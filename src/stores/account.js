import { defineStore } from 'pinia'
import { supabase } from "../clients/supabase"

export const useAccountStore = defineStore('account', {
    state: () => {
        return {
            email: "",
            id: "",
            logStatus: false
        }
    },

    actions: {
        async registerUser() {
            try {
                const { data, error } = await supabase.auth.getUser();
                
                if (error) throw error;

                if (data)
                {
                    this.email = data.user.email;
                    this.id = data.user.id;
                    this.logStatus = true;
                }
                

            } catch (error) {
                console.error("Error fetching user:", error.message);
            }
        }
    }
})