const app = new Vue(

    {
        el: '#root',

        data: {
            newTask: '',
            listToDo: [
                'Lavare i piatti',
                'fare esercizio',

            ],
            methods: {
                addTask() {

                    this.listToDo.push(this.newTask)



                },






            },




        }



    }

);