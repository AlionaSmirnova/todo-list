Vue.component ('task', {
    props: ['data'],
    methods: {
        task_done(){
            this.$emit('task_done');
        },
    },
    template: `
    <div class='task'>
    <div> 
    <h3 class="task__title"> {{data.title}} </h3>
    <p class="task__desc"> {{data.desc}} </p>
</div>
    <button @click='task_done()' class='task__done'> ✔ </button>
 </div>
         `
    })
var vue= new Vue({
    el: "#app",
    data: {
        newTask: {
            title:'',
            desc:'' },
        tasks: [
            {
                title:'To learn Vue.js',
                desc:'Just read some books about Vue.js'
            },
            {
                title:'Make something outstanding',
                desc: 'To tell someone about your passion'
            }
        ]
    },
    methods: {
        delete_task(id){
            this.tasks.splice(id, 1);
        },
        add_task(){
            if (this.newTask.title!=''){
                this.tasks.push({
                    title: this.newTask.title,
                    desc: this.newTask.desc
                });
                this.newTask.title='';
                this.newTask.desc='';
            }
        }
    }
})