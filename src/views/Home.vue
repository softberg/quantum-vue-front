<script>
import Bubbles from '@/components/Bubbles.vue';

export default {
	components: {
		Bubbles
	}
}
</script>

<template>
	<div class="main-wrapper teal accent-4 full-height">
		<div class="container wrapper center-align white-text">
			<div class="logo-block">
				<img alt="Quantum PHP Framework" class="logo" src="@/assets/images/quantum-logo-white.png" />
			</div>
			<h1>Quantum PHP Framework</h1>
			<div class="card teal accent-4">
				<div class="card-content">
					<h5>{{ $t('message.description') }}</h5>
				</div>
			</div>
			<div class="index-links">
				<router-link :to="{ name: 'about', params: { lang: this.$i18n.locale }}" class="white-text">{{ $t('message.about') }}</router-link>
				<a href="https://quantum.softberg.org" target="_blank" class="white-text">{{ $t('message.learn_more') }}</a>
			</div>
		</div>
	</div>
	<Bubbles />
</template>
