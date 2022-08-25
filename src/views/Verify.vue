<script>


</script>

<template>
	<div class="main-wrapper teal accent-4">
		<div class="container">
			<div class="row">
				<div class=" col s12 l8 offset-l2 center-align white-text">
					<h1>2 Factor Authentication</h1>

					<!-- <ErrorMessage /> -->

					<!-- <SuccessMessage /> -->

					<div class="card teal accent-4">
						<div class="card-content">
							<form method="post" action="<?php echo base_url() . '/' . current_lang() . '/verify' ?>">
								<div class="form-container">
									<div class="input-field">
										<label class="auth-form-label">
											One Time Password
										</label>
										<input type="text" name="otp" />
										<input type="hidden" name="code" value="<?php echo $code; ?>" />
										<a style="color: white; font-size: 14px"
											href="/resend/' . $code ?>">
											Resend OTP
										</a>
									</div>

									<div>

									</div>
									<div>
										<button class="btn btn-large waves-effect waves-light" type="button">
											Send
										</button>

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
