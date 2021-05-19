const app = new Vue(

    {
        el: '#root',

        data: {

            newTask: '',
            editable: true,
            listToDo: [
                'Lavare i piatti',
                'fare esercizio',

            ]

        },

        methods: {
            addTask() {
                if (this.newTask !== '') {
                    this.listToDo.push(this.newTask)
                    this.newTask = ""
                }
            },
        },

        mounted() {
            document.addEventListener('keydown', (e) => {
                const key = e.key;
                if (key === 'Enter') {
                    app.addTask()
                }
            })

        }


    }








);