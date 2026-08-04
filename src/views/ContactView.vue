<script setup>
import { ref } from 'vue'
import {
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  useMessage,
} from 'naive-ui'

const message = useMessage()

const formRef = ref(null)
const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
})

const rules = {
  name: { required: true, message: 'Please enter your name', trigger: ['blur'] },
  email: { required: true, message: 'Please enter your email', trigger: ['blur'] },
}

function handleSubmit() {
  formRef.value?.validate((errors) => {
    if (errors) return
    message.success('Thank you for your enquiry, we will reply shortly.')
    form.value = { name: '', phone: '', email: '', message: '' }
  })
}
</script>

<template>
  <section>
    <h2 class="title">Contact</h2>
    <p class="intro">Same as the Hanamaru contact page.</p>

    <div class="contact-links">
      <n-card class="link-card" title="Email">
        <p>info@hanamaru.hk</p>
        <n-button
          tag="a"
          href="mailto:info@hanamaru.hk"
          target="_blank"
          type="primary"
          size="small"
        >
          Send email
        </n-button>
      </n-card>

      <n-card class="link-card" title="WhatsApp">
        <p>5980 6801</p>
        <n-button
          tag="a"
          href="https://wa.me/59806801"
          target="_blank"
          rel="noopener noreferrer"
          type="primary"
          size="small"
        >
          Chat on WhatsApp
        </n-button>
      </n-card>
    </div>

    <n-card title="Send us a message" class="form-card">
      <n-form ref="formRef" :model="form" :rules="rules" label-placement="top">
        <n-form-item label="Name" path="name">
          <n-input v-model:value="form.name" placeholder="Your name" />
        </n-form-item>
        <n-form-item label="Phone" path="phone">
          <n-input v-model:value="form.phone" placeholder="Your phone number" />
        </n-form-item>
        <n-form-item label="Email" path="email">
          <n-input v-model:value="form.email" placeholder="Your email" />
        </n-form-item>
        <n-form-item label="Message" path="message">
          <n-input
            v-model:value="form.message"
            type="textarea"
            placeholder="Any enquiries"
            :rows="4"
          />
        </n-form-item>
        <n-button type="primary" block @click="handleSubmit">Submit</n-button>
      </n-form>
    </n-card>
  </section>
</template>

<style scoped>
.title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.intro {
  margin-bottom: 1.5rem;
  color: rgba(245, 247, 250, 0.7);
}

.contact-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.link-card p {
  margin-bottom: 0.75rem;
  color: rgba(245, 247, 250, 0.8);
}

.form-card {
  max-width: 560px;
}
</style>
