<script>
export default {
	props: {
		message: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		}
	}
}
</script>
<template>
	<div :class="['material-alert left-align', type]">
		{{ message }}
	</div>
</template>