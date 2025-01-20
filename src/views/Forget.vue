<script>
    export default {
        computed: {
            generateForgetUrl() {
                return this.$router.resolve({
                    name: 'forget',
                    params: {
                        lang: this.$i18n.locale
                    }
                }).href;
            }
        }
    };

</script>

<template>
	<div class="main-wrapper teal accent-4">
		<div class="container">
			<div class="row">
				<div class=" col s12 l8 offset-l2 center-align white-text">
					<h1>Forgot Password?</h1>

					<!-- <ErrorMessage /> -->
					<!-- <SuccessMessage /> -->

					<div class="card teal accent-4">
						<div class="card-content">
							<form method="post" :action="generateForgetUrl">
								<div class="input-field col s12">
									<input type="text" name="email" id="email" />
									<label for="email" class="white-text">Email</label>
								</div>
								<div class="row">
									<div class="col s12 right-align">
										<router-link :to="{ name: 'signin', params: { lang: this.$i18n.locale } }" class="white-text">Signin</router-link>
									</div>
								</div>
								<div>
									<button class="btn btn-large waves-effect waves-light" type="button">Send</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
