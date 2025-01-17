<script>
import NavBar from "@/components/Navbar.vue";
import FooterBar from "@/components/Footerbar.vue";
import { AuthAPI } from "@/helpers/auth";
import { store } from '@/store';

export default {
	components: {
		NavBar,
		FooterBar
	},

	data() {
		return {
			store
		}
	},

	mounted() {
		this.checkUser();
        this.setLang();
	},

	updated() {
		this.checkUser();
	},

	methods: {
		async checkUser() {
			const accessToken = localStorage.getItem('accessToken');

			if (accessToken && !this.store.user) {
				let user = await AuthAPI.getUser(accessToken);

				if (user) {
					this.store.setUser(user);
				}
			}
		},
        setLang() {
            this.$i18n.locale = this.$route.params.lang;
        }
	}
}
</script>

<template>
	<header>
		<NavBar />
	</header>
	<main>
		<router-view v-slot="{ Component, route }">
			<transition name="fade" mode="out-in">
				<div :key="route.name" class="main-inner">
					<component :is="Component"></component>
				</div>
			</transition>
		</router-view>
	</main>
	<footer class="page-footer">
		<FooterBar />
	</footer>
</template>

