<script>
import axiosInstance from '@/axiosInstance';
import PasswordField from '@/components/PasswordField.vue'
import ErrorMessage from '@/components/messages/ErrorMessage.vue';

export default {
	data() {
		return {
			form: {
				username: '',
				password: '',
				remember: false
			},
			error: {
				status: false,
				message: ''
			}
		}
	},

	methods: {
		submit() {
			axiosInstance.post('/api-signin', this.form).then((response) => {
				let result = response.data;

				if (result.status == 'error') {
					this.error.status = true;
					this.error.message = result.message;
				} else {
					localStorage.setItem('accessToken', result.tokens.access_token);
					localStorage.setItem('refreshToken', result.tokens.refresh_token);

					this.error.status = false;
					this.error.message = '';

					this.$router.push({ name: 'home' });
				}
			});
		}
	},

	components: {
		PasswordField,
		ErrorMessage
	}
}
</script>

<template>
	<div class="main-wrapper teal accent-4">
		<div class="container">
			<div class="row">
				<div class=" col s12 l8 offset-l2 center-align white-text">
					<h1>Sign In</h1>
					<ErrorMessage :message="error.message" v-if="error.message" />
					<div class="card teal accent-4">
						<div class="card-content">
							<form method="post" class="signup-form" @submit.prevent="submit">
								<div class="row">
									<div class="input-field col s12">
										<label for="username">Email</label>
										<input name="username" id='username' type="text" v-model="form.username" />
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
									<button class="btn btn-large waves-effect waves-light" type="submit">Sign
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
