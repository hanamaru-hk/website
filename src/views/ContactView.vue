<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  useMessage,
} from 'naive-ui'

const { t } = useI18n()
const message = useMessage()

const formRef = ref(null)
const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
})

const rules = computed(() => ({
  name: { required: true, message: t('contact.rules.nameRequired'), trigger: ['blur'] },
  email: { required: true, message: t('contact.rules.emailRequired'), trigger: ['blur'] },
}))

function handleSubmit() {
  formRef.value?.validate((errors) => {
    if (errors) return
    message.success(t('contact.success'))
    form.value = { name: '', phone: '', email: '', message: '' }
  })
}
</script>

<template>
  <section>
    <h2 class="title">{{ t('contact.title') }}</h2>
    <p class="intro">{{ t('contact.intro') }}</p>

    <div class="contact-links">
      <n-card class="link-card" :title="t('contact.email')">
        <p>info@hanamaru.hk</p>
        <n-button
          tag="a"
          href="mailto:info@hanamaru.hk"
          target="_blank"
          type="primary"
          size="small"
        >
          {{ t('contact.sendEmail') }}
        </n-button>
      </n-card>

      <n-card class="link-card" :title="t('contact.whatsapp')">
        <p>5980 6801</p>
        <n-button
          tag="a"
          href="https://wa.me/59806801"
          target="_blank"
          rel="noopener noreferrer"
          type="primary"
          size="small"
        >
          {{ t('contact.chatOnWhatsApp') }}
        </n-button>
      </n-card>
    </div>

    <n-card :title="t('contact.formTitle')" class="form-card">
      <n-form ref="formRef" :model="form" :rules="rules" label-placement="top">
        <n-form-item :label="t('contact.name')" path="name">
          <n-input v-model:value="form.name" :placeholder="t('contact.placeholders.name')" />
        </n-form-item>
        <n-form-item :label="t('contact.phone')" path="phone">
          <n-input v-model:value="form.phone" :placeholder="t('contact.placeholders.phone')" />
        </n-form-item>
        <n-form-item :label="t('contact.emailField')" path="email">
          <n-input v-model:value="form.email" :placeholder="t('contact.placeholders.email')" />
        </n-form-item>
        <n-form-item :label="t('contact.message')" path="message">
          <n-input
            v-model:value="form.message"
            type="textarea"
            :placeholder="t('contact.placeholders.message')"
            :rows="4"
          />
        </n-form-item>
        <n-button type="primary" block @click="handleSubmit">{{ t('contact.submit') }}</n-button>
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
  color: rgba(31, 35, 41, 0.7);
}

.contact-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.link-card p {
  margin-bottom: 0.75rem;
  color: rgba(31, 35, 41, 0.8);
}

.form-card {
  max-width: 560px;
}
</style>
