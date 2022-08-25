<script>
import PasswordField from '@/components/PasswordField.vue'

export default {
	components: {
		PasswordField
	}
}
</script>

<template>
	<div class="main-wrapper teal accent-4">
		<div class="container">
			<div class="row">
				<div class=" col s12 l8 offset-l2 center-align white-text">
					<h1>Sign Up</h1>

					<!-- <ErrorMessage /> -->

					<div class="card teal accent-4">
						<div class="card-content">
							<form method="post" action="/signup">
								<div class="form-container">
									<div class="input-field">
										<label class="auth-form-label">Email</label>
										<input type="text" name="email" autocomplete="off" />
									</div>
									<div class="input-field p-rel">
										<label class="auth-form-label">Password</label>
										<PasswordField elemId="password" />
									</div>
									<div class="input-field">
										<label class="auth-form-label">First name</label>
										<input type="text" name="firstname" />
									</div>
									<div class="input-field">
										<label class="auth-form-label">Lasn name</label>
										<input type="text" name="lastname" />
									</div>
									<div class="row">
										<div class="col s12 right-align">
											<router-link :to="{name: 'signin'}" class="white-text">Sign In</router-link>
										</div>
									</div>
									<div>
										<button class="btn btn-large waves-effect waves-light" type="button">Send</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>
