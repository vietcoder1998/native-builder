<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

type ImgInfo = {
  index: Number
  src: String
  title: String
  thumbnail: String
}

export default defineComponent({
  name: 'modal',
  components: {},
  props: {
    title: String,
    index: Number,
    src: String,
    thumbnail: String,
    show: Boolean,
  }
})

</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <h5>Đổi thông tin ảnh</h5>
      <div class="modal-wrapper">
        <div class="modal-container">
          <input v-model="index" type="number" placeholder="src" />
          <input v-model="src" type="text" placeholder="src" />
          <input v-model="title" type="text" placeholder="title" />
          <input v-model="thumbnail" type="text" placeholder="thumbnail" />
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button p-2" @click="$emit('update')">
                Submit
              </button>
              <button class="modal-default-button p-2" @click="$emit('close')">
                close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}
.modal-footer {
  padding: 10px;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
