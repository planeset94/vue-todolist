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

            ],
            completeList: [
                'ciao',
                'ciao',
                'ciao',
                'ciao',
                'ciao',
                'ciao',
                'ciao',
                'ciao',
            ],

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