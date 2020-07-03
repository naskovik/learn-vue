<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Form</h2>

        <form class="mid-form" @submit.prevent="showUser()">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="user.nombre" />
            <div v-if="!$v.user.nombre.required">This field is required</div>
          </div>

          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" v-model="user.apellidos"/>
            <div v-if="!$v.user.apellidos.required">This field is required</div>
          </div>

          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" v-model="user.bio"></textarea>
          </div>

          <div class="form-group radibuttons">
            <input type="radio" name="genero" value="hombre" v-model="user.sex"/> Hombre
            <input type="radio" name="genero" value="mujer" v-model="user.sex"/> Mujer
            <input type="radio" name="genero" value="otro" v-model="user.sex"/> Otro
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>

        <div class="user-data" v-if="user.nombre && user.apellidos"><h3>{{ `${user.name}  ${user.surname}:  ${user.sex}` }}</h3></div>

      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import Sidebar from './Sidebar.vue';
export default {
  name: 'Form',
  components: {
    Sidebar
  },
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2)
      },
      apellidos: {
        required,
        minLength: minLength(2)
      },
      bio: {
        minLength: minLength(10)
      }

    }
  },
  data() {
    return {
      submitted: false,
      user: {
        nombre: '',
        apellidos: '',
        bio: '',
        sex: ''
      }
    }
  },
  methods: {
    showUser() {
      console.log(this.user);
      this.submitted = true;

      this.$v.$touch();
      this.$v.$invalid ? console.log('pipa') : console.log('validated');
    }
  }
};
</script>
