<script>
import LangSwitcher from '@/components/LangSwitcher.vue'

export default {
	components: {
		LangSwitcher
	}
}
</script>

<template>
	<nav class="teal accent-4">
		<div class="nav-wrapper row">
			<span class="navbar-logo">
				<router-link :to="{name: 'home'}">
					<img alt="Quantum PHP Framework" class="logo" src="@/assets/images/quantum-logo-white.png" />
				</router-link>
			</span>

			<ul class="right">
				<li>
					<router-link :to="{name: 'posts'}" class="white-text">
						Posts
					</router-link>
				</li>
				<li class="auth-lang-switcher">
					<LangSwitcher />
				</li>

			</ul>
		</div>
	</nav>
</template>

