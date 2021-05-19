const app = new Vue(

    {
        el: '#root',

        data: {

            newTask: '',
            editable: true,

            listToDo: [
                'Lavare i piatti',
                'Fare esercizio',

            ]

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

            checkTask(index) {
                // index.classList.add("text-crossed");
                var x = this.listToDo[index]
                console.log(x);
                x.join()
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