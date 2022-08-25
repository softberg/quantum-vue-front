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
					<h5>Very fast and extremely simple, next generation PHP MVC framework with modular
						structure,
						which
						makes it possible to create projects of any complexity.</h5>
				</div>
			</div>
			<div class="index-links">
				<router-link :to="{name: 'about'}" class="white-text">About</router-link>
				<a href="https://quantum.softberg.org" target="_blank" class="white-text">Learn More</a>
			</div>
		</div>
	</div>
	<Bubbles />
</template>
