<script>
    import { AuthAPI } from '@/helpers/auth';
    import PasswordField from '@/components/PasswordField.vue';
    import AlertMessage from '@/components/AlertMessage.vue';

    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    firstname: '',
                    lastname: '',
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

                let response = await AuthAPI.signup(this.form);

                this.alert.type = response.status
                this.alert.message = response.message;

                if (response.status == 'success') {
                    setTimeout(() => {
                        this.alert.type = null;
                        this.alert.message = '';

                        this.$router.push({ name: 'signin', params: { lang: this.$i18n.locale } });
                    }, 2000);
                } else {
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
					<h1>{{ $t('message.signup') }}</h1>

					<AlertMessage :message="alert.message" :type="alert.type" v-if="alert.message" />

					<div class="card teal accent-4">
						<div class="card-content">
							<form method="post" @submit.prevent="submit">
								<div class=" row">
									<div class="input-field col s12">
										<label class="auth-form-label">{{ $t('message.email') }}</label>
										<input type="text" name="email" v-model="form.email" autocomplete="off" />
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<label class="auth-form-label">{{ $t('message.password') }}</label>
										<PasswordField elemId="password" v-model="form.password" />
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<label class="auth-form-label">{{ $t('message.firstname') }}</label>
										<input type="text" name="firstname" v-model="form.firstname" />
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<label class="auth-form-label">{{ $t('message.lastname') }}</label>
										<input type="text" name="lastname" v-model="form.lastname" />
									</div>
								</div>
								<div class="row">
									<div class="col s12 right-align">
										<router-link :to="{ name: 'signin', params: { lang: this.$i18n.locale } }" class="white-text">{{ $t('message.signin') }}
										</router-link>
									</div>
								</div>
								<div class="row">
									<button class="btn btn-large waves-effect waves-light" :disabled="inProgress"
										type="submit">{{ $t('message.send') }}</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>
