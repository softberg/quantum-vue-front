<script>
import LangSwitcher from '@/components/LangSwitcher.vue'

export default {
	components: {
		LangSwitcher
	},

	props: {
		user: {
			type: Object,
			default: null
		}
	},

	updated() {
		M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
	},

	methods: {
		signout() {
			localStorage.removeItem('accessToken');
			localStorage.removeItem('refreshToken');

			this.$emit("signout");
			this.$router.push({ name: 'home' });
		}
	}
}
</script>

<template>
	<nav class="teal accent-4">
		<div class="nav-wrapper row">
			<span class="navbar-logo" v-show="$route.name !== 'home'">
				<router-link :to="{ name: 'home' }">
					<img alt="Quantum PHP Framework" class="logo" src="@/assets/images/quantum-logo-white.png" />
				</router-link>
			</span>

			<ul class="right">
				<li>
					<router-link :to="{ name: 'posts' }" class="white-text">Posts</router-link>
				</li>
				<template v-if="user">
					<li>
						<a class="dropdown-trigger login-list" href="javascript:;" data-target="dropdown1">
							<span class="hide-on-small-only show-on-medium-and-up">
								<i class="material-icons show-on-small hide-on-med-and-up">person</i>
								{{ user.firstname }} {{ user.lastname }}
								<i class="material-icons right">arrow_drop_down</i>
							</span>
						</a>
						<ul id="dropdown1" class="dropdown-content">
							<li>
								<router-link :to="{ name: 'my-posts' }">
									My Posts
								</router-link>
							</li>
							<li>
								<a href="javascript:;" @click="signout">
									Signout
								</a>
							</li>
						</ul>
					</li>
				</template>
				<template v-else>
					<li v-if="$route.name != 'signup'">
						<router-link :to="{ name: 'signup' }" class="white-text">Sign Up</router-link>
					</li>
					<li v-if="$route.name != 'signin'">
						<router-link :to="{ name: 'signin' }" class="white-text">Sign In</router-link>
					</li>
				</template>
				<li class="auth-lang-switcher">
					<LangSwitcher />
				</li>

			</ul>
		</div>
	</nav>
</template>

