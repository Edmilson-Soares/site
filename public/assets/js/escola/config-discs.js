console.log(user, "dd")

let t_discs;



$(document).ready(function() {

    t_discs = $('#discs').DataTable({

        lengthMenu: [3, 6, 9, 12],
        "oLanguage": {
            "sSearch": "Buscar"
        }
    });


    $('#discs tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
        let data = t_discs.row(this).data();



        if (data) {
            app.disc = app.discs.find(disc => disc.id == data[0])

            if (app.disc) {
                app.disc.row = this
                app.disc.classess = app.disc.classes

                app.disc.classes = []

                $("#disc").modal('show')
                app.classes.map(classe => {

                    let ok = app.disc.classess.find(c => c.id == classe.id)
                    if (ok) {
                        classe.ok = true
                    } else {
                        classe.ok = false
                    }

                    console.log(classe)

                    app.disc.classes.push(classe)

                })

                console.log(app.disc, "dddd")
            }

        }




    });




    user.admin_escola.escola.ensino.configs.config_disciplinas.forEach(disc => {
        t_discs.row.add([disc.id, disc.nome]).draw(false);
    });



});


const app = Vue.createApp({
    data() {
        return {
            user,
            disc: {},
            discs: user.admin_escola.escola.ensino.configs.config_disciplinas,
            add_disc: {

                config: user.admin_escola.escola.ensino.configs.id

            }

        }
    },
    created() {


    },
    methods: {


        deletedisc() {
            swal({
                    title: 'Are you sure?',
                    text: 'Once deleted, you will not be able to recover this imaginary file!',
                    icon: 'warning',
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {

                    if (willDelete) {
                        axios
                            .delete('/escola/api/config/disciplinas/' + app.disc.id)
                            .then(({
                                data
                            }) => {

                                let a;
                                app.discs.map((disc, index) => {
                                    if (disc.id == app.disc.id) {
                                        a = index
                                    }
                                })

                                if (a) {
                                    app.discs.splice(a, 1);

                                    t_discs.row(app.disc.row)
                                        .remove()
                                        .draw(false);


                                }

                                $("#disc").modal('hide');

                                iziToast.success({
                                    title: 'Hello, world!',
                                    message: 'This awesome plugin is made by iziToast',
                                    position: 'topRight'
                                });


                            })
                            .catch(error => {
                                // Handle error.
                                console.log(error)

                                iziToast.info({
                                    title: 'Hello, world!',
                                    message: 'This awesome plugin is made by iziToast',
                                    position: 'topRight'
                                });


                            });

                    }
                });


        },

        editdisc() {
            let classes = []


            this.disc.classes.forEach(classe => {
                if (classe.ok) {
                    classes.push(classe.id)

                    classe.ok = false
                }

            })

            axios
                .put('/escola/api/config/disciplinas/' + this.disc.id, {

                    data: {
                        nome: this.disc.nome,
                        descricao: this.disc.descricao,
                        classes
                    }
                })
                .then(({
                    data
                }) => {
                    $("#disc").modal('hide');

                    t_discs
                        .clear()
                        .draw();

                    app.disc.classes = data.classes.map(classe => {
                        classe.ok = true;
                        return classe;
                    })

                    app.discs.map(disc => {

                        if (disc.id == app.disc.id) {
                            disc = data
                        }

                        t_discs.row.add([disc.id, disc.nome]).draw(false);
                        return disc
                    })

                    iziToast.success({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });


                })
                .catch(error => {
                    // Handle error.
                    console.log(error)

                    iziToast.info({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });


                });





        },
        adddisc(event) {

            let classes = []

            this.classes.forEach(classe => {
                if (classe.ok) {
                    classes.push(classe.id)

                    classe.ok = false
                }
            })

            this.add_disc.classes = classes

            console.log(app.add_disc)

            event.preventDefault();
            axios
                .post('/escola/api/config/disciplinas', {

                    data: this.add_disc
                })
                .then(({
                    data
                }) => {


                    t_discs.row.add([data.id, data.nome]).draw(false);

                    app.discs.push(data)

                    iziToast.success({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });

                    app.add_disc = {
                        config: user.admin_escola.escola.ensino.configs.id

                    }

                })
                .catch(error => {
                    // Handle error.
                    console.log(error)

                    iziToast.info({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });


                });




        }

    },
}).mount('#app');
