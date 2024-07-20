import { defineStore } from 'pinia'
import TestObject from '@/components/TestApp/CreateTest/testObject';

export const useCreateTestStore = defineStore('createTest', {
    state: () => {
        return {
            title: "",
            numberOfQuestions: 0,
            identifier: "",
            active: false,
            testObject: {}
        }
    },

    actions: 
    {
        getInfo()
        {
            console.log(this.title);
            console.log(this.numberOfQuestions);
            console.log(this.identifier);
            console.log(this.questionObject);
        },

        populateTestObject()
        {
            this.testObject.title = this.title;
            this.testObject.identifier = this.identifier;
        },

        getTitle()
        {
            return this.title;
        },

        getTestID()
        {
            return this.testID;
        },

        getTestObject()
        {
            return this.testObject;
        }
    }
})