<template>
  <transition name="fade">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">    
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">   
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
            <button class="modal-default-button" @click="$emit('close')"> Cancel </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Modal",
  data() {
    
    return {
      showModal: false
    };
    
  },
 
  methods: {
    closeModal() {
      this.showModal = false;
       document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.showModal = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    onCancel() {
			this.$emit("cancel");}
}
}
</script>

<style scoped>
.modal {
 position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  overflow-x: hidden;
  overflow-y: auto;
} .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
    
    position: relative;
    width: 600px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
}
}
.modal-header h3 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px 20px 10px;
}

.modal-body {
  display: none;
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
.modal-footer {
  padding: 10px 20px 20px;
}

.modal-default-button {
  float: right;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
   opacity: 0;
}

</style>