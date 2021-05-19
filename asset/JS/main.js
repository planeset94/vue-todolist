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

            ]

        },

        methods: {
            addTask() {
                if (this.newTask !== '') {
                    this.listToDo.push(this.newTask)
                    this.newTask = ""
                }
            },

            removeTask(index) {
                console.log(index);
                this.listToDo.splice(index, 1)

            },

            checkTask(index) {
                this.check = "true"


            },

        },

        mounted() {
            document.addEventListener('keydown', (e) => {
                const key = e.key;
                if (key === 'Enter') {
                    this.addTask()
                }
            })

        }


    }








);