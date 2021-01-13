<template>
<v-layout row wrap mx-13 my-5>
  <v-flex sm12 md12 lg12>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-layout row wrap>
        <v-flex sm12 md12 lg6>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="first"
                        :rules="firstRules"
                        label="First Name"
                        :counter="10"
                        filled
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="last"
                        label="Last Name"
                        :counter="10"
                        filled
                    ></v-text-field>
                    </v-col>
                </v-row>
                    <v-text-field
                    v-model="phone"
                    
                    :rules="phoneRules"
                    label="Phone"
                    filled
                    clearable
                    required
                    ></v-text-field>

                <v-text-field
                v-model="email"
                filled
                clearable
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>

                <v-checkbox
                v-model="checkbox"
                label="Subscribe to Our Newsletter"
                required
                ></v-checkbox>
        </v-flex>
        <v-flex pl-9 sm12 md12 lg5>
            <v-textarea
                filled
                name="input-7-4"
                label="Write Message"
                placeholder="Send us your query anytime!"
            ></v-textarea>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
        <v-flex sm6 md12 lg12>
                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >
                Submit
                </v-btn>

                <v-btn
                color="red--text text--darken-4"
                class="mr-4"
                @click="reset"
                >
                Reset Form
                </v-btn>
        </v-flex>
    </v-layout>
  </v-form>
  </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      first: '',
      firstRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      last: '',
      lastRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Phone is required',
        v => (v && v.length <= 20) || 'Phone Number must be Valid',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>