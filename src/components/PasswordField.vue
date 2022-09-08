<script>

export default {
	props: {
		elemId: {
			type: String,
			required: true
		}
	},

	data() {
		return {
			type: 'password',
			classes: 'material-icons visibility-icon off',
			icon: 'visibility_off'
		}
	},

	methods: {
		toggleShow() {
			if (this.type === 'password') {
				this.type = 'text';
				this.classes = 'material-icons visibility-icon on';
				this.icon = 'visibility';
			} else {
				this.type = 'password';
				this.classes = 'material-icons visibility-icon off';
				this.icon = 'visibility_off';
			}
		}
	}
}

</script>

<template>
		<input name="password" :id="elemId" :type="type" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" autocomplete="off" />
		<i :class="classes" @click="toggleShow">{{ icon }}</i>
</template>