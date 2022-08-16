console.log(user, "dd")

let t_discs, t_turmas, t_salas, t_pausa_aulas, t_precificacoes, t_funcionarios;



$(document).ready(function() {

    t_discs = $('#discs').DataTable({

        lengthMenu: [3, 6, 9, 12],
        "oLanguage": {
            "sSearch": "Buscar"
        }
    });

    t_turmas = $('#t_turmas').DataTable({

        lengthMenu: [3, 6, 9, 12],
        "oLanguage": {
            "sSearch": "Buscar"
        }
    });

    t_salas = $('#t_salas').DataTable({

        lengthMenu: [3, 6, 9, 12],
        "oLanguage": {
            "sSearch": "Buscar"
        }
    });

    t_pausa_aulas = $('#pausa_aulas').DataTable({

        lengthMenu: [3, 6, 9, 12],
        "oLanguage": {
            "sSearch": "Buscar"
        }
    });

    t_precificacoes = $('#t_precificacoes').DataTable({

        lengthMenu: [3, 6, 9, 12],
        "oLanguage": {
            "sSearch": "Buscar"
        }
    });

    t_funcionarios = $('#t_funcionarios').DataTable({

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

    $('#t_turmas tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
        let data = t_turmas.row(this).data();

        if (data) {
            app.turma = app.turmas.find(turma => turma.id == data[0])

            if (app.turma) {
                app.turma.row = this
                if (app.turma.config_classe) {
                    app.turma.classe = app.turma.config_classe.id
                } else {
                    app.turma.classe = null
                }


                $("#turma").modal('show')
                console.log(app.turma, "dddd")
            }

        }




    });

    $('#t_salas tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
        let data = t_salas.row(this).data();

        if (data) {
            app.sala = app.salas.find(sala => sala.id == data[0])

            if (app.sala) {
                app.sala.row = this
                if (app.sala.turma_manha) {
                    app.sala.manha = app.sala.turma_manha.id
                } else {
                    app.sala.manha = null
                }
                if (app.sala.turma_tarde) {
                    app.sala.tarde = app.sala.turma_tarde.id
                } else {
                    app.sala.tarde = null
                }
                if (app.sala.turma_noite) {
                    app.sala.noite = app.sala.turma_noite.id
                } else {
                    app.sala.noite = null
                }


                $("#sala").modal('show')
                console.log(app.sala, "dddd")
            }

        }




    });

    $('#pausa_aulas tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
        let data = t_pausa_aulas.row(this).data();

        if (data) {
            app.pausa_aula = app.pausa_aulas.find(pausa_aula => pausa_aula.id == data[0])

            if (app.pausa_aula) {
                app.pausa_aula.row = this

                $("#pausa_aula").modal('show')
                console.log(app.pausa_aula, "dddd")
            }

        }

    });

    $('#t_precificacoes tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
        let data = t_precificacoes.row(this).data();

        if (data) {
            app.precificacao = app.precificacoes.find(precificacao => precificacao.id == data[0])

            if (app.precificacao) {
                app.precificacao.classe = 0
                app.precificacao.row = this


                $("#precificacao").modal('show')
                console.log(app.precificacao, "dddd")
            }

        }

    });

    $('#t_funcionarios tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
        let data = t_funcionarios.row(this).data();

        if (data) {
            app.funcionario = app.funcionarios.find(funcionario => funcionario.id == data[0])

            if (app.funcionario) {
                app.funcionario.classe = 0
                app.funcionario.row = this


                $("#funcionario").modal('show')
                console.log(app.funcionario, "dddd")
            }

        }

    });


    user.admin_escola.escola.ensino.configs.config_disciplinas.forEach(disc => {
        t_discs.row.add([disc.id, disc.nome]).draw(false);
    });

    user.admin_escola.escola.ensino.configs.config_turmas.forEach(turma => {
        t_turmas.row.add([turma.id, turma.nome]).draw(false);
    });


    user.admin_escola.escola.ensino.configs.config_salas.forEach(sala => {
        t_salas.row.add([sala.id, sala.nome]).draw(false);
    });
    //config_precificacoes
    user.admin_escola.escola.ensino.configs.config_pausa_de_aulas.forEach(pausa_de_aula => {
        t_pausa_aulas.row.add([pausa_de_aula.id, pausa_de_aula.nome]).draw(false);
    });

    user.admin_escola.escola.ensino.configs.config_precificacoes.forEach(precificacao => {
        t_precificacoes.row.add([precificacao.id, precificacao.nome]).draw(false);
    });

    user.admin_escola.escola.funcionarios_cargo.forEach(funcionario => {
        t_funcionarios.row.add([funcionario.user.identificacao, funcionario.user.email, funcionario.funcao]).draw(false);
    });




});


let precificacao_classes = []

user.admin_escola.escola.ensino.configs.config_classes.map(classe => {
    precificacao_classes.push({ nome: classe.nome, id: classe.id })
})

const app = Vue.createApp({
    data() {
        return {
            user,
            disc: {},
            discs: user.admin_escola.escola.ensino.configs.config_disciplinas,
            classes: user.admin_escola.escola.ensino.configs.config_classes,
            turmas: user.admin_escola.escola.ensino.configs.config_turmas,
            salas: user.admin_escola.escola.ensino.configs.config_salas,
            funcionarios: user.admin_escola.escola.funcionarios_cargo,
            turma: {},
            sala: {},
            funcionario: {},
            precificacao: {
                classe: 0
            },
            pausa_aula: {},
            precificacoes: user.admin_escola.escola.ensino.configs.config_precificacoes,
            pausa_aulas: user.admin_escola.escola.ensino.configs.config_pausa_de_aulas,
            add_disc: {

                config: user.admin_escola.escola.ensino.configs.id

            },
            add_turma: {

                config: user.admin_escola.escola.ensino.configs.id

            },
            add_sala: {

                config: user.admin_escola.escola.ensino.configs.id

            },
            add_pausa_aula: {

                config: user.admin_escola.escola.ensino.configs.id

            },
            add_precificacao: {
                classe: 0,
                config_classe: precificacao_classes,
                config: user.admin_escola.escola.ensino.configs.id

            },
            add_funcionario: {

                escola: user.admin_escola.escola.id,
                ensinos: [user.admin_escola.escola.ensino.id]

            },
            add_ano_letivo: {


                ensino: user.admin_escola.escola.ensino.id

            }

        }
    },
    created() {

        //ano_letivo
    },
    methods: {

        addano_letivo(event) {

            add_ano_letivo.ano_letivo = "ffffffff"

            event.preventDefault();
            axios
                .post('/auth/register/funcionario', {

                    data: this.add_ano_letivo
                })
                .then(({
                    data
                }) => {
                    iziToast.success({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });

                    app.add_ano_letivo = {

                        ensino: user.admin_escola.escola.ensino.id

                    }



                })
                .catch(error => {
                    // Handle error.


                    iziToast.info({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });


                });




        },



        addfuncionario(event) {

            event.preventDefault();
            axios
                .post('/auth/register/funcionario', {

                    data: this.add_funcionario
                })
                .then(({
                    data
                }) => {
                    iziToast.success({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });


                    t_funcionarios.row.add([data.user.identificacao, data.user.email, data.funcao]).draw(false);

                    app.funcionarios.push(data)

                    app.add_funcionario = {
                        escola: user.admin_escola.escola.id,
                        ensinos: [user.admin_escola.escola.ensino.id]

                    }



                })
                .catch(error => {
                    // Handle error.


                    iziToast.info({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });


                });




        },


        deleteprecificacao() {
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
                            .delete('/escola/api/config/precificacoes/' + app.precificacao.id)
                            .then(({
                                data
                            }) => {

                                let a;
                                app.precificacoes.map((precificacao, index) => {
                                    if (precificacao.id == app.precificacao.id) {
                                        a = index
                                    }
                                })

                                if (a) {
                                    app.precificacoes.splice(a, 1);

                                    t_precificacoes.row(app.precificacao.row)
                                        .remove()
                                        .draw(false);


                                }

                                $("#precificacao").modal('hide');

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
        editprecificacao() {

            axios
                .put('/escola/api/config/precificacoes/' + this.precificacao.id, {

                    data: this.precificacao
                })
                .then(({
                    data
                }) => {
                    $("#precificacao").modal('hide');

                    t_precificacoes
                        .clear()
                        .draw();


                    app.precificacoes.map(precificacao => {

                        if (precificacao.id == app.precificacao.id) {
                            precificacao = app.precificacao
                        }

                        t_precificacoes.row.add([precificacao.id, precificacao.nome]).draw(false);
                        return sala
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
        addprecificacao(event) {

            event.preventDefault();
            axios
                .post('/escola/api/config/precificacoes', {

                    data: this.add_precificacao
                })
                .then(({
                    data
                }) => {
                    iziToast.success({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });



                    t_precificacoes.row.add([data.id, data.nome]).draw(false);
                    app.precificacoes.push(data)

                    app.add_precificacao = {
                        classe: 0,
                        config: user.admin_escola.escola.ensino.configs.id,
                        config_classe: precificacao_classes

                    }

                })
                .catch(error => {
                    // Handle error.


                    iziToast.info({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });


                });




        },






        deletepausa_aula() {
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
                            .delete('/escola/api/config/pausa-aulas/' + app.pausa_aula.id)
                            .then(({
                                data
                            }) => {

                                let a;
                                app.pausa_aulas.map((pausa_aula, index) => {
                                    if (pausa_aula.id == app.pausa_aula.id) {
                                        a = index
                                    }
                                })

                                if (a) {
                                    app.pausa_aulas.splice(a, 1);

                                    t_pausa_aulas.row(app.pausa_aula.row)
                                        .remove()
                                        .draw(false);

                                    $("#pausa_aula").modal('hide');
                                }



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
        editpausa_aula() {

            axios
                .put('/escola/api/config/pausa-aulas/' + this.pausa_aula.id, {

                    data: {
                        nome: this.pausa_aula.nome,
                        descricao: this.pausa_aula.descricao,
                        data_inicio: this.pausa_aula.data_inicio,
                        data_fim: this.pausa_aula.data_fim,
                    }
                })
                .then(({
                    data
                }) => {
                    $("#pausa_aula").modal('hide');

                    t_pausa_aulas
                        .clear()
                        .draw();

                    app.pausa_aulas.map(pausa_aula => {

                        if (pausa_aula.id == app.pausa_aula.id) {
                            paula_aula = app.paula_aula
                        }

                        t_pausa_aulas.row.add([pausa_aula.id, pausa_aula.nome]).draw(false);
                        return pausa_aula
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
        addpausa_aula(event) {

            event.preventDefault();
            axios
                .post('/escola/api/config/pausa-aulas', {

                    data: this.add_pausa_aula
                })
                .then(({
                    data
                }) => {
                    iziToast.success({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });

                    t_pausa_aulas.row.add([data.id, data.nome]).draw(false);
                    app.pausa_aulas.push(data)

                    app.add_pausa_aula = {
                        config: user.admin_escola.escola.ensino.configs.id

                    }


                })
                .catch(error => {
                    // Handle error.


                    iziToast.info({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });


                });




        },





        deletesala() {
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
                            .delete('/escola/api/config/salas/' + app.sala.id)
                            .then(({
                                data
                            }) => {

                                let a;
                                app.salas.map((sala, index) => {
                                    if (sala.id == app.sala.id) {
                                        a = index
                                    }
                                })

                                if (a) {
                                    app.salas.splice(a, 1);

                                    t_salas.row(app.sala.row)
                                        .remove()
                                        .draw(false);


                                }

                                $("#sala").modal('hide');

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
        editsala() {

            axios
                .put('/escola/api/config/salas/' + this.sala.id, {

                    data: {
                        nome: this.sala.nome,
                        descricao: this.sala.descricao,
                        turma_manha: this.sala.manha,
                        turma_tarde: this.sala.tarde,
                        turma_noite: this.sala.noite
                    }
                })
                .then(({
                    data
                }) => {
                    $("#sala").modal('hide');

                    t_salas
                        .clear()
                        .draw();

                    app.sala.turma_manha = data.turma_manha
                    app.sala.turma_tarde = data.turma_tarde
                    app.sala.turma_noite = data.turma_noite
                    app.salas.map(sala => {

                        if (sala.id == app.sala.id) {
                            sala = app.sala
                        }

                        t_salas.row.add([sala.id, sala.nome]).draw(false);
                        return sala
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
        addsala(event) {

            event.preventDefault();
            axios
                .post('/escola/api/config/salas', {

                    data: this.add_sala
                })
                .then(({
                    data
                }) => {
                    iziToast.success({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });

                    t_salas.row.add([data.id, data.nome]).draw(false);
                    app.salas.push(data)

                    app.add_sala = {
                        config: user.admin_escola.escola.ensino.configs.id

                    }

                })
                .catch(error => {
                    // Handle error.


                    iziToast.info({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });


                });




        },


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




        },

        deleteturma() {
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
                            .delete('/escola/api/config/turmas/' + app.turma.id)
                            .then(({
                                data
                            }) => {

                                let a;
                                app.turmas.map((turma, index) => {
                                    if (turma.id == app.turma.id) {
                                        a = index
                                    }
                                })

                                if (a) {
                                    app.turmas.splice(a, 1);

                                    t_turmas.row(app.turma.row)
                                        .remove()
                                        .draw(false);


                                }

                                $("#turma").modal('hide');

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
        editturma() {


            axios
                .put('/escola/api/config/turmas/' + this.turma.id, {

                    data: {
                        nome: this.turma.nome,
                        descricao: this.turma.descricao,
                        config_classe: this.turma.classe
                    }
                })
                .then(({
                    data
                }) => {
                    $("#turma").modal('hide');

                    t_turmas
                        .clear()
                        .draw();

                    app.turma.config_classe = data.config_classe

                    app.turmas.map(turma => {

                        if (turma.id == app.turma.id) {
                            turma = app.turma
                        }

                        t_turmas.row.add([turma.id, turma.nome]).draw(false);
                        return turma
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
        addturma(event) {

            event.preventDefault();
            axios
                .post('/escola/api/config/turmas', {

                    data: this.add_turma
                })
                .then(({
                    data
                }) => {
                    iziToast.success({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });

                    t_turmas.row.add([data.id, data.nome]).draw(false);
                    app.turmas.push(data)

                    app.add_turma = {
                        config: user.admin_escola.escola.ensino.configs.id

                    }

                })
                .catch(error => {
                    // Handle error.


                    iziToast.info({
                        title: 'Hello, world!',
                        message: 'This awesome plugin is made by iziToast',
                        position: 'topRight'
                    });


                });




        },

    },
}).mount('#app');
