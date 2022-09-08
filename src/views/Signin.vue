<script>
import { AuthAPI } from "@/helpers/auth";
import PasswordField from '@/components/PasswordField.vue';
import AlertMessage from "@/components/AlertMessage.vue";

export default {
	data() {
		return {
			form: {
				email: '',
				password: '',
				remember: false
			},
			alert: {
				type: null,
				message: ''
			},
			inProgress: false
		}
	},

	methods: {
		async submit() {
			this.inProgress = true;

			let response = await AuthAPI.signin(this.form);


			if (response.status == 'success') {
				localStorage.setItem('accessToken', response.tokens.access_token);
				localStorage.setItem('refreshToken', response.tokens.refresh_token);

				this.alert.type = null;
				this.alert.message = '';

				this.$router.push({ name: 'home' });
			} else {
				this.alert.type = response.status;
				this.alert.message = response.message;
				this.inProgress = false;
			}
		}
	},

	components: {
		PasswordField,
		AlertMessage
	}
}
</script>

<template>
	<div class="main-wrapper teal accent-4">
		<div class="container">
			<div class="row">
				<div class=" col s12 l8 offset-l2 center-align white-text">
					<h1>Sign In</h1>

					<AlertMessage :message="alert.message" :type="alert.type" v-if="alert.message" />

					<div class="card teal accent-4">
						<div class="card-content">
							<form method="post" @submit.prevent="submit">
								<div class="row">
									<div class="input-field col s12">
										<label for="email">Email</label>
										<input name="email" id='email' type="text" v-model="form.email"
											autocomplete="off" />
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<label for="password">Password</label>
										<PasswordField elemId="password" v-model="form.password" />
									</div>
								</div>
								<div class="row">
									<div class="col s12 l6">
										<div class="row">
											<div class="col s12 left-align">
												<router-link :to="{ name: 'signup' }" class="white-text">Sign Up
												</router-link>
											</div>
										</div>
										<div class="row">
											<div class="col s12 left-align">
												<router-link :to="{ name: 'forget' }" class="white-text">Forgot
													Password?
												</router-link>
											</div>
										</div>
									</div>

									<div class="col s12 l6 remember-box">
										<label>
											<input type="checkbox" name="remember" class="checkbox-white"
												v-model="form.remember" />
											<span class="white-text">Remember Me</span>
										</label>
									</div>
								</div>
								<div class="row">
									<button class="btn btn-large waves-effect waves-light" :disabled="inProgress"
										type="submit">Sign
										In</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
