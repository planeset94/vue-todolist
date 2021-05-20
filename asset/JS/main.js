const app = new Vue(

    {
        el: '#root',

        data: {

            newTask: '',
            editable: true,
            check: false,
            listToDo: [
                'Lavare i piatti',
                'Fare esercizio',
                'Andare a letto',

            ],
            completeList: [],

        },

        methods: {
            addTask() {
                if (this.newTask !== '') {
                    // this.listToDo.push(this.newTask)
                    this.listToDo.unshift(this.newTask)
                    this.newTask = ""
                }
            },

            removeTask(index) {
                console.log(index);
                this.listToDo.splice(index, 1)

            },

            completeTask(index) {
                let xTask = this.listToDo[index]
                // if (!this.completeList.includes(xTask)) {
                // console.log(xTask + " " + index)
                this.completeList.unshift(xTask)
                this.listToDo.splice(index, 1)
                // }
            },

            returnTask(zindex) {
                let zTask = this.completeList[zindex]
                // console.log(zTask);
                this.listToDo.unshift(zTask)
                this.completeList.splice(zindex, 1)




            }





        },




    }








);