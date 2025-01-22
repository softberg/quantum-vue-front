<script>
    export default {
        props: {
            message: {
                type: String,
                required: true,
                length: false
            }
        }
    }
</script>

<template>
	<div class="material-alert error">
		<ul class="left-align" v-if="message.length">
			<li v-for="line in message">
				{{ line }}
			</li>
		</ul>
		<span v-else>
			{{ message }}
		</span>
	</div>
</template>