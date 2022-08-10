<script>

import Navbar from "@/components/Navbar.vue";

export default {
	components: {
		Navbar
	},
}
</script>

<template>
	<header>
		<Navbar />
	</header>
	<main>
		<router-view v-slot="{ Component, route }">
			<transition name="fade" mode="out-in">
				<div :key="route.name" class="main-inner">
					<component :is="Component"></component>
				</div>
			</transition>
		</router-view>
		<!-- <router-view /> -->
	</main>
</template>

