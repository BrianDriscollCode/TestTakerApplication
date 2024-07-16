import { defineStore } from 'pinia'

export const useCreateTestStore = defineStore('createTest', {
    state: () => {
        return {
            title: "",
            numberOfQuestions: 0,
            testID: "",
            questionObject: {}
        }
    },

    actions: 
    {
        getInfo()
        {
            console.log(this.title);
            console.log(this.numberOfQuestions);
            console.log(this.testID);
            console.log(this.questionObject);
        }
    }
})