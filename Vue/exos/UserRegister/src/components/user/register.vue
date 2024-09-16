<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="formSchema">
      <div class="mb-3">
        <label for="username">Username</label>
        <Field
          name="username"
          type="text"
          class="control-form"
          placeholder="Enter your username"
        />
        <ErrorMessage as="div" name="username" v-slot="{ message }">
          <div class="alert alert-danger">
            {{ message }}
          </div>
        </ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="password">Password</label>
        <Field
          name="password"
          type="password"
          class="control-form"
          placeholder="Enter your password"
        />
        <ErrorMessage as="div" name="password" v-slot="{ message }">
          <div class="alert alert-danger">
            {{ message }}
          </div>
        </ErrorMessage>
      </div>

      <button class="btn btn-primary">Submit</button>
    </Form>
  </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const formSchema = yup.object({
  username: yup.string().required().min(2),
  password: yup.string().required().min(10),
});

function onSubmit(values) {
  console.log("form submited");
  console.log(values);
}
</script>

<style scoped>
footer {
  background: #607d8b;
  padding: 20px;
  color: white;
}
</style>
