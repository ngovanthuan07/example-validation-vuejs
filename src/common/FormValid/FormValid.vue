<script>
import {rules, messages} from "./Request/formRequest.js";
import {ValidateField, ValidateFormData} from "./validation/validation.js";

export default {
  methods: {
    handleBlur(fieldName) {
      this.errors[fieldName] = ValidateField(this.formData[fieldName], rules[fieldName], messages[fieldName])
    },
    hasError(fieldName) {
      return !this.errors[fieldName] ?  false : (
          !(this.errors[fieldName].length > 0) ? false : true
      );
    },
    getFirstError(fieldName) {
      return this.errors[fieldName][0]
    },
    onRegister() {
      this.errors = ValidateFormData(this.formData, rules, messages)
    }
  },
  computed: {


  },
  data() {
    return {
      errors : {},
      formData: {
        fullName: '',
        username: '',
        email: '',
        phone: '',
        language: '',
        address: '',
        password: '',
        passwordConfirm: '',
        note: '',
      }
    }
  }
}
</script>

<template>

  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="form-group">
          <label for="normalInput1"
                 class="form-label">Full Name</label>
          <input
                 v-model="formData.fullName"
                 @blur="handleBlur('fullName')"
                 type="text" class="form-control"
                 :class="{'is-validate' : hasError('fullName') === true }"
                 id="normalInput1"
          />
          <div v-if="hasError('fullName')" class="error-message">
            {{getFirstError('fullName')}}
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="form-group">
          <label for="normalInput2" class="form-label">Email</label>
          <input type="text"
                 v-model="formData.email"
                 class="form-control"
                 @blur="handleBlur('email')"
                 :class="{'is-validate' : hasError('email') === true }"
                 id="normalInput2"
          />
          <div v-if="hasError('email')" class="error-message">
            {{getFirstError('email')}}
        </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <div class="form-group">
          <label for="normalInput1"
                 class="form-label">Username</label>
          <input
              type="text" class="form-control"
              maxlength="50"
              id="normalInput1"
          />
        </div>
      </div>

      <div class="col-3">
        <div class="form-group">
          <label for="normalInput2" class="form-label">Phone</label>
          <input type="text"
                 class="form-control"
                 id="normalInput2"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="form-group">
          <label for="normalInput1" class="form-label">Password</label>
          <input type="text"
                 class="form-control"
                 id="normalInput1"
                 />
        </div>
      </div>

      <div class="col-3">
        <div class="form-group">
          <label for="normalInput2" class="form-label">Confirm Password</label>
          <input type="text"
                 class="form-control"
                 />
        </div>
      </div>
    </div>
    <div class="row">

      <div class="col-4">
        <div class="form-group">
          <label for="selectInputPrefectures" class="form-label">Language</label>
          <select class="form-select form-control" id="selectInputPrefectures">
            <option value="0"></option>
            <option value="1">Javascript</option>
            <option value="2">Python</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label for="textareaInput" class="form-label">Note</label>
          <textarea class="form-control"
                    id="textareaInput"
                    rows="5"
                    @blur="handleBlur('email')"
                    :class="{'is-validate' : hasError('email') === true }"
          ></textarea>
          <div v-if="hasError('email')" class="error-message">
            {{getFirstError('email')}}
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-2 mt-2">
        <button class="btn btn-primary" @click="onRegister">Register</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./css/css.css";
</style>