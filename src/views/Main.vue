<script>
import axiosInstance from "@/axiosInstance";
import NavBar from "@/components/Navbar.vue";
import FooterBar from "@/components/Footerbar.vue";

export default {
	components: {
		NavBar,
		FooterBar
	},

	data() {
		return {
			user: null,
		}
	},

	mounted() {
		this.checkUser();
	},

	updated() {
		this.checkUser();
	},

	methods: {
		checkUser() {
			const accessToken = localStorage.getItem('accessToken');

			if (accessToken && !this.user) {
				axiosInstance.get('/api-me', {
					headers: {
						Authorization: 'Bearer ' + accessToken
					}
				}).then((response) => {
					let result = response.data;
					if (result.status == 'success') {
						this.user = result.data;
					}
				});
			}
		},

		signout() {
			this.user = null;
		}
	}
}
</script>

<template>
	<header>
		<NavBar :user="user" @signout="signout" />
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

