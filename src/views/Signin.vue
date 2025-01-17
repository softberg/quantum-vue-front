<script>
import { AuthAPI } from "@/helpers/auth";
import PasswordField from '@/components/PasswordField.vue';
import AlertMessage from "@/components/AlertMessage.vue";
import { store } from '../store';

export default {
	data() {
		return {
            store,
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
                
                store.setAccessToken(response.tokens.access_token);

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
					<h1>{{ $t('message.signin') }}</h1>

					<AlertMessage :message="alert.message" :type="alert.type" v-if="alert.message" />

					<div class="card teal accent-4">
						<div class="card-content">
							<form method="post" @submit.prevent="submit">
								<div class="row">
									<div class="input-field col s12">
										<label for="email">{{ $t('message.email') }}</label>
										<input name="email" id='email' type="text" v-model="form.email"
											autocomplete="off" />
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<label for="password">{{ $t('message.password') }}</label>
										<PasswordField elemId="password" v-model="form.password" />
									</div>
								</div>
								<div class="row">
									<div class="col s12 l6">
										<div class="row">
											<div class="col s12 left-align">
												<router-link :to="{ name: 'signup', params: { lang: this.$i18n.locale } }" class="white-text">{{ $t('message.signup') }}
												</router-link>
											</div>
										</div>
										<div class="row">
											<div class="col s12 left-align">
												<router-link :to="{ name: 'forget', params: { lang: this.$i18n.locale } }" class="white-text">{{ $t('message.forget_password') }}</router-link>
											</div>
										</div>
									</div>

									<div class="col s12 l6 remember-box">
										<label>
											<input type="checkbox" name="remember" class="checkbox-white"
												v-model="form.remember" />
											<span class="white-text">{{ $t('message.remember_me') }}</span>
										</label>
									</div>
								</div>
								<div class="row">
									<button class="btn btn-large waves-effect waves-light" :disabled="inProgress"
										type="submit">{{ $t('message.signin') }}</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
